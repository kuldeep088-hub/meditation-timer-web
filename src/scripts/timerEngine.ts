// High-Precision Drift-Free Meditation Timer Engine with Native Screen Wake Lock

import { audioEngine, type BellType, type AmbientType } from './audioEngine';
import { saveSession } from './storage';

export type TimerState = 'idle' | 'warmup' | 'running' | 'paused' | 'finished';

export interface TimerConfig {
  durationSeconds: number;
  warmupSeconds: number;
  intervalSeconds: number;
  bellType: BellType;
  ambientType: AmbientType;
  onTick?: (state: TimerState, remaining: number, total: number) => void;
  onStateChange?: (state: TimerState) => void;
  onComplete?: (sessionDurationSeconds: number) => void;
}

export class MeditationTimer {
  private config: TimerConfig;
  private state: TimerState = 'idle';
  private timerId: number | null = null;
  private wakeLock: any = null;

  // Precision tracking
  private phaseTotalSeconds: number = 0;
  private phaseRemainingSeconds: number = 0;
  private activeElapsedSeconds: number = 0;
  private lastTimestamp: number = 0;
  private lastIntervalTriggeredMinute: number = 0;

  constructor(config: TimerConfig) {
    this.config = config;
  }

  public updateConfig(newConfig: Partial<TimerConfig>) {
    this.config = { ...this.config, ...newConfig };
    if (this.state === 'idle') {
      this.phaseRemainingSeconds = this.config.durationSeconds;
    }
  }

  public getState(): TimerState {
    return this.state;
  }

  public getRemainingSeconds(): number {
    return this.phaseRemainingSeconds;
  }

  private async requestWakeLock() {
    try {
      if ('wakeLock' in navigator) {
        this.wakeLock = await (navigator as any).wakeLock.request('screen');
      }
    } catch {
      // Wake Lock may fail on low battery or permission denial
    }
  }

  private releaseWakeLock() {
    if (this.wakeLock) {
      try {
        this.wakeLock.release();
        this.wakeLock = null;
      } catch {
        // ignore
      }
    }
  }

  public start() {
    if (this.state === 'running' || this.state === 'warmup') return;

    this.requestWakeLock();

    if (this.state === 'paused') {
      // Resume from paused
      this.state = 'running';
      this.lastTimestamp = Date.now();
      this.runTickLoop();
      this.config.onStateChange?.(this.state);
      if (this.config.ambientType !== 'none') {
        audioEngine.startAmbient(this.config.ambientType);
      }
      return;
    }

    // New start
    this.activeElapsedSeconds = 0;
    this.lastIntervalTriggeredMinute = 0;

    if (this.config.warmupSeconds > 0) {
      this.state = 'warmup';
      this.phaseTotalSeconds = this.config.warmupSeconds;
      this.phaseRemainingSeconds = this.config.warmupSeconds;
    } else {
      this.state = 'running';
      this.phaseTotalSeconds = this.config.durationSeconds;
      this.phaseRemainingSeconds = this.config.durationSeconds;
      // Ring starting bell immediately
      audioEngine.playBell(this.config.bellType);
      if (this.config.ambientType !== 'none') {
        audioEngine.startAmbient(this.config.ambientType);
      }
    }

    this.lastTimestamp = Date.now();
    this.runTickLoop();
    this.config.onStateChange?.(this.state);
    this.config.onTick?.(this.state, this.phaseRemainingSeconds, this.phaseTotalSeconds);
  }

  public pause() {
    if (this.state !== 'running' && this.state !== 'warmup') return;
    this.state = 'paused';
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    audioEngine.stopAmbient();
    this.releaseWakeLock();
    this.config.onStateChange?.(this.state);
  }

  public reset() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    audioEngine.stopAmbient();
    this.releaseWakeLock();
    this.state = 'idle';
    this.phaseTotalSeconds = this.config.durationSeconds;
    this.phaseRemainingSeconds = this.config.durationSeconds;
    this.activeElapsedSeconds = 0;
    this.lastIntervalTriggeredMinute = 0;
    this.config.onStateChange?.(this.state);
    this.config.onTick?.(this.state, this.phaseRemainingSeconds, this.phaseTotalSeconds);
  }

  public finishEarly() {
    if (this.state === 'running' && this.activeElapsedSeconds >= 30) {
      this.completeSession(this.activeElapsedSeconds);
    } else {
      this.reset();
    }
  }

  private runTickLoop() {
    if (this.timerId) clearInterval(this.timerId);

    this.timerId = window.setInterval(() => {
      const now = Date.now();
      const delta = (now - this.lastTimestamp) / 1000;
      this.lastTimestamp = now;

      this.phaseRemainingSeconds = Math.max(0, this.phaseRemainingSeconds - delta);

      if (this.state === 'running') {
        this.activeElapsedSeconds += delta;

        // Check periodic interval chime
        if (this.config.intervalSeconds > 0) {
          const currentMinuteMark = Math.floor(this.activeElapsedSeconds / this.config.intervalSeconds);
          if (currentMinuteMark > this.lastIntervalTriggeredMinute && this.phaseRemainingSeconds > 5) {
            this.lastIntervalTriggeredMinute = currentMinuteMark;
            audioEngine.playBell(this.config.bellType);
          }
        }
      }

      this.config.onTick?.(this.state, Math.ceil(this.phaseRemainingSeconds), this.phaseTotalSeconds);

      // Check phase completion
      if (this.phaseRemainingSeconds <= 0) {
        if (this.state === 'warmup') {
          // Warmup completed -> transition to meditation session
          this.state = 'running';
          this.phaseTotalSeconds = this.config.durationSeconds;
          this.phaseRemainingSeconds = this.config.durationSeconds;
          this.activeElapsedSeconds = 0;
          this.lastIntervalTriggeredMinute = 0;
          this.config.onStateChange?.(this.state);
          
          audioEngine.playBell(this.config.bellType);
          if (this.config.ambientType !== 'none') {
            audioEngine.startAmbient(this.config.ambientType);
          }
        } else if (this.state === 'running') {
          // Meditation finished
          this.completeSession(this.config.durationSeconds);
        }
      }
    }, 250); // High sample rate prevents perceptible tick jitter
  }

  private completeSession(completedDuration: number) {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.state = 'finished';
    this.releaseWakeLock();
    audioEngine.stopAmbient();

    // 3 gentle resonant bells at end of session
    audioEngine.playBell(this.config.bellType);
    setTimeout(() => audioEngine.playBell(this.config.bellType), 3000);
    setTimeout(() => audioEngine.playBell(this.config.bellType), 6000);

    saveSession(completedDuration, this.config.bellType);

    this.config.onStateChange?.(this.state);
    this.config.onComplete?.(completedDuration);
  }
}

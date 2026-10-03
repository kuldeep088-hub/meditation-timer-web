// High-Fidelity Web Audio Synthesizer Engine
// Provides authentic harmonic bell overtones and organic ambient soundscapes
// with 0KB external download, instant playback, and zero offline failures.

export type BellType = 'bowl' | 'zen' | 'gong' | 'tingsha';
export type AmbientType = 'none' | 'rain' | 'stream' | 'ocean' | 'brown' | 'white';

class MeditationAudioEngine {
  private ctx: AudioContext | null = null;
  private ambientSource: AudioNode | null = null;
  private ambientGainNode: GainNode | null = null;
  private currentAmbientType: AmbientType = 'none';
  private masterBellVolume: number = 0.85;
  private masterAmbientVolume: number = 0.5;

  private initContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public setBellVolume(val: number) {
    this.masterBellVolume = Math.max(0, Math.min(1, val));
  }

  public setAmbientVolume(val: number) {
    this.masterAmbientVolume = Math.max(0, Math.min(1, val));
    if (this.ambientGainNode && this.ctx) {
      this.ambientGainNode.gain.setTargetAtTime(this.masterAmbientVolume * 0.35, this.ctx.currentTime, 0.1);
    }
  }

  /**
   * Synthesize resonant meditation bell
   */
  public playBell(type: BellType = 'bowl') {
    const ctx = this.initContext();
    const now = ctx.currentTime;
    const vol = this.masterBellVolume;

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(vol, now);
    masterGain.connect(ctx.destination);

    if (type === 'bowl') {
      // Tibetan Singing Bowl: 216Hz fundamental with rich singing overtones & gentle shimmer
      const harmonics = [
        { freq: 216, gain: 0.6, decay: 7.5 },
        { freq: 597, gain: 0.35, decay: 6.0 },
        { freq: 1194, gain: 0.15, decay: 4.5 },
        { freq: 1850, gain: 0.08, decay: 3.0 },
      ];

      harmonics.forEach(({ freq, gain, decay }) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        // Subtle slow beat frequency for the authentic "singing" pulsation
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(1.8, now);
        lfoGain.gain.setValueAtTime(0.06 * gain, now);
        lfo.connect(gainNode.gain);
        lfo.start(now);
        lfo.stop(now + decay);

        gainNode.gain.setValueAtTime(0.001, now);
        gainNode.gain.exponentialRampToValueAtTime(gain, now + 0.04);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decay);

        osc.connect(gainNode);
        gainNode.connect(masterGain);

        osc.start(now);
        osc.stop(now + decay);
      });
    } else if (type === 'zen') {
      // Kyoto Zen Temple Bell: Crisp bronze strike with long warm metallic tail
      const partials = [
        { freq: 432, gain: 0.55, decay: 5.5 },
        { freq: 864, gain: 0.3, decay: 4.0 },
        { freq: 1420, gain: 0.18, decay: 3.0 },
        { freq: 2340, gain: 0.08, decay: 1.8 },
      ];

      partials.forEach(({ freq, gain, decay }) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gainNode.gain.setValueAtTime(0.001, now);
        gainNode.gain.exponentialRampToValueAtTime(gain, now + 0.015);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decay);

        osc.connect(gainNode);
        gainNode.connect(masterGain);

        osc.start(now);
        osc.stop(now + decay);
      });
    } else if (type === 'gong') {
      // Deep Resonant Temple Gong: 108Hz with initial mallet punch and expanding low sustain
      const osc = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(112, now);
      osc.frequency.exponentialRampToValueAtTime(108, now + 2.0);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(224, now);

      gainNode.gain.setValueAtTime(0.001, now);
      gainNode.gain.exponentialRampToValueAtTime(0.7, now + 0.08);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 8.5);

      osc.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(masterGain);

      osc.start(now);
      osc2.start(now);
      osc.stop(now + 8.5);
      osc2.stop(now + 8.5);
    } else {
      // Ting-Sha Cymbal: Pure high chime, 2100Hz crystal clarity
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(2093, now); // High C

      gainNode.gain.setValueAtTime(0.001, now);
      gainNode.gain.exponentialRampToValueAtTime(0.45, now + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 4.8);

      osc.connect(gainNode);
      gainNode.connect(masterGain);

      osc.start(now);
      osc.stop(now + 4.8);
    }
  }

  /**
   * Start seamless generative ambient background loop
   */
  public startAmbient(type: AmbientType) {
    if (type === 'none') {
      this.stopAmbient();
      return;
    }

    if (this.ambientSource && this.currentAmbientType === type) {
      return; // Already playing this soundscape
    }

    this.stopAmbient();

    const ctx = this.initContext();
    this.currentAmbientType = type;

    // Buffer length for organic looping noise (5 seconds)
    const bufferSize = ctx.sampleRate * 5;
    const noiseBuffer = ctx.createBuffer(2, bufferSize, ctx.sampleRate);
    const leftChannel = noiseBuffer.getChannelData(0);
    const rightChannel = noiseBuffer.getChannelData(1);

    // Generate brown/pink/filtered noise profiles
    let lastOutL = 0.0;
    let lastOutR = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const whiteL = Math.random() * 2 - 1;
      const whiteR = Math.random() * 2 - 1;
      
      if (type === 'brown' || type === 'ocean') {
        // Brown noise integration
        lastOutL = (lastOutL + 0.02 * whiteL) / 1.02;
        lastOutR = (lastOutR + 0.02 * whiteR) / 1.02;
        leftChannel[i] = lastOutL * 3.5;
        rightChannel[i] = lastOutR * 3.5;
      } else {
        // Pink-ish soft noise
        lastOutL = (lastOutL * 0.95) + (whiteL * 0.05);
        lastOutR = (lastOutR * 0.95) + (whiteR * 0.05);
        leftChannel[i] = lastOutL * 1.8;
        rightChannel[i] = lastOutR * 1.8;
      }
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;

    // Filter node based on nature type
    const filter = ctx.createBiquadFilter();
    
    if (type === 'rain') {
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, ctx.currentTime);
      filter.Q.setValueAtTime(0.7, ctx.currentTime);
    } else if (type === 'stream') {
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(700, ctx.currentTime);
      
      // Bubbling modulation
      const bubbler = ctx.createOscillator();
      bubbler.type = 'sine';
      bubbler.frequency.setValueAtTime(0.8, ctx.currentTime);
      const bubblerGain = ctx.createGain();
      bubblerGain.gain.setValueAtTime(250, ctx.currentTime);
      bubbler.connect(filter.frequency);
      bubbler.start();
    } else if (type === 'ocean') {
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);
    } else if (type === 'brown') {
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);
    } else {
      // White noise / gentle breeze
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1800, ctx.currentTime);
    }

    const ambientGain = ctx.createGain();
    ambientGain.gain.setValueAtTime(0.001, ctx.currentTime);
    ambientGain.gain.setTargetAtTime(this.masterAmbientVolume * 0.35, ctx.currentTime, 1.2);

    if (type === 'ocean') {
      // Ocean wave swell LFO
      const waveLfo = ctx.createOscillator();
      const waveGain = ctx.createGain();
      waveLfo.frequency.setValueAtTime(0.09, ctx.currentTime); // ~11 sec wave cycle
      waveGain.gain.setValueAtTime(this.masterAmbientVolume * 0.22, ctx.currentTime);
      waveLfo.connect(ambientGain.gain);
      waveLfo.start();
    }

    noiseSource.connect(filter);
    filter.connect(ambientGain);
    ambientGain.connect(ctx.destination);

    noiseSource.start();

    this.ambientSource = noiseSource;
    this.ambientGainNode = ambientGain;
  }

  public stopAmbient() {
    if (this.ambientGainNode && this.ctx) {
      this.ambientGainNode.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.4);
      setTimeout(() => {
        try {
          (this.ambientSource as AudioBufferSourceNode)?.stop();
          this.ambientSource?.disconnect();
          this.ambientSource = null;
          this.ambientGainNode = null;
        } catch {
          // clean disconnect
        }
      }, 500);
    }
    this.currentAmbientType = 'none';
  }
}

export const audioEngine = new MeditationAudioEngine();

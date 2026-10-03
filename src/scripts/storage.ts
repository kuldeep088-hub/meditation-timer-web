// Local Storage Engine for 100% Private, Zero Sign-Up Mindfulness Tracking

export interface SessionRecord {
  id: string;
  timestamp: number;
  dateStr: string; // YYYY-MM-DD
  durationMinutes: number;
  bellType: string;
  mood?: string;
  note?: string;
}

export interface UserStats {
  currentStreak: number;
  longestStreak: number;
  totalSessions: number;
  totalMinutes: number;
  lastSessionDate: string; // YYYY-MM-DD
  history: SessionRecord[];
}

export interface UserSettings {
  durationSeconds: number;
  warmupSeconds: number;
  intervalMinutes: number;
  bellType: 'bowl' | 'zen' | 'gong' | 'tingsha';
  ambientType: 'none' | 'rain' | 'stream' | 'ocean' | 'brown' | 'white';
  bellVolume: number; // 0 to 1
  ambientVolume: number; // 0 to 1
  breathGuideEnabled: boolean;
  presenterMessage: string;
  darkMode: boolean;
}

const STATS_KEY = 'mto_stats_v1';
const SETTINGS_KEY = 'mto_settings_v1';

export const defaultSettings: UserSettings = {
  durationSeconds: 600, // 10 minutes
  warmupSeconds: 10,    // 10s warm-up
  intervalMinutes: 0,   // off
  bellType: 'bowl',
  ambientType: 'none',
  bellVolume: 0.85,
  ambientVolume: 0.5,
  breathGuideEnabled: true,
  presenterMessage: '',
  darkMode: false,
};

export function getTodayDateStr(): string {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getStats(): UserStats {
  if (typeof window === 'undefined') {
    return {
      currentStreak: 0,
      longestStreak: 0,
      totalSessions: 0,
      totalMinutes: 0,
      lastSessionDate: '',
      history: [],
    };
  }

  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) {
      return {
        currentStreak: 0,
        longestStreak: 0,
        totalSessions: 0,
        totalMinutes: 0,
        lastSessionDate: '',
        history: [],
      };
    }
    return JSON.parse(raw);
  } catch {
    return {
      currentStreak: 0,
      longestStreak: 0,
      totalSessions: 0,
      totalMinutes: 0,
      lastSessionDate: '',
      history: [],
    };
  }
}

export function saveSession(durationSeconds: number, bellType: string, mood?: string, note?: string): UserStats {
  const stats = getStats();
  const today = getTodayDateStr();
  const durationMinutes = Math.max(1, Math.round(durationSeconds / 60));

  const newRecord: SessionRecord = {
    id: 's_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    timestamp: Date.now(),
    dateStr: today,
    durationMinutes,
    bellType,
    mood,
    note,
  };

  stats.history.unshift(newRecord);
  // Keep last 100 sessions locally
  if (stats.history.length > 100) {
    stats.history = stats.history.slice(0, 100);
  }

  stats.totalSessions += 1;
  stats.totalMinutes += durationMinutes;

  if (stats.lastSessionDate === today) {
    // Already meditated today, streak remains the same
  } else {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

    if (stats.lastSessionDate === yesterdayStr) {
      stats.currentStreak += 1;
    } else {
      stats.currentStreak = 1;
    }
  }

  if (stats.currentStreak > stats.longestStreak) {
    stats.longestStreak = stats.currentStreak;
  }

  stats.lastSessionDate = today;

  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (err) {
    console.error('Failed to save meditation stats to localStorage', err);
  }

  return stats;
}

export function getSettings(): UserSettings {
  if (typeof window === 'undefined') {
    return { ...defaultSettings };
  }
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return { ...defaultSettings };
    return { ...defaultSettings, ...JSON.parse(raw) };
  } catch {
    return { ...defaultSettings };
  }
}

export function saveSettings(settings: Partial<UserSettings>) {
  if (typeof window === 'undefined') return;
  try {
    const current = getSettings();
    const updated = { ...current, ...settings };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save settings to localStorage', err);
  }
}

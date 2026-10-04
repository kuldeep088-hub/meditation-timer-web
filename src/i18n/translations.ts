// Multilingual translations for English, Español, 日本語, Français, Deutsch, Português, 한국어, Italiano

export type SupportedLocale = 'en' | 'es' | 'ja' | 'fr' | 'de' | 'pt' | 'ko' | 'it';

export const languages: Record<SupportedLocale, { name: string; nativeName: string; flag: string }> = {
  en: { name: 'English', nativeName: 'English', flag: 'EN' },
  es: { name: 'Spanish', nativeName: 'Español', flag: 'ES' },
  ja: { name: 'Japanese', nativeName: '日本語', flag: 'JA' },
  fr: { name: 'French', nativeName: 'Français', flag: 'FR' },
  de: { name: 'German', nativeName: 'Deutsch', flag: 'DE' },
  pt: { name: 'Portuguese', nativeName: 'Português', flag: 'PT' },
  ko: { name: 'Korean', nativeName: '한국어', flag: 'KO' },
  it: { name: 'Italian', nativeName: 'Italiano', flag: 'IT' },
};

export interface LocaleContent {
  metaTitle: string;
  metaDescription: string;
  brand: string;
  dayStreak: string;
  ready: string;
  warmup: string;
  meditating: string;
  paused: string;
  begin: string;
  pause: string;
  resume: string;
  reset: string;
  settlingPosture: string;
  minutesLabel: (m: number) => string;
  sessionDuration: string;
  warmupChip: (s: number) => string;
  noWarmup: string;
  preferences: string;
  preferencesSubtitle: string;
  bellSound: string;
  auditionSound: string;
  tibetanBowl: string;
  kyotoZen: string;
  deepGong: string;
  tingsha: string;
  bellVolume: string;
  ambientSoundscapes: string;
  freeBadge: string;
  silence: string;
  rain: string;
  stream: string;
  ocean: string;
  brownNoise: string;
  breeze: string;
  ambientVolume: string;
  warmupPrep: string;
  warmupPrepDesc: string;
  intervalBell: string;
  intervalBellDesc: string;
  intervalOff: string;
  intervalEvery: (m: number) => string;
  visualBreathPacer: string;
  visualBreathPacerDesc: string;
  intentionLabel: string;
  intentionPlaceholder: string;
  done: string;
  statsTitle: string;
  statsSubtitle: string;
  bestStreak: string;
  sessions: string;
  minutes: string;
  weeklyRhythm: string;
  last7Days: string;
  recentSessions: string;
  exportJSON: string;
  resetData: string;
  completeTitle: string;
  completeSubtitle: string;
  howDoYouFeel: string;
  calm: string;
  grounded: string;
  clear: string;
  relaxed: string;
  grateful: string;
  meditateAgain: string;
  viewConsistency: string;
  quickTimersTitle: string;
  quickTimersSubtitle: string;
  valueBadge: string;
  valueTitle: string;
  valueSubtitle: string;
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
  feature3Title: string;
  feature3Desc: string;
  faqBadge: string;
  faqTitle: string;
  faqSubtitle: string;
  countDownTab: string;
  durationTab: string;
  intervalTab: string;
  breatheIn: string;
  breatheOut: string;
  adjustMinutes: string;
  moveSliderToSet: string;
  intervalBellOff: string;
  endSession: string;
  backgroundModalTitle: string;
  customPhotoUpload: string;
  removePhoto: string;
  faqs: Array<{ question: string; answer: string }>;
}

export const translations: Record<SupportedLocale, LocaleContent> = {
  en: {
    metaTitle: "Meditation Timer Online | Free Minimalist Mindfulness Timer with Bells & Ambient Sounds",
    metaDescription: "A free, minimalist online meditation timer with authentic Tibetan singing bowls, customizable warm-up countdown, periodic interval chimes, and ambient nature sounds. No ads, no sign-up, screen wake lock included.",
    brand: "Meditation Timer Online",
    dayStreak: "day streak",
    ready: "Ready",
    warmup: "Warm-Up",
    meditating: "Meditating",
    paused: "Paused",
    begin: "Begin",
    pause: "Pause",
    resume: "Resume",
    reset: "Reset",
    settlingPosture: "Settling posture...",
    minutesLabel: (m: number) => m === 1 ? "1 Minute" : `${m} Minutes`,
    sessionDuration: "Session Duration",
    warmupChip: (s: number) => `Warm-up: ${s}s`,
    noWarmup: "No Warm-up",
    preferences: "Timer Preferences",
    preferencesSubtitle: "Customize bells, soundscapes, warm-up & intervals",
    bellSound: "Meditation Bell Sound",
    auditionSound: "Audition Sound",
    tibetanBowl: "Tibetan Bowl",
    kyotoZen: "Kyoto Zen Bell",
    deepGong: "Deep Gong",
    tingsha: "Ting-Sha Cymbal",
    bellVolume: "Bell Volume",
    ambientSoundscapes: "Ambient Nature & Soundscapes",
    freeBadge: "100% Free",
    silence: "Pure Silence",
    rain: "Gentle Rain",
    stream: "Forest Stream",
    ocean: "Ocean Tide",
    brownNoise: "Brown Noise",
    breeze: "Zen Breeze",
    ambientVolume: "Ambient Sound Volume",
    warmupPrep: "Warm-Up Preparation",
    warmupPrepDesc: "Allows you to settle your posture before time begins.",
    intervalBell: "Periodic Interval Bell",
    intervalBellDesc: "Rings gently to gently bring wandering awareness back.",
    intervalOff: "Off (Only start & end bell)",
    intervalEvery: (m: number) => `Every ${m} Minute${m > 1 ? 's' : ''}`,
    visualBreathPacer: "Visual Breathing Pacer",
    visualBreathPacerDesc: "Smooth expanding ring for 4-second rhythmic breathing",
    intentionLabel: "Intention / Presenter Quote",
    intentionPlaceholder: "e.g. Return to the breath • Peace in every step",
    done: "Done",
    statsTitle: "Mindfulness Stats",
    statsSubtitle: "100% private · Stored locally in your browser",
    bestStreak: "Best Streak",
    sessions: "Sessions",
    minutes: "Minutes",
    weeklyRhythm: "This Week's Mindful Rhythm",
    last7Days: "Last 7 Days",
    recentSessions: "Recent Meditation Sessions",
    exportJSON: "Export JSON",
    resetData: "Reset Data",
    completeTitle: "Meditation Complete",
    completeSubtitle: "Take a deep breath and gently return to your day.",
    howDoYouFeel: "How do you feel in this moment?",
    calm: "Calm",
    grounded: "Grounded",
    clear: "Clear",
    relaxed: "Relaxed",
    grateful: "Grateful",
    meditateAgain: "Meditate Again",
    viewConsistency: "View Weekly Consistency & Log",
    quickTimersTitle: "Quick Access Meditation Timers",
    quickTimersSubtitle: "Instant single-click setups for daily practice, micro-breaks, and extended sits.",
    valueBadge: "Pure Mindfulness · 0% Commercial Distractions",
    valueTitle: "Crafted for Deep Peace & Zero Interruption",
    valueSubtitle: "Unlike other web timers that lock ambient sounds behind paid plans or push mobile app popups, Meditation Timer Online is dedicated to providing an uncluttered, free experience.",
    feature1Title: "Authentic Bell Synthesizer",
    feature1Desc: "Physical modeling synthesizes natural Tibetan bowl overtones and Kyoto Zen bells with zero audio buffering, 100% offline.",
    feature2Title: "Free Nature Soundscapes",
    feature2Desc: "Relax with rain, flowing mountain stream, ocean tides, and calming brown noise with independent dual-channel volume mixing.",
    feature3Title: "100% Private Habit Tracking",
    feature3Desc: "Track streaks, consistency rhythms, and post-session reflection notes locally in your browser. No account or email required.",
    faqBadge: "Frequently Asked Questions",
    faqTitle: "Everything You Need to Know",
    faqSubtitle: "Learn how our minimalist meditation timer enhances your daily mindfulness practice.",
    countDownTab: "Count Down",
    durationTab: "Duration",
    intervalTab: "Interval",
    breatheIn: "Breathe in",
    breatheOut: "Breathe out",
    adjustMinutes: "Adjust minutes",
    moveSliderToSet: "Move the slider to set the duration",
    intervalBellOff: "Interval Bell Off",
    endSession: "End Session",
    backgroundModalTitle: "Atmosphere & Wallpaper",
    customPhotoUpload: "Upload Custom Photo",
    removePhoto: "Remove Custom Photo",
    faqs: [
      {
        question: "What is Meditation Timer Online?",
        answer: "Meditation Timer Online (freemeditationtimeronline.com) is a free, minimalist web application designed for mindfulness practitioners, meditators, and yoga teachers. It features studio-quality Tibetan singing bowls, periodic interval chimes, free ambient nature soundscapes, screen wake lock technology, and zero-registration daily streak tracking."
      },
      {
        question: "Is this meditation timer completely free to use?",
        answer: "Yes, 100% free. Unlike competitor apps that charge $4.99/month or lock ambient sounds, extended durations, and streak analytics behind paid subscriptions, Meditation Timer Online provides unlimited duration sits, full soundscape mixing, and habit tracking completely free with zero ads."
      },
      {
        question: "Does the timer keep my screen from dimming or falling asleep?",
        answer: "Yes. The timer integrates the modern Web Screen Wake Lock API. As long as your meditation session is running, your smartphone, tablet, or laptop screen will remain gently awake without going to sleep or dimming automatically."
      },
      {
        question: "What bell sounds and ambient soundscapes are included?",
        answer: "The audio engine includes four physical-modeling bell instruments: authentic Tibetan Singing Bowl, Kyoto Zen Temple Bell, Deep Resonant Temple Gong, and high-frequency Ting-Sha Cymbals. You can also mix in five free ambient nature soundscapes: Gentle Rain on Leaves, Forest Mountain Stream, Ocean Tide Swells, Deep Brown Noise, and Soft Zen Breeze."
      },
      {
        question: "How does the warm-up preparation countdown work?",
        answer: "The preparation countdown gives you a customizable buffer (5, 10, 15, 30, or 60 seconds) before your meditation starts. This allows you to close other tabs, adjust your seating posture, soften your gaze, and settle into your breath before the opening chime sounds."
      },
      {
        question: "Can I set periodic interval chimes during meditation?",
        answer: "Yes. You can configure periodic interval bells to ring at set times (every 1, 2, 5, 10, 15, 20, or 30 minutes). Interval bells are ideal for body scan meditations, partner dyad exchanges, or gentle reminders to bring wandering thoughts back to your breath."
      },
      {
        question: "How is my meditation streak tracked without an account?",
        answer: "All session history, current streaks, best streaks, and total mindful minutes are stored 100% privately in your web browser using HTML5 LocalStorage. No account creation, email sign-up, or tracking cookies are required, and you can export your data to JSON anytime."
      },
      {
        question: "Can I share a pre-configured timer with students or friends?",
        answer: "Yes. You can share custom meditation sessions directly via URL parameters. For instance, linking to ?d=900&prep=15&bell=gong automatically configures a 15-minute timer with a 15-second warm-up and deep gong bell for anyone who clicks the link."
      }
    ]
  },

  es: {
    metaTitle: "Temporizador de Meditación Online | Campana Tibetana y Sonidos Relajantes Gratis",
    metaDescription: "Temporizador de meditación online minimalista y gratis. Cuencos tibetanos, campana zen, cuenta regresiva de preparación, sonidos de lluvia y registro de hábitos sin registro.",
    brand: "Temporizador de Meditación",
    dayStreak: "días seguidos",
    ready: "Listo",
    warmup: "Preparación",
    meditating: "Meditando",
    paused: "En pausa",
    begin: "Comenzar",
    pause: "Pausar",
    resume: "Reanudar",
    reset: "Reiniciar",
    settlingPosture: "Ajustando postura...",
    minutesLabel: (m: number) => m === 1 ? "1 Minuto" : `${m} Minutos`,
    sessionDuration: "Duración de la Sesión",
    warmupChip: (s: number) => `Preparación: ${s}s`,
    noWarmup: "Sin preparación",
    preferences: "Ajustes del Temporizador",
    preferencesSubtitle: "Personaliza campanas, sonidos relajantes y tiempos",
    bellSound: "Sonido de Campana",
    auditionSound: "Escuchar Prueba",
    tibetanBowl: "Cuenco Tibetano",
    kyotoZen: "Campana Zen de Kioto",
    deepGong: "Gong Profundo",
    tingsha: "Crótalos Tingsha",
    bellVolume: "Volumen de la Campana",
    ambientSoundscapes: "Sonidos de la Naturaleza",
    freeBadge: "100% Gratis",
    silence: "Silencio Total",
    rain: "Lluvia Suave",
    stream: "Arroyo de Montaña",
    ocean: "Mareas del Océano",
    brownNoise: "Ruido Marrón",
    breeze: "Brisa Zen",
    ambientVolume: "Volumen Ambiental",
    warmupPrep: "Tiempo de Preparación",
    warmupPrepDesc: "Te permite acomodar la postura y calmar la respiración.",
    intervalBell: "Campana de Intervalo",
    intervalBellDesc: "Suena suavemente para recordar la presencia plena.",
    intervalOff: "Desactivada (Solo inicio y final)",
    intervalEvery: (m: number) => `Cada ${m} minuto${m > 1 ? 's' : ''}`,
    visualBreathPacer: "Guía Visual de Respiración",
    visualBreathPacerDesc: "Aura pulsante para respiración rítmica de 4 segundos",
    intentionLabel: "Intención o Frase Guía",
    intentionPlaceholder: "Ej: Vuelve a la respiración • Paz en cada instante",
    done: "Listo",
    statsTitle: "Estadísticas de Meditación",
    statsSubtitle: "100% privado · Guardado en tu navegador",
    bestStreak: "Mejor Racha",
    sessions: "Sesiones",
    minutes: "Minutos",
    weeklyRhythm: "Ritmo de Esta Semana",
    last7Days: "Últimos 7 Días",
    recentSessions: "Sesiones Recientes",
    exportJSON: "Exportar JSON",
    resetData: "Borrar Datos",
    completeTitle: "Meditación Completada",
    completeSubtitle: "Inhala profundo y regresa con calma a tu día.",
    howDoYouFeel: "¿Cómo te sientes en este momento?",
    calm: "En calma",
    grounded: "Centrado",
    clear: "Despejado",
    relaxed: "Relajado",
    grateful: "Agradecido",
    meditateAgain: "Meditar de Nuevo",
    viewConsistency: "Ver Registro Semanal",
    quickTimersTitle: "Temporizadores Rápidos",
    quickTimersSubtitle: "Configuraciones instantáneas de un solo clic para tu práctica diaria.",
    valueBadge: "Pura Atención Plena · Cero Distracciones",
    valueTitle: "Diseñado para Paz Profunda sin Interrupciones",
    valueSubtitle: "Sin muros de pago, sin suscripciones mensuales y sin publicidad que rompa tu calma mental.",
    feature1Title: "Campanas Físicas Sintetizadas",
    feature1Desc: "Auténticos armónicos de cuenco tibetano que funcionan sin conexión con cero descargas pesadas.",
    feature2Title: "Sonidos de Naturaleza Gratis",
    feature2Desc: "Lluvia, arroyo y ruido marrón con mezcla de volumen independiente.",
    feature3Title: "Rastreo de Hábitos 100% Privado",
    feature3Desc: "Tus rachas y reflexiones se quedan en tu dispositivo sin necesidad de crear cuenta.",
    faqBadge: "Preguntas Frecuentes",
    faqTitle: "Todo lo que necesitas saber",
    faqSubtitle: "Aprende cómo usar este temporizador gratuito para enriquecer tu bienestar.",
    countDownTab: "Cuenta atrás",
    durationTab: "Duración",
    intervalTab: "Intervalo",
    breatheIn: "Inhala",
    breatheOut: "Exhala",
    adjustMinutes: "Ajustar minutos",
    moveSliderToSet: "Desliza para ajustar la duración",
    intervalBellOff: "Campana de intervalo desactivada",
    endSession: "Terminar Sesión",
    backgroundModalTitle: "Atmósfera y Fondo",
    customPhotoUpload: "Subir Foto Propia",
    removePhoto: "Eliminar Foto",
    faqs: [
      {
        question: "¿Qué es este temporizador de meditación online?",
        answer: "Es una herramienta web gratuita diseñada para meditación, yoga y mindfulness con cuencos tibetanos reales, intervalos personalizables y sonidos de la naturaleza."
      },
      {
        question: "¿Es realmente gratis?",
        answer: "Sí, 100% gratis. Todas las campanas, sonidos ambientales y seguimiento de hábitos son libres sin planes premium."
      },
      {
        question: "¿Evita que mi teléfono o pantalla se apague?",
        answer: "Sí, cuenta con tecnología Screen Wake Lock que mantiene la pantalla encendida durante toda la sesión."
      },
      {
        question: "¿Cómo se guardan mis rachas sin registrarme?",
        answer: "Se almacenan de forma segura y privada en el almacenamiento local de tu navegador (LocalStorage)."
      }
    ]
  },

  ja: {
    metaTitle: "オンライン瞑想タイマー | チベットの鐘と自然音の無料タイマー",
    metaDescription: "無料のシンプルオンライン瞑想タイマー。本格的なチベットシンギングボウル、京都の鐘、準備カウントダウン、インターバルチャイム、雨や川の自然音を完備。登録不要・画面スリープ防止。",
    brand: "瞑想タイマー オンライン",
    dayStreak: "日連続",
    ready: "準備完了",
    warmup: "ウォームアップ",
    meditating: "瞑想中",
    paused: "一時停止中",
    begin: "開始する",
    pause: "一時停止",
    resume: "再開",
    reset: "リセット",
    settlingPosture: "姿勢を整えています...",
    minutesLabel: (m: number) => `${m}分`,
    sessionDuration: "瞑想時間",
    warmupChip: (s: number) => `準備時間: ${s}秒`,
    noWarmup: "準備なし",
    preferences: "タイマー設定",
    preferencesSubtitle: "鐘の音、環境音、準備時間とインターバルの設定",
    bellSound: "鐘の音色",
    auditionSound: "試聴する",
    tibetanBowl: "チベットボウル",
    kyotoZen: "京都の禅寺の鐘",
    deepGong: "銅鑼 (ゴング)",
    tingsha: "ティンシャの鈴",
    bellVolume: "鐘の音量",
    ambientSoundscapes: "環境音・自然音",
    freeBadge: "完全無料",
    silence: "静寂",
    rain: "優しい雨音",
    stream: "小川のせせらぎ",
    ocean: "波の満ち引き",
    brownNoise: "ブラウンノイズ",
    breeze: "穏やかな風",
    ambientVolume: "環境音の音量",
    warmupPrep: "姿勢を整える準備時間",
    warmupPrepDesc: "呼吸を落ち着かせるためのカウントダウンです。",
    intervalBell: "定期インターバル鐘",
    intervalBellDesc: "雑念を手放し、今ここへ意識を戻します。",
    intervalOff: "オフ (開始と終了のみ)",
    intervalEvery: (m: number) => `${m}分ごと`,
    visualBreathPacer: "呼吸ガイド（ビジュアル）",
    visualBreathPacerDesc: "4秒周期で滑らかに広がる呼吸サークル",
    intentionLabel: "アファメーション・意識する言葉",
    intentionPlaceholder: "例: 呼吸に集中する • 心穏やかに",
    done: "完了",
    statsTitle: "マインドフルネス記録",
    statsSubtitle: "完全プライベート · ブラウザ内にのみ保存",
    bestStreak: "最長記録",
    sessions: "瞑想回数",
    minutes: "合計時間(分)",
    weeklyRhythm: "今週のリズム",
    last7Days: "直近7日間",
    recentSessions: "最近の瞑想記録",
    exportJSON: "データを書き出し",
    resetData: "データをリセット",
    completeTitle: "瞑想が完了しました",
    completeSubtitle: "深く息を吸い、静かに日常へ戻りましょう。",
    howDoYouFeel: "今の心の状態はいかがですか？",
    calm: "穏やか",
    grounded: "地に足がついた",
    clear: "澄み渡った",
    relaxed: "リラックス",
    grateful: "感謝",
    meditateAgain: "もう一度瞑想する",
    viewConsistency: "週間記録を見る",
    quickTimersTitle: "クイックアクセス瞑想タイマー",
    quickTimersSubtitle: "ワンクリックですぐに始められる人気時間のタイマーです。",
    valueBadge: "純粋なマインドフルネス · 広告・課金なし",
    valueTitle: "深い静寂と毎日の習慣のために",
    valueSubtitle: "月額料金や邪魔なポップアップのない、ずっと無料で使える瞑想ツールです。",
    feature1Title: "本格的な鐘の音色",
    feature1Desc: "物理モデリング合成により、美しい余韻がオフラインでもクリアに響きます。",
    feature2Title: "心地よい無料環境音",
    feature2Desc: "雨やせせらぎ、ブラウンノイズを鐘の音と個別に音量調整できます。",
    feature3Title: "登録不要の習慣トラッカー",
    feature3Desc: "日々の継続日数や瞑想時間はブラウザ内に安全に保存されます。",
    faqBadge: "よくある質問 (FAQ)",
    faqTitle: "ご利用ガイド",
    faqSubtitle: "毎日の瞑想を豊かにする機能をご紹介します。",
    countDownTab: "カウントダウン",
    durationTab: "時間設定",
    intervalTab: "インターバル",
    breatheIn: "息を吸って",
    breatheOut: "息を吐いて",
    adjustMinutes: "分を調整",
    moveSliderToSet: "スライダーで時間を調整",
    intervalBellOff: "インターバル音オフ",
    endSession: "終了する",
    backgroundModalTitle: "背景と雰囲気",
    customPhotoUpload: "写真をアップロード",
    removePhoto: "写真を削除",
    faqs: [
      {
        question: "瞑想タイマーオンラインとは何ですか？",
        answer: "チベットのシンギングボウルや禅寺の鐘、環境音を備えた、完全無料のシンプルなオンライン瞑想タイマーです。"
      },
      {
        question: "本当に無料で使えますか？",
        answer: "はい、すべての音色、環境音、インターバル機能が完全無料でご利用いただけます。"
      },
      {
        question: "瞑想中に画面が自動で消灯しませんか？",
        answer: "Screen Wake Lock APIに対応しているため、瞑想中はスマートフォンやPCの画面が自動で暗くならず維持されます。"
      }
    ]
  },

  fr: {
    metaTitle: "Minuteur de Méditation en Ligne | Bol Tibétain & Sons Ambiants Gratuits",
    metaDescription: "Minuteur de méditation en ligne gratuit et minimaliste. Bol chantant tibétain, cloche zen, compte à rebours de préparation, sons de pluie et suivi de routine sans inscription.",
    brand: "Minuteur de Méditation",
    dayStreak: "jours consécutifs",
    ready: "Prêt",
    warmup: "Préparation",
    meditating: "En méditation",
    paused: "En pause",
    begin: "Commencer",
    pause: "Pause",
    resume: "Reprendre",
    reset: "Réinitialiser",
    settlingPosture: "Ajustement de la posture...",
    minutesLabel: (m: number) => m === 1 ? "1 Minute" : `${m} Minutes`,
    sessionDuration: "Durée de la Session",
    warmupChip: (s: number) => `Préparation: ${s}s`,
    noWarmup: "Sans préparation",
    preferences: "Préférences du Minuteur",
    preferencesSubtitle: "Personnalisez cloches, sons ambiants et intervalles",
    bellSound: "Son de la Cloche",
    auditionSound: "Écouter un extrait",
    tibetanBowl: "Bol Chantant Tibétain",
    kyotoZen: "Cloche Zen de Kyoto",
    deepGong: "Gong Profond",
    tingsha: "Cymbales Tingsha",
    bellVolume: "Volume de la Cloche",
    ambientSoundscapes: "Sons de la Nature",
    freeBadge: "100% Gratuit",
    silence: "Silence Complet",
    rain: "Pluie Apaisante",
    stream: "Ruisseau Forestier",
    ocean: "Marée Océanique",
    brownNoise: "Bruit Brun",
    breeze: "Brise Zen",
    ambientVolume: "Volume Ambiant",
    warmupPrep: "Temps de Préparation",
    warmupPrepDesc: "Permet d'ajuster sa posture et son souffle avant le gong.",
    intervalBell: "Cloche d'Intervalle",
    intervalBellDesc: "Sonne doucement pour ramener l'attention au moment présent.",
    intervalOff: "Désactivé (Début et fin uniquement)",
    intervalEvery: (m: number) => `Toutes les ${m} minute${m > 1 ? 's' : ''}`,
    visualBreathPacer: "Guide Visuel de Respiration",
    visualBreathPacerDesc: "Cercle rythmique de 4 secondes pour la respiration",
    intentionLabel: "Intention ou Pensée Inspirante",
    intentionPlaceholder: "Ex: Reviens au souffle • Paix et clarté",
    done: "Terminé",
    statsTitle: "Statistiques Personnelles",
    statsSubtitle: "100% privé · Enregistré dans votre navigateur",
    bestStreak: "Meilleure Série",
    sessions: "Sessions",
    minutes: "Minutes",
    weeklyRhythm: "Rythme de la Semaine",
    last7Days: "7 Derniers Jours",
    recentSessions: "Historique Récent",
    exportJSON: "Exporter JSON",
    resetData: "Réinitialiser",
    completeTitle: "Session Terminée",
    completeSubtitle: "Prenez une profonde inspiration et revenez en douceur.",
    howDoYouFeel: "Comment vous sentez-vous maintenant ?",
    calm: "Calme",
    grounded: "Ancré",
    clear: "Clair",
    relaxed: "Détendu",
    grateful: "Reconnaissant",
    meditateAgain: "Méditer à nouveau",
    viewConsistency: "Voir l'historique",
    quickTimersTitle: "Minuteurs Préréglés",
    quickTimersSubtitle: "Accédez en un clic à vos durées de méditation favorites.",
    valueBadge: "Pleine Conscience Pure · Sans Publicités",
    valueTitle: "Conçu pour la Sérénité et l'Introspection",
    valueSubtitle: "Sans abonnement payant ni interruptions intempestives.",
    feature1Title: "Synthèse Acoustique Réaliste",
    feature1Desc: "Des harmoniques de bols tibétains qui fonctionnent parfaitement hors ligne.",
    feature2Title: "Paysages Sonores Naturels",
    feature2Desc: "Pluie, ruisseau et bruit brun avec réglage de volume séparé.",
    feature3Title: "Suivi Privé sans Compte",
    feature3Desc: "Vos séries quotidiennes restent sur votre appareil sans inscription requise.",
    faqBadge: "Foire Aux Questions",
    faqTitle: "Questions Fréquentes",
    faqSubtitle: "Tout savoir sur l'utilisation du minuteur de méditation.",
    countDownTab: "Compte à rebours",
    durationTab: "Durée",
    intervalTab: "Intervalle",
    breatheIn: "Inspirez",
    breatheOut: "Expirez",
    adjustMinutes: "Ajuster les minutes",
    moveSliderToSet: "Déplacez le curseur pour régler la durée",
    intervalBellOff: "Cloche d'intervalle désactivée",
    endSession: "Terminer la séance",
    backgroundModalTitle: "Ambiance & Fond d'écran",
    customPhotoUpload: "Télécharger une photo",
    removePhoto: "Supprimer la photo",
    faqs: [
      {
        question: "Qu'est-ce que ce minuteur de méditation en ligne ?",
        answer: "C'est un outil gratuit et épuré pour accompagner vos séances de méditation avec des bols tibétains et des sons apaisants."
      },
      {
        question: "L'outil est-il entièrement gratuit ?",
        answer: "Oui, l'intégralité des cloches, sons d'ambiance et statistiques est accessible gratuitement sans abonnement."
      },
      {
        question: "L'écran reste-t-il allumé pendant la séance ?",
        answer: "Oui, la fonction Screen Wake Lock empêche votre écran de s'éteindre ou de se verrouiller."
      }
    ]
  },

  de: {
    metaTitle: "Meditationsuhr Online | Kostenloser Minimalistischer Meditations-Timer",
    metaDescription: "Kostenloser, minimalistischer Meditations-Timer mit echten tibetischen Klangschalen, Kyoto-Glocken, Vorbereitungs-Countdown, Regengeräuschen und Gewohnheits-Tracker ohne Anmeldung.",
    brand: "Meditationsuhr Online",
    dayStreak: "Tage in Folge",
    ready: "Bereit",
    warmup: "Vorbereitung",
    meditating: "In Meditation",
    paused: "Pausiert",
    begin: "Starten",
    pause: "Pause",
    resume: "Fortsetzen",
    reset: "Zurücksetzen",
    settlingPosture: "Haltung einnehmen...",
    minutesLabel: (m: number) => m === 1 ? "1 Minute" : `${m} Minuten`,
    sessionDuration: "Sitzungsdauer",
    warmupChip: (s: number) => `Vorbereitung: ${s}s`,
    noWarmup: "Ohne Vorbereitung",
    preferences: "Timer-Einstellungen",
    preferencesSubtitle: "Glocken, Naturklänge und Intervalle anpassen",
    bellSound: "Klangschale & Glocke",
    auditionSound: "Probe anhören",
    tibetanBowl: "Tibetische Klangschale",
    kyotoZen: "Kyoto Zen-Glocke",
    deepGong: "Tiefer Gong",
    tingsha: "Tingsha-Zimbel",
    bellVolume: "Glockenlautstärke",
    ambientSoundscapes: "Naturgeräusche & Klangwelten",
    freeBadge: "100% Kostenlos",
    silence: "Stille",
    rain: "Sanfter Regen",
    stream: "Gebirgsbach",
    ocean: "Meereswellen",
    brownNoise: "Braunes Rauschen",
    breeze: "Zen-Brise",
    ambientVolume: "Hintergrundlautstärke",
    warmupPrep: "Vorbereitungszeit",
    warmupPrepDesc: "Gibt dir Zeit, zur Ruhe zu kommen und die Haltung einzunehmen.",
    intervalBell: "Periodische Intervallglocke",
    intervalBellDesc: "Erinnert sanft daran, achtsam zum Atem zurückzukehren.",
    intervalOff: "Aus (Nur Anfang & Ende)",
    intervalEvery: (m: number) => `Alle ${m} Minute${m > 1 ? 'n' : ''}`,
    visualBreathPacer: "Visueller Atem-Guide",
    visualBreathPacerDesc: "Pulsierender Kreis für ruhiges 4-Sekunden-Atmen",
    intentionLabel: "Fokus / Zitat",
    intentionPlaceholder: "z.B. Zurück zum Atem • Ruhe in jedem Schritt",
    done: "Fertig",
    statsTitle: "Achtsamkeits-Statistiken",
    statsSubtitle: "100% privat · Direkt im Browser gespeichert",
    bestStreak: "Beste Serie",
    sessions: "Sitzungen",
    minutes: "Minuten",
    weeklyRhythm: "Wochenrhythmus",
    last7Days: "Letzte 7 Tage",
    recentSessions: "Vergangene Sitzungen",
    exportJSON: "JSON exportieren",
    resetData: "Daten löschen",
    completeTitle: "Meditation beendet",
    completeSubtitle: "Atme tief durch und kehre entspannt in deinen Tag zurück.",
    howDoYouFeel: "Wie fühlst du dich in diesem Moment?",
    calm: "Ruhig",
    grounded: "Geerdet",
    clear: "Klar",
    relaxed: "Entspannt",
    grateful: "Dankbar",
    meditateAgain: "Erneut meditieren",
    viewConsistency: "Wochenübersicht ansehen",
    quickTimersTitle: "Schnellzugriff Meditations-Timer",
    quickTimersSubtitle: "Beliebte Dauern mit nur einem Klick starten.",
    valueBadge: "Reine Achtsamkeit · Keine Werbeunterbrechung",
    valueTitle: "Geschaffen für tiefe Stille und Fokus",
    valueSubtitle: "Keine teuren Monatsabos, keine App-Downloads und keine störenden Benachrichtigungen.",
    feature1Title: "Klangschalen-Synthese",
    feature1Desc: "Echte Obertöne tibetischer Schalen – ladefrei und komplett offline verfügbar.",
    feature2Title: "Kostenlose Naturgeräusche",
    feature2Desc: "Regen, Bachläufe und beruhigendes braunes Rauschen separat abmischbar.",
    feature3Title: "100% privater Gewohnheits-Tracker",
    feature3Desc: "Streaks und Zeiten bleiben sicher auf deinem eigenen Gerät.",
    faqBadge: "Häufige Fragen",
    faqTitle: "Wissenswertes zum Timer",
    faqSubtitle: "So unterstützt dich der Online-Timer bei deiner täglichen Meditationspraxis.",
    countDownTab: "Countdown",
    durationTab: "Dauer",
    intervalTab: "Intervall",
    breatheIn: "Einatmen",
    breatheOut: "Ausatmen",
    adjustMinutes: "Minuten anpassen",
    moveSliderToSet: "Schieberegler bewegen, um Dauer einzustellen",
    intervalBellOff: "Intervallglocke aus",
    endSession: "Sitzung beenden",
    backgroundModalTitle: "Atmosphäre & Hintergrund",
    customPhotoUpload: "Eigenes Foto hochladen",
    removePhoto: "Foto entfernen",
    faqs: [
      {
        question: "Was ist die Meditationsuhr Online?",
        answer: "Ein kostenloser, webbasierter Meditations-Timer mit echten Klangschalen, Naturgeräuschen und Wachhaltefunktion für den Bildschirm."
      },
      {
        question: "Ist die Nutzung dauerhaft kostenlos?",
        answer: "Ja, alle Glockenklänge, Naturgeräusche und Statistiken sind ohne Kosten und ohne Benutzerkonto nutzbar."
      },
      {
        question: "Bleibt mein Bildschirm während der Meditation an?",
        answer: "Ja, über die Web Screen Wake Lock Funktion wird verhindert, dass dein Gerät während der Sitzung in den Ruhezustand wechselt."
      }
    ]
  },

  pt: {
    metaTitle: "Temporizador de Meditação Online | Tigela Tibetana e Sons Relaxantes",
    metaDescription: "Temporizador de meditação online gratuito e minimalista. Tigela tibetana, sino zen, contagem regressiva, sons de chuva e controle de hábitos sem cadastro.",
    brand: "Temporizador de Meditação",
    dayStreak: "dias seguidos",
    ready: "Pronto",
    warmup: "Preparação",
    meditating: "Meditando",
    paused: "Pausado",
    begin: "Começar",
    pause: "Pausar",
    resume: "Continuar",
    reset: "Reiniciar",
    settlingPosture: "Ajustando a postura...",
    minutesLabel: (m: number) => m === 1 ? "1 Minuto" : `${m} Minutos`,
    sessionDuration: "Duração da Sessão",
    warmupChip: (s: number) => `Preparação: ${s}s`,
    noWarmup: "Sem preparação",
    preferences: "Preferências do Temporizador",
    preferencesSubtitle: "Personalize sinos, sons ambientes e intervalos",
    bellSound: "Som do Sino",
    auditionSound: "Ouvir Prévia",
    tibetanBowl: "Tigela Tibetana",
    kyotoZen: "Sino Zen de Kyoto",
    deepGong: "Gongo Profundo",
    tingsha: "Címbalos Tingsha",
    bellVolume: "Volume do Sino",
    ambientSoundscapes: "Sons da Natureza",
    freeBadge: "100% Grátis",
    silence: "Silêncio Puro",
    rain: "Chuva Suave",
    stream: "Riacho da Floresta",
    ocean: "Ondas do Oceano",
    brownNoise: "Ruído Marrom",
    breeze: "Brisa Zen",
    ambientVolume: "Volume Ambiente",
    warmupPrep: "Tempo de Preparação",
    warmupPrepDesc: "Permite acomodar o corpo e acalmar a mente antes do início.",
    intervalBell: "Sino de Intervalo",
    intervalBellDesc: "Toca suavemente para trazer o foco de volta à respiração.",
    intervalOff: "Desativado (Apenas início e fim)",
    intervalEvery: (m: number) => `A cada ${m} minuto${m > 1 ? 's' : ''}`,
    visualBreathPacer: "Guia Visual de Respiração",
    visualBreathPacerDesc: "Círculo pulsante para respiração compassada de 4 segundos",
    intentionLabel: "Intenção ou Frase Inspiradora",
    intentionPlaceholder: "Ex: Retorne à respiração • Serenidade e presença",
    done: "Concluído",
    statsTitle: "Estatísticas de Mindfulness",
    statsSubtitle: "100% privado · Gravado no seu navegador",
    bestStreak: "Melhor Sequência",
    sessions: "Sessões",
    minutes: "Minutos",
    weeklyRhythm: "Ritmo Semanal",
    last7Days: "Últimos 7 Dias",
    recentSessions: "Sessões Recentes",
    exportJSON: "Exportar JSON",
    resetData: "Apagar Dados",
    completeTitle: "Meditação Concluída",
    completeSubtitle: "Respire fundo e retorne ao seu dia com tranquilidade.",
    howDoYouFeel: "Como você se sente neste momento?",
    calm: "Em calma",
    grounded: "Centrado",
    clear: "Claro",
    relaxed: "Relaxado",
    grateful: "Grato",
    meditateAgain: "Meditar Novamente",
    viewConsistency: "Ver Registro Semanal",
    quickTimersTitle: "Temporizadores Rápidos",
    quickTimersSubtitle: "Durações populares para iniciar sua prática com apenas um clique.",
    valueBadge: "Atenção Plena Pura · Sem Anúncios",
    valueTitle: "Criado para Silêncio Profundo e Presença",
    valueSubtitle: "Sem mensalidades caras, sem formulários de login e sem telas bloqueadas.",
    feature1Title: "Sinos Físicos Sintetizados",
    feature1Desc: "Harmônicos autênticos de tigelas cantantes que funcionam offline.",
    feature2Title: "Sons da Natureza Gratuitos",
    feature2Desc: "Chuva, riacho e ruído marrom com controle de volume independente.",
    feature3Title: "Registro 100% Privado",
    feature3Desc: "Seus dados de sequência e tempo ficam salvos apenas no seu próprio aparelho.",
    faqBadge: "Perguntas Frequentes",
    faqTitle: "Tudo o que você precisa saber",
    faqSubtitle: "Saiba como o temporizador gratuito apoia sua prática diária.",
    countDownTab: "Contagem regressiva",
    durationTab: "Duração",
    intervalTab: "Intervalo",
    breatheIn: "Inspire",
    breatheOut: "Expire",
    adjustMinutes: "Ajustar minutos",
    moveSliderToSet: "Mova o controle para definir a duração",
    intervalBellOff: "Sino de intervalo desativado",
    endSession: "Encerrar Sessão",
    backgroundModalTitle: "Atmosfera e Fundo",
    customPhotoUpload: "Enviar Foto Própria",
    removePhoto: "Remover Foto",
    faqs: [
      {
        question: "O que é o Temporizador de Meditação Online?",
        answer: "É uma ferramenta web minimalista com tigelas tibetanas autênticas, sons da natureza e registro de hábitos sem cadastro."
      },
      {
        question: "É totalmente gratuito?",
        answer: "Sim, todos os recursos, sons e temporizadores são livres para uso ilimitado."
      },
      {
        question: "A tela do celular desliga durante a meditação?",
        answer: "Não, o recurso Screen Wake Lock mantém sua tela ligada enquanto o cronômetro estiver rodando."
      }
    ]
  },

  ko: {
    metaTitle: "온라인 명상 타이머 | 싱잉볼 및 자연 소리 무료 타이머",
    metaDescription: "무료 미니멀 온라인 명상 타이머. 티베트 싱잉볼, 교토 명상 종, 준비 카운트다운, 인터벌 종소리, 빗소리, 가입 없는 스트릭 기록 및 화면 꺼짐 방지 지원.",
    brand: "명상 타이머 온라인",
    dayStreak: "일 연속",
    ready: "준비",
    warmup: "준비 중",
    meditating: "명상 중",
    paused: "일시 정지",
    begin: "시작",
    pause: "일시 정지",
    resume: "계속하기",
    reset: "초기화",
    settlingPosture: "자세를 가다듬는 중...",
    minutesLabel: (m: number) => `${m}분`,
    sessionDuration: "명상 시간",
    warmupChip: (s: number) => `준비 시간: ${s}초`,
    noWarmup: "준비 없음",
    preferences: "타이머 설정",
    preferencesSubtitle: "종소리, 자연 소리, 준비 시간 및 인터벌 설정",
    bellSound: "명상 종소리",
    auditionSound: "소리 미리듣기",
    tibetanBowl: "티베트 싱잉볼",
    kyotoZen: "교토 사찰 종소리",
    deepGong: "깊은 징 소리 (공)",
    tingsha: "팅샤 심벌즈",
    bellVolume: "종소리 볼륨",
    ambientSoundscapes: "자연 환경 소리",
    freeBadge: "100% 무료",
    silence: "고요한 침묵",
    rain: "부드러운 빗소리",
    stream: "숲속 개울물 소리",
    ocean: "파도 소리",
    brownNoise: "브라운 노이즈",
    breeze: "잔잔한 바람 소리",
    ambientVolume: "자연 소리 볼륨",
    warmupPrep: "자세 준비 시간",
    warmupPrepDesc: "시작 전 호흡을 고르고 자세를 편안히 정돈합니다.",
    intervalBell: "주기적 인터벌 종소리",
    intervalBellDesc: "잡념이 일어날 때 부드럽게 현재 호흡으로 돌아오도록 돕습니다.",
    intervalOff: "꺼짐 (시작과 종료 시에만 울림)",
    intervalEvery: (m: number) => `${m}분마다`,
    visualBreathPacer: "호흡 안내 비주얼",
    visualBreathPacerDesc: "4초 주기로 부드럽게 팽창하는 호흡 원형 가이드",
    intentionLabel: "오늘의 다짐 / 명상 문구",
    intentionPlaceholder: "예: 호흡에 머물기 • 모든 순간 평온하기",
    done: "완료",
    statsTitle: "마음챙김 통계",
    statsSubtitle: "100% 비공개 · 브라우저 로컬 저장",
    bestStreak: "최장 연속",
    sessions: "명상 횟수",
    minutes: "총 시간(분)",
    weeklyRhythm: "이번 주 명상 리듬",
    last7Days: "최근 7일",
    recentSessions: "최근 명상 기록",
    exportJSON: "JSON 내보내기",
    resetData: "데이터 초기화",
    completeTitle: "명상이 끝났습니다",
    completeSubtitle: "깊게 숨을 들이쉬고 평온한 마음으로 하루를 이어가세요.",
    howDoYouFeel: "지금 기분이 어떠신가요?",
    calm: "평온함",
    grounded: "안정됨",
    clear: "명료함",
    relaxed: "편안함",
    grateful: "감사함",
    meditateAgain: "다시 명상하기",
    viewConsistency: "주간 통계 보기",
    quickTimersTitle: "빠른 명상 타이머",
    quickTimersSubtitle: "한 번의 클릭으로 시작하는 추천 명상 시간.",
    valueBadge: "순수한 마음챙김 · 상업적 방해 제로",
    valueTitle: "깊은 평화와 방해 없는 명상을 위해",
    valueSubtitle: "유료 구독이나 불필요한 알림 없이 언제든 무료로 이용할 수 있습니다.",
    feature1Title: "실시간 사운드 합성",
    feature1Desc: "오프라인에서도 버퍼링 없이 즉시 울리는 티베트 싱잉볼 오버톤.",
    feature2Title: "무료 자연 소리 믹싱",
    feature2Desc: "빗소리와 파도 소리를 종소리와 별도로 자유롭게 조절하세요.",
    feature3Title: "개인정보 보호 습관 추적",
    feature3Desc: "회원가입 없이 브라우저 내부에서 안전하게 연속 일수가 기록됩니다.",
    faqBadge: "자주 묻는 질문 (FAQ)",
    faqTitle: "자주 묻는 질문",
    faqSubtitle: "명상 타이머의 모든 기능과 사용법을 안내해 드립니다.",
    countDownTab: "카운트다운",
    durationTab: "시간 설정",
    intervalTab: "인터벌",
    breatheIn: "숨을 들이쉬세요",
    breatheOut: "숨을 내쉬세요",
    adjustMinutes: "분 조절",
    moveSliderToSet: "슬라이더를 움직여 시간을 설정하세요",
    intervalBellOff: "인터벌 벨 꺼짐",
    endSession: "세션 종료",
    backgroundModalTitle: "분위기 및 배경화면",
    customPhotoUpload: "사진 업로드",
    removePhoto: "사진 삭제",
    faqs: [
      {
        question: "온라인 명상 타이머는 어떤 도구인가요?",
        answer: "티베트 싱잉볼과 자연의 소리를 갖추고, 방해 요소 없이 무료로 사용할 수 있는 웹 기반 명상 타이머입니다."
      },
      {
        question: "모든 기능을 무료로 쓸 수 있나요?",
        answer: "네, 유료 결제나 제한 없이 100% 무료로 모든 사운드와 타이머를 이용하실 수 있습니다."
      },
      {
        question: "명상 중에 화면이 꺼지지 않나요?",
        answer: "스크린 절전 방지(Screen Wake Lock) 기능이 작동하여 명상 중 화면이 꺼지지 않습니다."
      }
    ]
  },

  it: {
    metaTitle: "Timer Meditazione Online | Campana Tibetana e Suoni Rilassanti Gratis",
    metaDescription: "Timer meditazione online gratuito e minimalista. Campane tibetane, campana zen, conto alla rovescia, suoni della pioggia e tracciamento abitudini senza registrazione.",
    brand: "Timer Meditazione Online",
    dayStreak: "giorni di fila",
    ready: "Pronto",
    warmup: "Preparazione",
    meditating: "In meditazione",
    paused: "In pausa",
    begin: "Inizia",
    pause: "Pausa",
    resume: "Riprendi",
    reset: "Reimposta",
    settlingPosture: "Trova la postura...",
    minutesLabel: (m: number) => m === 1 ? "1 Minuto" : `${m} Minuti`,
    sessionDuration: "Durata della Sessione",
    warmupChip: (s: number) => `Preparazione: ${s}s`,
    noWarmup: "Senza preparazione",
    preferences: "Impostazioni Timer",
    preferencesSubtitle: "Personalizza campane, suoni rilassanti e intervalli",
    bellSound: "Suono della Campana",
    auditionSound: "Ascolta Prova",
    tibetanBowl: "Campana Tibetana",
    kyotoZen: "Campana Zen di Kyoto",
    deepGong: "Gong Profondo",
    tingsha: "Cimbali Tingsha",
    bellVolume: "Volume Campana",
    ambientSoundscapes: "Suoni della Natura",
    freeBadge: "100% Gratuito",
    silence: "Silenzio Puro",
    rain: "Pioggia Delicata",
    stream: "Ruscello di Montagna",
    ocean: "Onde del Mare",
    brownNoise: "Rumore Marrone",
    breeze: "Brezza Zen",
    ambientVolume: "Volume Ambiente",
    warmupPrep: "Tempo di Preparazione",
    warmupPrepDesc: "Ti permette di sistemare la postura prima dell'inizio.",
    intervalBell: "Campana a Intervalli",
    intervalBellDesc: "Suona dolcemente per riportare l'attenzione al respiro.",
    intervalOff: "Disattivata (Solo inizio e fine)",
    intervalEvery: (m: number) => `Ogni ${m} minut${m > 1 ? 'i' : 'o'}`,
    visualBreathPacer: "Guida Visiva del Respiro",
    visualBreathPacerDesc: "Cerchio pulsante per una respirazione ritmata di 4 secondi",
    intentionLabel: "Intenzione o Frase Ispiratrice",
    intentionPlaceholder: "Es: Torna al respiro • Calma interiore",
    done: "Fatto",
    statsTitle: "Statistiche di Mindfulness",
    statsSubtitle: "100% privato · Salvato sul tuo dispositivo",
    bestStreak: "Serie Migliore",
    sessions: "Sessioni",
    minutes: "Minuti",
    weeklyRhythm: "Ritmo di Questa Settimana",
    last7Days: "Ultimi 7 Giorni",
    recentSessions: "Sessioni Recenti",
    exportJSON: "Esporta JSON",
    resetData: "Azzera Dati",
    completeTitle: "Meditazione Completata",
    completeSubtitle: "Fai un respiro profondo e torna serenamente alla tua giornata.",
    howDoYouFeel: "Come ti senti in questo istante?",
    calm: "In pace",
    grounded: "Centrato",
    clear: "Lucido",
    relaxed: "Rilassato",
    grateful: "Grato",
    meditateAgain: "Medita di nuovo",
    viewConsistency: "Vedi Registro Settimanale",
    quickTimersTitle: "Timer Rapidi",
    quickTimersSubtitle: "Avvia le durate più popolari con un solo clic.",
    valueBadge: "Mindfulness Autentica · Zero Pubblicità",
    valueTitle: "Creato per la Pace Profonda Senza Interruzioni",
    valueSubtitle: "Nessun abbonamento costoso, nessuna registrazione e nessuna distrazione.",
    feature1Title: "Campane Fisiche Sintetizzate",
    feature1Desc: "Armonici autentici di campane tibetane che suonano istantaneamente anche offline.",
    feature2Title: "Suoni della Natura Gratuiti",
    feature2Desc: "Pioggia, ruscello e rumore marrone regolabili con volumi separati.",
    feature3Title: "Tracciamento 100% Riservato",
    feature3Desc: "Le tue serie e le tue riflessioni restano esclusivamente sul tuo browser.",
    faqBadge: "Domande Frequenti",
    faqTitle: "Tutto quello che c'è da sapere",
    faqSubtitle: "Scopri come usare il timer gratuito per la tua pratica quotidiana.",
    countDownTab: "Conto alla rovescia",
    durationTab: "Durata",
    intervalTab: "Intervallo",
    breatheIn: "Inspira",
    breatheOut: "Espira",
    adjustMinutes: "Regola i minuti",
    moveSliderToSet: "Muovi il cursore per impostare la durata",
    intervalBellOff: "Campana a intervalli disattivata",
    endSession: "Termina Sessione",
    backgroundModalTitle: "Atmosfera e Sfondo",
    customPhotoUpload: "Carica Foto",
    removePhoto: "Rimuovi Foto",
    faqs: [
      {
        question: "Cos'è il Timer Meditazione Online?",
        answer: "È uno strumento web gratuito progettato per mindfulness e yoga con autentiche campane tibetane e suoni della natura."
      },
      {
        question: "È completamente gratuito?",
        answer: "Sì, tutti i suoni, gli intervalli e le funzioni sono utilizzabili senza alcun costo."
      },
      {
        question: "Lo schermo si spegne durante la meditazione?",
        answer: "No, la tecnologia Screen Wake Lock impedisce al dispositivo di entrare in standby durante la sessione."
      }
    ]
  }
};

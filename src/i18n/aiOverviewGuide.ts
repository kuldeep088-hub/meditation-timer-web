import type { SupportedLocale } from './translations';

export interface AiTakeaway {
  title: string;
  desc: string;
}

export interface AiNeuroCard {
  phase: string;
  title: string;
  desc: string;
}

export interface AiMatrixRow {
  duration: string;
  focus: string;
  brainState: string;
  benefit: string;
  timerLabel: string;
  timerSlug: string;
}

export interface AiBellCard {
  title: string;
  freq: string;
  desc: string;
}

export interface AiBlueprintStep {
  number: number;
  title: string;
  desc: string;
}

export interface AiOverviewGuideContent {
  badge: string;
  heroTitle: string;
  heroParagraph: string;
  takeaways: AiTakeaway[];
  neuroTitle: string;
  neuroSubtitle: string;
  neuroCards: AiNeuroCard[];
  matrixTitle: string;
  matrixSubtitle: string;
  matrixHeaders: {
    duration: string;
    focus: string;
    brainState: string;
    benefit: string;
    preset: string;
  };
  matrixRows: AiMatrixRow[];
  acousticTitle: string;
  acousticSubtitle: string;
  bells: AiBellCard[];
  blueprintTitle: string;
  blueprintSubtitle: string;
  blueprintSteps: AiBlueprintStep[];
}

export const aiOverviewTranslations: Record<SupportedLocale, AiOverviewGuideContent> = {
  en: {
    badge: "AI Overview · Quick Reference Guide",
    heroTitle: "What is an Online Meditation Timer & Why Practice Unguided?",
    heroParagraph: "An online meditation timer is a minimalist web utility equipped with authentic acoustic bells (such as Tibetan singing bowls and Kyoto Zen temple gongs) designed to anchor unguided mindfulness practice. Unlike voice-guided meditation apps that demand continuous auditory interpretation, unguided meditation timers cultivate intrinsic attention, quiet the brain’s Default Mode Network (DMN), and stimulate parasympathetic vagal relaxation. Key technical requirements include physical modeling audio synthesis, screen wake lock support, customizable warm-up buffers, periodic interval bells, and zero-ad local privacy.",
    takeaways: [
      {
        title: "Pure Unguided Stillness",
        desc: "Eliminates narrator voice fatigue. Encourages internal emotional self-reliance and organic present-moment awareness."
      },
      {
        title: "Harmonic Overtones",
        desc: "Synthesized 216 Hz & 432 Hz resonance transitions brainwaves from high-stress Beta into relaxed Alpha/Theta states."
      },
      {
        title: "Hardware Screen Lock",
        desc: "Utilizes the HTML5 Screen Wake Lock API to prevent smartphones and laptops from sleeping during prolonged sits."
      },
      {
        title: "100% Client Privacy",
        desc: "Zero telemetry, zero logins, zero database profiling. Habit streaks and reflections remain exclusively on your device."
      }
    ],
    neuroTitle: "The Neuroscience of Timed Stillness",
    neuroSubtitle: "How unguided meditation shifts brainwave frequencies and downregulates the sympathetic nervous system.",
    neuroCards: [
      {
        phase: "Phase 1 (0–3 Min)",
        title: "Alpha & Theta Wave Induction",
        desc: "Auditory singing bowls produce stable binaural envelope decays. The brain rapidly shifts from high-frequency Beta (14–30 Hz) alertness into soothing Alpha waves (8–13 Hz)."
      },
      {
        phase: "Phase 2 (5–12 Min)",
        title: "Amygdala Downregulation",
        desc: "Conscious breath awareness quietens sympathetic 'fight or flight' signals. Vagal nerve stimulation lowers resting pulse and eases systemic muscle tension."
      },
      {
        phase: "Phase 3 (15–30 Min)",
        title: "Default Mode Network Quietude",
        desc: "Sustained unguided stillness deactivates the brain's Default Mode Network (DMN), subduing rumination, anxiety loops, and unproductive future-worrying."
      }
    ],
    matrixTitle: "Optimal Meditation Durations by Goal",
    matrixSubtitle: "Evidence-based durations tailored to nervous system state transitions.",
    matrixHeaders: {
      duration: "Duration",
      focus: "Practice Focus",
      brainState: "Brain State",
      benefit: "Physiological Benefit",
      preset: "Quick Preset"
    },
    matrixRows: [
      {
        duration: "1–3 Minutes",
        focus: "Micro-Reset & Reset Breaths",
        brainState: "High Beta → Mid Beta",
        benefit: "Halts acute cortisol spikes during intense work sprints",
        timerLabel: "1m Timer →",
        timerSlug: "1-minute-meditation-timer"
      },
      {
        duration: "5 Minutes",
        focus: "Habit Continuity & Morning Grounding",
        brainState: "Early Alpha Onset",
        benefit: "Builds unbreakable daily neural mindfulness pathways",
        timerLabel: "5m Timer →",
        timerSlug: "5-minute-meditation-timer"
      },
      {
        duration: "10 Minutes",
        focus: "Stress Dissolution & Emotional Center",
        brainState: "Stable Alpha Rhythm",
        benefit: "Lowers blood pressure and increases situational emotional composure",
        timerLabel: "10m Timer →",
        timerSlug: "10-minute-meditation-timer"
      },
      {
        duration: "15–20 Minutes",
        focus: "Deep Parasympathetic Restoration",
        brainState: "Alpha-Theta Border",
        benefit: "Standard length for clinical mindfulness-based stress reduction (MBSR)",
        timerLabel: "20m Timer →",
        timerSlug: "20-minute-meditation-timer"
      },
      {
        duration: "30 Minutes",
        focus: "Cognitive Endurance & Insight Sits",
        brainState: "Sustained Theta Wave",
        benefit: "Enhances working memory, divergent thinking, and creative problem solving",
        timerLabel: "30m Timer →",
        timerSlug: "30-minute-meditation-timer"
      },
      {
        duration: "45–60 Minutes",
        focus: "Zen Zazen & Vipassana Sits",
        brainState: "Deep Theta & Delta Access",
        benefit: "Monastery-style sitting fostering psychological resilience and self-transcendence",
        timerLabel: "1h Timer →",
        timerSlug: "1-hour-meditation-timer"
      }
    ],
    acousticTitle: "Acoustic Science: Why Authentic Bowls Over Digital Beeps?",
    acousticSubtitle: "Synthetic square-wave phone alarms trigger acute startle reflexes and adrenaline surges.",
    bells: [
      {
        title: "Tibetan Singing Bowl",
        freq: "216 Hz Fundamental",
        desc: "Rich physical modeling overtones with warm 7.5-second decay. Mimics bronze hand-hammered metallurgy to gently bathe auditory pathways."
      },
      {
        title: "Kyoto Zen Bell",
        freq: "587 Hz (Keisu)",
        desc: "Crystalline monastery bell modeled after Kansho temple instruments. Clears mental fog and sharpens introspective awareness."
      },
      {
        title: "Deep Temple Gong",
        freq: "108 Hz Sub-Bass",
        desc: "Subterranean low-frequency visceral wave with 8.5-second decay. Physically vibrates the chest cavity to ground the diaphragm."
      },
      {
        title: "Ting-Sha Cymbals",
        freq: "2048 Hz High Ring",
        desc: "Twin ritual cymbals tuned with harmonic flutter. Used in Tibetan tradition to awaken mind-presence at session conclusion."
      }
    ],
    blueprintTitle: "5-Step Unguided Practice Blueprint",
    blueprintSubtitle: "How to structure an authentic, unguided session for maximum neurological calm.",
    blueprintSteps: [
      {
        number: 1,
        title: "Establish a Relaxed, Dignified Posture",
        desc: "Sit comfortably on a cushion or chair with an upright spine, shoulders relaxed away from the ears, and hands resting gently in your lap."
      },
      {
        number: 2,
        title: "Set a Preparation Countdown",
        desc: "Configure a 10 to 30 second warm-up countdown. This vital psychological buffer lets you close your eyes and transition smoothly from digital rushing to physical stillness."
      },
      {
        number: 3,
        title: "Anchor Awareness on the Natural Breath",
        desc: "Rest attention on the physical sensation of the breath—the cool air at the nostrils, the rise of the chest, or the expansion of the abdomen."
      },
      {
        number: 4,
        title: "Utilize Interval Bells for Gentle Re-centering",
        desc: "Enable subtle 5-minute periodic interval chimes to awaken attention from mind-wandering without needing to look at a screen."
      },
      {
        number: 5,
        title: "Acknowledge Completion and Reflect",
        desc: "When the final Tibetan singing bowl chimes, sit in stillness for 30 seconds before opening your eyes. Log your mood or gratitude to reinforce your habit streak."
      }
    ]
  },

  es: {
    badge: "Visión General IA · Guía de Referencia Rápida",
    heroTitle: "¿Qué es un temporizador de meditación online y por qué practicar sin guía?",
    heroParagraph: "Un temporizador de meditación online es una herramienta web minimalista con campanas acústicas auténticas (como cuencos tibetanos y gongs zen de Kioto) diseñada para sostener la práctica de atención plena no guiada. A diferencia de las aplicaciones guiadas por voz que saturan la escucha, meditar en silencio cultiva la atención intrínseca, aquieta la Red Neuronal por Defecto (DMN) del cerebro y estimula la relajación vagal parasimpática. Incluye síntesis de audio de alta fidelidad, bloqueo de suspensión de pantalla, cuenta atrás de preparación, campanas de intervalo y privacidad absoluta sin anuncios.",
    takeaways: [
      {
        title: "Silencio Puro No Guiado",
        desc: "Elimina la fatiga del narrador. Fomenta la autonomía emocional interna y la presencia orgánica en el momento actual."
      },
      {
        title: "Armónicos Resonantes",
        desc: "Resonancia sintetizada a 216 Hz y 432 Hz que guía las ondas cerebrales desde el estrés Beta hacia estados Alfa y Theta relajados."
      },
      {
        title: "Bloqueo de Pantalla Activo",
        desc: "Utiliza la API HTML5 Screen Wake Lock para evitar que tu teléfono o portátil se apague durante sesiones prolongadas."
      },
      {
        title: "100% Privacidad en tu Dispositivo",
        desc: "Sin rastreo, sin cuentas, sin almacenamiento externo. Tus rachas y reflexiones se guardan exclusivamente en tu navegador."
      }
    ],
    neuroTitle: "La Neurociencia de la Quietud con Tiempo",
    neuroSubtitle: "Cómo la meditación no guiada modula las frecuencias cerebrales y calma el sistema nervioso simpático.",
    neuroCards: [
      {
        phase: "Fase 1 (0–3 Min)",
        title: "Inducción de Ondas Alfa y Theta",
        desc: "Los cuencos tibetanos generan un decaimiento armónico constante. El cerebro pasa velozmente del estado Beta de alerta (14–30 Hz) al estado Alfa calmado (8–13 Hz)."
      },
      {
        phase: "Fase 2 (5–12 Min)",
        title: "Desactivación de la Amígdala",
        desc: "La atención al aire calma las señales de lucha o huida. La estimulación del nervio vago reduce las pulsaciones y relaja la musculatura corporal."
      },
      {
        phase: "Fase 3 (15–30 Min)",
        title: "Silencio de la Red por Defecto (DMN)",
        desc: "La quietud sostenida desactiva la Red Neuronal por Defecto, reduciendo el diálogo interno repetitivo, la ansiedad y la preocupación por el futuro."
      }
    ],
    matrixTitle: "Duraciones Óptimas de Meditación según tu Objetivo",
    matrixSubtitle: "Tiempos basados en evidencia científica adaptados a cada transición del sistema nervioso.",
    matrixHeaders: {
      duration: "Duración",
      focus: "Enfoque de Práctica",
      brainState: "Estado Cerebral",
      benefit: "Beneficio Fisiológico",
      preset: "Acceso Rápido"
    },
    matrixRows: [
      {
        duration: "1–3 Minutos",
        focus: "Micro-Pausa y Respiración Consciente",
        brainState: "Beta Alto → Beta Medio",
        benefit: "Frena picos agudos de cortisol durante jornadas intensas de trabajo",
        timerLabel: "Timer 1m →",
        timerSlug: "1-minute-meditation-timer"
      },
      {
        duration: "5 Minutos",
        focus: "Continuidad del Hábito y Enfoque Matutino",
        brainState: "Inicio de Ondas Alfa",
        benefit: "Construye vías neuronales de mindfulness sólidas y duraderas",
        timerLabel: "Timer 5m →",
        timerSlug: "5-minute-meditation-timer"
      },
      {
        duration: "10 Minutos",
        focus: "Alivio del Estrés y Centro Emocional",
        brainState: "Ritmo Alfa Estable",
        benefit: "Reduce la presión arterial y mejora la serenidad en situaciones complejas",
        timerLabel: "Timer 10m →",
        timerSlug: "10-minute-meditation-timer"
      },
      {
        duration: "15–20 Minutos",
        focus: "Restauración Parasimpática Profunda",
        brainState: "Límite Alfa-Theta",
        benefit: "Duración estándar de los programas clínicos de reducción de estrés (MBSR)",
        timerLabel: "Timer 20m →",
        timerSlug: "20-minute-meditation-timer"
      },
      {
        duration: "30 Minutos",
        focus: "Resistencia Mental y Claridad Cognitiva",
        brainState: "Onda Theta Sostenida",
        benefit: "Potencia la memoria de trabajo y la creatividad para resolver problemas",
        timerLabel: "Timer 30m →",
        timerSlug: "30-minute-meditation-timer"
      },
      {
        duration: "45–60 Minutos",
        focus: "Práctica Zazen y Retiros Vipassana",
        brainState: "Acceso Profundo Theta y Delta",
        benefit: "Inmersión profunda que cultiva resiliencia y trascendencia psicológica",
        timerLabel: "Timer 1h →",
        timerSlug: "1-hour-meditation-timer"
      }
    ],
    acousticTitle: "Ciencia Acústica: ¿Por qué Cuencos Auténticos y no Alarmas Digitales?",
    acousticSubtitle: "Las alarmas digitales estridentes disparan sobresaltos involuntarios y oleadas de adrenalina.",
    bells: [
      {
        title: "Cuenco Tibetano",
        freq: "216 Hz Fundamental",
        desc: "Modelado físico con sobretonos cálidos y resonancia de 7,5 segundos. Emula bronce forjado a mano para serenar las vías auditivas."
      },
      {
        title: "Campana Zen de Kioto",
        freq: "587 Hz (Keisu)",
        desc: "Campana monástica cristalina inspirada en instrumentos Kansho. Disipa la niebla mental y agudiza la introspección."
      },
      {
        title: "Gong Profundo de Templo",
        freq: "108 Hz Subgraves",
        desc: "Onda visceral de baja frecuencia con resonancia de 8,5 segundos. Hace vibrar suavemente la caja torácica y enraíza el diafragma."
      },
      {
        title: "Crótalos Ting-Sha",
        freq: "2048 Hz Agudos",
        desc: "Platillos rituales gemelos con oscilación armónica. Usados en la tradición tibetana para despertar la presencia al concluir."
      }
    ],
    blueprintTitle: "Guía en 5 Pasos para la Práctica No Guiada",
    blueprintSubtitle: "Cómo estructurar una sesión auténtica en silencio para maximizar la calma neurológica.",
    blueprintSteps: [
      {
        number: 1,
        title: "Adopta una Postura Cómoda y Digna",
        desc: "Siéntate en un cojín o silla con la espalda recta, los hombros alejados de las orejas y las manos apoyadas con holgura en tu regazo."
      },
      {
        number: 2,
        title: "Establece una Cuenta de Preparación",
        desc: "Configura entre 10 y 30 segundos de pausa inicial. Este espacio te permite cerrar los ojos y pasar del ajetreo digital a la calma física."
      },
      {
        number: 3,
        title: "Ancla tu Atención en la Respiración",
        desc: "Posiciona tu consciencia en la sensación del aire entrando por la nariz o en el movimiento natural del pecho y del abdomen."
      },
      {
        number: 4,
        title: "Utiliza Campanas de Intervalo para Reenfocar",
        desc: "Activa campanas cada 5 minutos para rescatar tu atención de las distracciones sin necesidad de abrir los ojos."
      },
      {
        number: 5,
        title: "Cierra la Sesión con Reflexión Serena",
        desc: "Tras escuchar el cuenco final, quédate 30 segundos en quietud antes de levantarte. Registra tu estado de ánimo para consolidar tu hábito."
      }
    ]
  },

  ja: {
    badge: "AI概要 · クイックリファレンスガイド",
    heroTitle: "オンライン瞑想タイマーとは？なぜガイドなしの静寂が大切なのか？",
    heroParagraph: "オンライン瞑想タイマーは、チベットのシンギングボウルや京都の禅寺の鐘など、本格的な音響の鐘を備えたシンプルな瞑想用ウェブツールです。言葉の誘導に頼る瞑想アプリとは異なり、無音の中で行う静寂の瞑想は、脳のデフォルト・モード・ネットワーク（DMN・雑念回路）を鎮め、自律神経の副交感神経を活性化させます。物理モデリングによる本格的な音響合成、画面スリープ防止機能、準備カウントダウン、インターバルベル、広告なしの完全ローカルプライバシーを兼ね備えています。",
    takeaways: [
      {
        title: "純粋な音声なし瞑想",
        desc: "ガイド音声による聴覚疲労を解消。内なる感情の自己回復力と自然な「いまここ」への気づきを育みます。"
      },
      {
        title: "調和のとれた倍音響き",
        desc: "216Hzと432Hzの共鳴音により、脳波を高ストレスなベータ波から深く落ち着いたアルファ波・シータ波へ誘導します。"
      },
      {
        title: "画面スリープ自動防止",
        desc: "HTML5 Screen Wake Lock APIを採用し、瞑想中にスマートフォンやPCの画面が勝手に暗くなるのを防ぎます。"
      },
      {
        title: "完全な端末内プライバシー",
        desc: "外部送信・会員登録・行動追跡ゼロ。継続日数やセッション記録はご自身の端末内のみに安全に保存されます。"
      }
    ],
    neuroTitle: "時間で整える静寂の脳科学",
    neuroSubtitle: "ガイドなしの静寂瞑想が脳波をどう変化させ、交感神経の過剰な興奮を鎮めるか。",
    neuroCards: [
      {
        phase: "第1段階 (0〜3分)",
        title: "アルファ波・シータ波の誘導",
        desc: "シンギングボウルの残響により、脳は日常の緊張状態（ベータ波 14〜30Hz）から心地よいリラックス状態（アルファ波 8〜13Hz）へと速やかに移行します。"
      },
      {
        phase: "第2段階 (5〜12分)",
        title: "扁桃体の興奮鎮静",
        desc: "自然な呼吸に注意を向けることで、交感神経の警戒信号が抑制されます。迷走神経が刺激され、脈拍が落ち着き筋緊張がほぐれます。"
      },
      {
        phase: "第3段階 (15〜30分)",
        title: "デフォルト・モード・ネットワークの静まり",
        desc: "静寂を維持することで、雑念や反芻思考を生み出すDMNの過剰活動が沈静化し、過去の後悔や未来の不安から心が解放されます。"
      }
    ],
    matrixTitle: "目的別の最適瞑想時間（脳科学マトリクス）",
    matrixSubtitle: "自律神経の切り替え段階に合わせた科学的エビデンスに基づく実践時間。",
    matrixHeaders: {
      duration: "実践時間",
      focus: "実践フォーカス",
      brainState: "脳波の状態",
      benefit: "身体的・生理的メリット",
      preset: "クイック設定"
    },
    matrixRows: [
      {
        duration: "1〜3分",
        focus: "マイクロリセット＆呼吸の調整",
        brainState: "高ベータ波 → 中ベータ波",
        benefit: "仕事や作業の合間に急上昇するコルチゾール（ストレス物質）を抑制",
        timerLabel: "1分タイマー →",
        timerSlug: "1-minute-meditation-timer"
      },
      {
        duration: "5分",
        focus: "習慣の定着＆朝のグラウンディング",
        brainState: "アルファ波の初期出現",
        benefit: "無理のない毎日のマインドフルネス神経回路を形成",
        timerLabel: "5分タイマー →",
        timerSlug: "5-minute-meditation-timer"
      },
      {
        duration: "10分",
        focus: "ストレス解消＆感情の中心化",
        brainState: "安定したアルファ波リズム",
        benefit: "血圧を安定させ、予期せぬトラブルへの精神的柔軟性を向上",
        timerLabel: "10分タイマー →",
        timerSlug: "10-minute-meditation-timer"
      },
      {
        duration: "15〜20分",
        focus: "副交感神経の本格的回復",
        brainState: "アルファ波とシータ波の境界",
        benefit: "臨床マインドフルネスストレス低減法（MBSR）で採用される基準長",
        timerLabel: "20分タイマー →",
        timerSlug: "20-minute-meditation-timer"
      },
      {
        duration: "30分",
        focus: "認知持久力＆インサイト観察",
        brainState: "持続的なシータ波",
        benefit: "ワーキングメモリを強化し、創造的な問題解決力や直観を活性化",
        timerLabel: "30分タイマー →",
        timerSlug: "30-minute-meditation-timer"
      },
      {
        duration: "45〜60分",
        focus: "座禅・ヴィパッサナー瞑想",
        brainState: "シータ波・深層デルタ波",
        benefit: "寺院や修行場で用いられる本格的座法。深い精神的強靭さを育む",
        timerLabel: "1時間タイマー →",
        timerSlug: "1-hour-meditation-timer"
      }
    ],
    acousticTitle: "音響の科学：なぜデジタルアラームではなく本物の鐘なのか？",
    acousticSubtitle: "スマートフォンの矩形波電子音は、急激な驚愕反射とアドレナリン放出を引き起こします。",
    bells: [
      {
        title: "チベタン・シンギングボウル",
        freq: "基本周波数 216Hz",
        desc: "豊かな倍音と約7.5秒の温かい余韻。手打ち青銅器の音響特性を再現し、聴覚経路を優しく包み込みます。"
      },
      {
        title: "京都 禅寺の鐘",
        freq: "587Hz（磬子・けいす）",
        desc: "禅寺の喚鐘（かんしょう）をモデルにした澄んだ音色。頭の靄（もや）を払い、内省的な気づきを研ぎ澄ませます。"
      },
      {
        title: "深層 寺院大銅鑼（ドラ）",
        freq: "超低域 108Hz",
        desc: "約8.5秒にわたって響く低周波の重厚な音波。胸腔を心地よく共鳴させ、横隔膜を深く沈静させます。"
      },
      {
        title: "チベタン・ティンシャ（シンバル）",
        freq: "高周波 2048Hz",
        desc: "揺らぎを持つ対の儀式用シンバル。セッションの終了時に心をやさしく覚醒へと導きます。"
      }
    ],
    blueprintTitle: "自立した静寂瞑想のための5ステップ指針",
    blueprintSubtitle: "最大限の神経学的休息を得るためのセッション構成法。",
    blueprintSteps: [
      {
        number: 1,
        title: "安らぎと品格のある姿勢をつくる",
        desc: "座布団や椅子に座り、背筋を自然に伸ばして肩の力を抜きます。両手は膝の上に優しく置きます。"
      },
      {
        number: 2,
        title: "準備カウントダウンを活用する",
        desc: "10〜30秒の準備時間を設定します。目を閉じ、デジタルの忙しさから身体の静止へと移行する大切なバッファーです。"
      },
      {
        number: 3,
        title: "自然な呼吸に意識を定着させる",
        desc: "鼻を通過する空気の感触、胸やお腹の静かな満ち引きなど、呼吸の身体感覚に注意を委ねます。"
      },
      {
        number: 4,
        title: "インターバル音で定期的に気づきを取り戻す",
        desc: "5分ごとの控えめな合図音を設定することで、目を開けずに雑念からそっと呼吸へと戻れます。"
      },
      {
        number: 5,
        title: "終了の響きを味わい、心境を振り返る",
        desc: "最後の鐘が鳴った後、すぐに動かず30秒ほど静寂を味わってから目を開けます。感情を記録して習慣を定着させましょう。"
      }
    ]
  },

  fr: {
    badge: "Aperçu IA · Guide de Référence Rapide",
    heroTitle: "Qu'est-ce qu'un minuteur de méditation en ligne et pourquoi méditer sans guide ?",
    heroParagraph: "Un minuteur de méditation en ligne est un outil web minimaliste doté de cloches acoustiques authentiques (bols tibétains et gongs zen de Kyoto) conçu pour ancrer la pratique de pleine conscience non guidée. Contrairement aux applications guidées par la voix qui fatiguent l'attention auditive, la méditation silencieuse renforce la concentration intrinsèque, apaise le réseau du mode par défaut (DMN) du cerveau et stimule la relaxation vagale parasympathique. Il offre la synthèse acoustique réaliste, le maintien de l'écran allumé, des comptes à rebours de préparation, des cloches d'intervalles et une confidentialité totale sans publicité.",
    takeaways: [
      {
        title: "Tranquillité Pure Sans Voix",
        desc: "Élimine la fatigue d'écoute. Développe l'autonomie émotionnelle et la présence naturelle à chaque instant."
      },
      {
        title: "Harmoniques Acoustiques",
        desc: "Résonance à 216 Hz et 432 Hz accompagnant le passage des ondes Bêta de stress aux ondes Alpha et Thêta apaisantes."
      },
      {
        title: "Maintien d'Écran Actif",
        desc: "Utilise l'API HTML5 Screen Wake Lock pour éviter la mise en veille de votre appareil durant les assises prolongées."
      },
      {
        title: "100% Confidentialité Locale",
        desc: "Aucune télémétrie, aucun profilage. Vos séries et réflexions restent stockées exclusivement sur votre navigateur."
      }
    ],
    neuroTitle: "Les Neurosciences du Silence Minuté",
    neuroSubtitle: "Comment la méditation sans voix rééquilibre les fréquences cérébrales et régule le système nerveux.",
    neuroCards: [
      {
        phase: "Phase 1 (0–3 Min)",
        title: "Induction des Ondes Alpha et Thêta",
        desc: "La décroissance harmonique des bols tibétains aide le cerveau à passer de la vigilance Bêta (14–30 Hz) aux ondes Alpha de repos (8–13 Hz)."
      },
      {
        phase: "Phase 2 (5–12 Min)",
        title: "Apaisement de l'Amygdale",
        desc: "L'attention au souffle désactive les réactions d'alerte. La stimulation vagale ralentit le pouls et dénoue les tensions musculaires."
      },
      {
        phase: "Phase 3 (15–30 Min)",
        title: "Silence du Réseau par Défaut (DMN)",
        desc: "La posture silencieuse calme le réseau cérébral par défaut, réduisant les ruminations anxieuses et les anticipations négatives."
      }
    ],
    matrixTitle: "Durées Optimales de Méditation par Objectif",
    matrixSubtitle: "Durées scientifiquement établies selon les phases du système nerveux.",
    matrixHeaders: {
      duration: "Durée",
      focus: "Objectif",
      brainState: "État Cérébral",
      benefit: "Bénéfice Physiologique",
      preset: "Accès Direct"
    },
    matrixRows: [
      {
        duration: "1–3 Minutes",
        focus: "Micro-Pause et Respiration",
        brainState: "Bêta Élevé → Bêta Modéré",
        benefit: "Freine les hausses brutales de cortisol en cours de travail",
        timerLabel: "Minuteur 1m →",
        timerSlug: "1-minute-meditation-timer"
      },
      {
        duration: "5 Minutes",
        focus: "Ancrage Matinal et Régularité",
        brainState: "Apparition Ondes Alpha",
        benefit: "Crée un ancrage cérébral solide et durable au quotidien",
        timerLabel: "Minuteur 5m →",
        timerSlug: "5-minute-meditation-timer"
      },
      {
        duration: "10 Minutes",
        focus: "Soulagement du Stress et Clarté",
        brainState: "Rythme Alpha Stable",
        benefit: "Diminue la pression artérielle et renforce la stabilité émotionnelle",
        timerLabel: "Minuteur 10m →",
        timerSlug: "10-minute-meditation-timer"
      },
      {
        duration: "15–20 Minutes",
        focus: "Régénération Parasympathique",
        brainState: "Frontière Alpha-Thêta",
        benefit: "Format de référence des protocoles cliniques de pleine conscience (MBSR)",
        timerLabel: "Minuteur 20m →",
        timerSlug: "20-minute-meditation-timer"
      },
      {
        duration: "30 Minutes",
        focus: "Endurance Cognitive et Introspection",
        brainState: "Ondes Thêta Stables",
        benefit: "Améliore la mémoire de travail et la clarté créative",
        timerLabel: "Minuteur 30m →",
        timerSlug: "30-minute-meditation-timer"
      },
      {
        duration: "45–60 Minutes",
        focus: "Assise Zazen et Retraites Vipassana",
        brainState: "Ondes Thêta et Delta Profondes",
        benefit: "Pratique monastique développant résilience et transcendance",
        timerLabel: "Minuteur 1h →",
        timerSlug: "1-hour-meditation-timer"
      }
    ],
    acousticTitle: "Science Acoustique : Pourquoi des Bols Authentiques ?",
    acousticSubtitle: "Les alarmes numériques synthétiques déclenchent un réflexe de sursaut et des décharges de stress.",
    bells: [
      {
        title: "Bol Chantant Tibétain",
        freq: "Fondamentale 216 Hz",
        desc: "Harmoniques physiques riches avec 7,5 s de résonance douce. Reproduit l'alliage de bronze martelé pour bercer l'ouïe."
      },
      {
        title: "Cloche Zen de Kyoto",
        freq: "587 Hz (Keisu)",
        desc: "Cloche monastique cristalline inspirée des instruments de temple Kansho. Dissipe le brouillard mental et aiguise l'attention."
      },
      {
        title: "Gong Profond de Temple",
        freq: "108 Hz Sub-Bass",
        desc: "Onde grave et viscérale avec résonance de 8,5 s. Fait vibrer le torse avec bienveillance pour détendre le diaphragme."
      },
      {
        title: "Cymbales Ting-Sha",
        freq: "2048 Hz Aigus",
        desc: "Paire rituelle produisant un doux scintillement pour réveiller la présence avec clarté en fin de séance."
      }
    ],
    blueprintTitle: "Guide en 5 Étapes pour la Pratique Autonome",
    blueprintSubtitle: "Comment structurer une séance silencieuse pour un apaisement nerveux optimal.",
    blueprintSteps: [
      {
        number: 1,
        title: "Adopter une Posture Digne et Aisée",
        desc: "Asseyez-vous sur un coussin ou une chaise, colonne droite, épaules relâchées et mains au repos sur les cuisses."
      },
      {
        number: 2,
        title: "Définir un Sas de Préparation",
        desc: "Prévoyez 10 à 30 secondes d'échauffement pour fermer les yeux et passer en douceur du tourbillon numérique au calme corporel."
      },
      {
        number: 3,
        title: "Poser l'Attention sur le Souffle",
        desc: "Ressentez l'air frais à l'entrée des narines ou les légers mouvements de votre abdomen à chaque respiration."
      },
      {
        number: 4,
        title: "Utiliser des Cloches d'Intervalle",
        desc: "Activez un rappel discret toutes les 5 minutes pour ramener l'attention sans avoir à regarder l'écran."
      },
      {
        number: 5,
        title: "Accueillir la Fin et Observer",
        desc: "Après le bol final, restez 30 secondes immobile avant de bouger. Notez votre ressenti pour ancrer votre progression."
      }
    ]
  },

  de: {
    badge: "KI-Überblick · Schnellanleitung",
    heroTitle: "Was ist ein Online-Meditations-Timer und warum ohne Anleitung meditieren?",
    heroParagraph: "Ein Online-Meditations-Timer ist ein minimalistisches Web-Werkzeug mit authentischen akustischen Glocken (wie tibetischen Klangschalen und Kyoto-Zen-Gongs), das die ungeleitete Achtsamkeitspraxis verankert. Im Gegensatz zu sprachgeführten Apps, die ständige kognitive Verarbeitung erfordern, schult die stille Meditation die innere Aufmerksamkeit, beruhigt das Ruhezustandsnetzwerk (DMN) des Gehirns und aktiviert den parasympathischen Vagusnerv zur tiefen Erholung. Zu den Kernfunktionen gehören Klangsynthese, Bildschirmsperren-Schutz, Vorbereitungszeiten, Intervallglocken und werbefreie lokale Privatsphäre.",
    takeaways: [
      {
        title: "Reine ungestützte Stille",
        desc: "Beseitigt Ermüdung durch Sprecherstimmen. Fördert echte innere Selbstregulation und organische Gegenwart."
      },
      {
        title: "Harmonische Obertöne",
        desc: "Synthetisierte 216 Hz und 432 Hz Resonanzen führen die Gehirnwellen sanft von Beta-Stress in entspannte Alpha- und Theta-Zustände."
      },
      {
        title: "Hardware-Bildschirmsperrschutz",
        desc: "Nutzt die HTML5 Screen Wake Lock API, damit Mobilgeräte und Laptops während des Sitzens nicht ausgehen."
      },
      {
        title: "100% Lokale Privatsphäre",
        desc: "Keine Tracker, keine Accounts, keine Datenbanken. Deine Serien und Notizen verbleiben rein in deinem Browser."
      }
    ],
    neuroTitle: "Die Neurowissenschaft zeitbasierter Stille",
    neuroSubtitle: "Wie ungeleitete Meditation Hirnfrequenzen verändert und das Nervensystem beruhigt.",
    neuroCards: [
      {
        phase: "Phase 1 (0–3 Min)",
        title: "Induktion von Alpha- und Theta-Wellen",
        desc: "Klänge tibetischer Schalen erzeugen gleichmäßige akustische Schwingungen. Das Gehirn schaltet zügig von wacher Beta-Aktivität (14–30 Hz) auf beruhigende Alpha-Wellen (8–13 Hz) um."
      },
      {
        phase: "Phase 2 (5–12 Min)",
        title: "Dämpfung der Amygdala",
        desc: "Konzentriertes Atmen hemmt Kampf-oder-Flucht-Signale. Die Aktivierung des Vagusnervs senkt den Ruhepuls und löst Muskelverspannungen."
      },
      {
        phase: "Phase 3 (15–30 Min)",
        title: "Beruhigung des Default Mode Networks (DMN)",
        desc: "Anhaltende Stille dämpft das Ruhezustandsnetzwerk, wodurch zermürbende Grübelschleifen und Zukunftsängste spürbar nachlassen."
      }
    ],
    matrixTitle: "Optimale Meditationsdauer nach Zielsetzung",
    matrixSubtitle: "Wissenschaftlich fundierte Dauern, abgestimmt auf neurophysiologische Zustandswechsel.",
    matrixHeaders: {
      duration: "Dauer",
      focus: "Praxis-Fokus",
      brainState: "Gehirnzustand",
      benefit: "Physiologischer Nutzen",
      preset: "Schnellauswahl"
    },
    matrixRows: [
      {
        duration: "1–3 Minuten",
        focus: "Kurzer Reset & bewusstes Durchatmen",
        brainState: "Hohes Beta → Mittleres Beta",
        benefit: "Stoppt akute Cortisolspitzen mitten im Arbeitstag",
        timerLabel: "1-Min-Timer →",
        timerSlug: "1-minute-meditation-timer"
      },
      {
        duration: "5 Minuten",
        focus: "Gewohnheitsaufbau & Morgenruhe",
        brainState: "Frühe Alpha-Wellen",
        benefit: "Formt feste neuronale Bahnen für tägliche Achtsamkeit",
        timerLabel: "5-Min-Timer →",
        timerSlug: "5-minute-meditation-timer"
      },
      {
        duration: "10 Minuten",
        focus: "Stressabbau & innere Mitte",
        brainState: "Stabiler Alpha-Rhythmus",
        benefit: "Senkt den Blutdruck und stärkt die Gelassenheit im Alltag",
        timerLabel: "10-Min-Timer →",
        timerSlug: "10-minute-meditation-timer"
      },
      {
        duration: "15–20 Minuten",
        focus: "Tiefgreifende parasympathische Erholung",
        brainState: "Alpha-Theta-Grenzbereich",
        benefit: "Standarddauer klinischer Achtsamkeitsprogramme (MBSR)",
        timerLabel: "20-Min-Timer →",
        timerSlug: "20-minute-meditation-timer"
      },
      {
        duration: "30 Minuten",
        focus: "Kognitive Ausdauer & Einsichtsmeditation",
        brainState: "Stetige Theta-Wellen",
        benefit: "Steigert das Arbeitsgedächtnis und kreatives Problemlösen",
        timerLabel: "30-Min-Timer →",
        timerSlug: "30-minute-meditation-timer"
      },
      {
        duration: "45–60 Minuten",
        focus: "Kloster-Zazen & Vipassana-Sitzen",
        brainState: "Tiefes Theta & Delta",
        benefit: "Traditionelle Vertiefung zur Stärkung mentaler Widerstandskraft",
        timerLabel: "1-Std-Timer →",
        timerSlug: "1-hour-meditation-timer"
      }
    ],
    acousticTitle: "Akustikforschung: Warum echte Klangschalen statt Handy-Piepen?",
    acousticSubtitle: "Synthetische Digitalwecker lösen Schreckreflexe und Adrenalinschübe aus.",
    bells: [
      {
        title: "Tibetische Klangschale",
        freq: "216 Hz Grundton",
        desc: "Warme physikalische Obertöne mit 7,5 s Ausklang. Bildet handgehämmerte Bronzemetallurgie nach, um das Gehör sanft zu wiegen."
      },
      {
        title: "Kyoto Zen-Glocke",
        freq: "587 Hz (Keisu)",
        desc: "Kristalline Klosterglocke nach Vorbild traditioneller Kansho-Tempelinstrumente. Klärt den Kopf und schärft die Selbstwahrnehmung."
      },
      {
        title: "Tiefer Tempelgong",
        freq: "108 Hz Sub-Bass",
        desc: "Erdender Tiefton mit 8,5 s Schwingung. Versetzt den Brustkorb in wohltuende Resonanz und entspannt das Zwerchfell."
      },
      {
        title: "Ting-Sha Becken",
        freq: "2048 Hz Hochton",
        desc: "Rituelle Zwillingsbecken mit zartem Flirren zur behutsamen Rückkehr am Ende der Sitzung."
      }
    ],
    blueprintTitle: "5-Schritte-Leitfaden für ungeleitete Praxis",
    blueprintSubtitle: "So strukturierst du eine stille Sitzung für maximale mentale Regeneration.",
    blueprintSteps: [
      {
        number: 1,
        title: "Bequeme, aufrechte Haltung einnehmen",
        desc: "Setze dich auf ein Kissen oder einen Stuhl, richte die Wirbelsäule auf, senke die Schultern und lege die Hände locker ab."
      },
      {
        number: 2,
        title: "Vorbereitungszeit einstellen",
        desc: "Wähle 10 bis 30 Sekunden Vorlauf. So schließt du entspannt die Augen und wechselst ohne Hast von digitaler Unruhe in körperliche Stille."
      },
      {
        number: 3,
        title: "Den natürlichen Atem spüren",
        desc: "Richte die Aufmerksamkeit auf die kühle Luft an den Nasenlöchern oder das sanfte Heben und Senken der Bauchdecke."
      },
      {
        number: 4,
        title: "Intervallglocken nutzen",
        desc: "Stelle alle 5 Minuten einen sanften Gong ein, der dich bei Abschweifungen erinnert, ohne dass du auf die Uhr blicken musst."
      },
      {
        number: 5,
        title: "Ausklang wahrnehmen und reflektieren",
        desc: "Bleibe nach dem Schlussgong noch 30 Sekunden mit geschlossenen Augen sitzen. Halte dein Befinden fest, um die Routine zu festigen."
      }
    ]
  },

  pt: {
    badge: "Visão Geral IA · Guia de Consulta Rápida",
    heroTitle: "O que é um temporizador de meditação online e por que praticar sem guia?",
    heroParagraph: "Um temporizador de meditação online é uma ferramenta web minimalista com sinos acústicos autênticos (como taças tibetanas e gongos zen de Quioto) criada para apoiar a atenção plena não guiada. Ao contrário de aplicativos com instruções de voz contínuas que causam fadiga auditiva, a prática silenciosa desenvolve a concentração interna, acalma a Rede de Modo Padrão (DMN) do cérebro e ativa a resposta parassimpática de relaxamento. Inclui áudio sintetizado autêntico, prevenção de suspensão de ecrã, preparação prévia, sinos de intervalo e privacidade local sem anúncios.",
    takeaways: [
      {
        title: "Tranquilidade Pura Sem Voz",
        desc: "Elimina o cansaço auditivo de narrações. Promove autorregulação emocional e presença genuína no momento presente."
      },
      {
        title: "Harmônicos Naturais",
        desc: "Ressonância a 216 Hz e 432 Hz que guia as ondas cerebrais do estresse Beta para estados serenos Alfa e Theta."
      },
      {
        title: "Bloqueio de Tela Ativo",
        desc: "Usa a API HTML5 Screen Wake Lock para impedir que o celular ou notebook desligue a tela durante a sessão."
      },
      {
        title: "100% Privacidade Local",
        desc: "Sem rastreamento, sem contas, sem banco de dados externo. Seus registros permanecem guardados apenas no seu aparelho."
      }
    ],
    neuroTitle: "A Neurociência do Silêncio Cronometrado",
    neuroSubtitle: "Como a meditação sem guia modula as ondas cerebrais e acalma o sistema nervoso simpático.",
    neuroCards: [
      {
        phase: "Fase 1 (0–3 Min)",
        title: "Indução de Ondas Alfa e Theta",
        desc: "A vibração harmônica das taças tibetanas desacelera a mente, fazendo a transição rápida do estado Beta tenso (14–30 Hz) para o Alfa tranquilo (8–13 Hz)."
      },
      {
        phase: "Fase 2 (5–12 Min)",
        title: "Desaceleração da Amígdala",
        desc: "A atenção plena à respiração abranda os reflexos de luta ou fuga. A ativação do nervo vago desacelera os batimentos e solta os músculos."
      },
      {
        phase: "Fase 3 (15–30 Min)",
        title: "Acalento da Rede de Modo Padrão (DMN)",
        desc: "O silêncio prolongado desativa a DMN, silenciando pensamentos ruminativos, ansiedades cíclicas e preocupações com o futuro."
      }
    ],
    matrixTitle: "Durações Ideais de Meditação por Objetivo",
    matrixSubtitle: "Tempos cientificamente respaldados e ajustados às fases do sistema nervoso.",
    matrixHeaders: {
      duration: "Duração",
      focus: "Foco da Prática",
      brainState: "Estado Cerebral",
      benefit: "Benefício Fisiológico",
      preset: "Acesso Rápido"
    },
    matrixRows: [
      {
        duration: "1–3 Minutos",
        focus: "Micro-Pausa e Respiração Consciente",
        brainState: "Beta Alto → Beta Médio",
        benefit: "Contém picos repentinos de cortisol em momentos corridos de trabalho",
        timerLabel: "Timer 1m →",
        timerSlug: "1-minute-meditation-timer"
      },
      {
        duration: "5 Minutos",
        focus: "Construção de Hábito e Presença Matinal",
        brainState: "Início de Ondas Alfa",
        benefit: "Cria conexões neurais sólidas para a atenção diária",
        timerLabel: "Timer 5m →",
        timerSlug: "5-minute-meditation-timer"
      },
      {
        duration: "10 Minutos",
        focus: "Alívio de Tensão e Centramento Emocional",
        brainState: "Ritmo Alfa Equilibrado",
        benefit: "Abaixa a pressão arterial e expande a paciência em imprevistos",
        timerLabel: "Timer 10m →",
        timerSlug: "10-minute-meditation-timer"
      },
      {
        duration: "15–20 Minutos",
        focus: "Restauração Parassimpática Completa",
        brainState: "Fronteira Alfa-Theta",
        benefit: "Tempo padrão em estudos clínicos de redução de estresse (MBSR)",
        timerLabel: "Timer 20m →",
        timerSlug: "20-minute-meditation-timer"
      },
      {
        duration: "30 Minutos",
        focus: "Vigor Mental e Discernimento",
        brainState: "Ondas Theta Contínuas",
        benefit: "Melhora a memória de trabalho e desperta a criatividade",
        timerLabel: "Timer 30m →",
        timerSlug: "30-minute-meditation-timer"
      },
      {
        duration: "45–60 Minutos",
        focus: "Prática Zazen e Retiros Vipassana",
        brainState: "Acesso Profundo Theta e Delta",
        benefit: "Imersão de estilo monástico para profunda resiliência mental",
        timerLabel: "Timer 1h →",
        timerSlug: "1-hour-meditation-timer"
      }
    ],
    acousticTitle: "Ciência Acústica: Por que Sinos Autênticos e não Alarmes Digitais?",
    acousticSubtitle: "Alarmes sonoros agudos causam reflexos de susto involuntários e descargas de adrenalina.",
    bells: [
      {
        title: "Taça Tibetana de Meditação",
        freq: "216 Hz Fundamental",
        desc: "Harmônicos envolventes com sustentação de 7,5 s. Reproduz o bronze trabalhado artesanalmente para acalmar a audição."
      },
      {
        title: "Sino Zen de Quioto",
        freq: "587 Hz (Keisu)",
        desc: "Sino monástico nítido inspirado nos templos Kansho. Dissipa o cansaço mental e aguça a auto-observação."
      },
      {
        title: "Gongo Profundo de Templo",
        freq: "108 Hz Sub-Grave",
        desc: "Onda sonora densa com ressonância de 8,5 s. Vibra suavemente a caixa torácica e ancora o diafragma."
      },
      {
        title: "Pratos Ting-Sha",
        freq: "2048 Hz Agudos",
        desc: "Par ritual com ressonância oscilante suave para despertar a atenção no fechamento da prática."
      }
    ],
    blueprintTitle: "Roteiro em 5 Passos para a Prática Silenciosa",
    blueprintSubtitle: "Como estruturar uma sessão independente para o máximo descanso do sistema nervoso.",
    blueprintSteps: [
      {
        number: 1,
        title: "Adotar Postura Confortável e Firme",
        desc: "Sente-se numa almofada ou cadeira, alinhe a coluna, baixe os ombros e repouse as mãos confortavelmente no colo."
      },
      {
        number: 2,
        title: "Ajustar uma Contagem Preparatória",
        desc: "Reserve de 10 a 30 segundos de intervalo inicial. Esse espaço permite fechar os olhos e sair da correria com calma."
      },
      {
        number: 3,
        title: "Fixar a Atenção na Respiração",
        desc: "Foque na sensação do ar tocando as narinas ou no movimento calmo do abdômen subindo e descendo."
      },
      {
        number: 4,
        title: "Usar Sinos de Intervalo para Reorientar",
        desc: "Ative lembretes suaves a cada 5 minutos para trazer a mente de volta sem precisar abrir os olhos."
      },
      {
        number: 5,
        title: "Finalizar com Calma e Reflexão",
        desc: "Após o sino final, permaneça 30 segundos em silêncio antes de abrir os olhos. Registre como se sente para fortalecer seu hábito."
      }
    ]
  },

  ko: {
    badge: "AI 개요 · 빠른 참조 가이드",
    heroTitle: "온라인 명상 타이머란 무엇이며, 왜 비안내(침묵) 명상을 해야 할까요?",
    heroParagraph: "온라인 명상 타이머는 티베트 싱잉볼과 교토 젠 사원의 종 등 정통 어쿠스틱 사운드로 침묵 속 마음챙김 수련을 돕는 미니멀 웹 도구입니다. 음성 안내 앱은 지속적인 청각적 해석을 요구하는 반면, 침묵 명상은 내재적 주의력을 키우고 뇌의 디폴트 모드 네트워크(DMN)를 가라앉혀 부교감 신경의 깊은 이완을 유도합니다. 정밀한 물리 음향 합성, 화면 꺼짐 방지(Wake Lock), 준비 시간 설정, 주기적 인터벌 알림, 광고 없는 100% 로컬 개인정보 보호를 제공합니다.",
    takeaways: [
      {
        title: "목소리 없는 순수한 침묵",
        desc: "안내 음성으로 인한 피로를 없애고, 내면의 감정 조절 능력과 온전한 현재 자각을 길러줍니다."
      },
      {
        title: "조화로운 배음 공명",
        desc: "합성된 216Hz 및 432Hz 사운드가 뇌파를 긴장된 베타파에서 깊은 이완 상태인 알파파 및 세타파로 이끕니다."
      },
      {
        title: "하드웨어 화면 꺼짐 방지",
        desc: "HTML5 Screen Wake Lock API를 적용하여 장시간 명상 중에도 화면이 절전 모드로 전환되지 않습니다."
      },
      {
        title: "100% 로컬 프라이버시",
        desc: "데이터 전송, 회원가입, 추적 쿠키가 일절 없습니다. 기록과 습관 통계는 오직 본인의 브라우저에만 저장됩니다."
      }
    ],
    neuroTitle: "시간 제어 침묵 명상의 뇌과학",
    neuroSubtitle: "음성 없는 고요한 명상이 뇌파 주파수를 어떻게 조율하고 교감신경을 안정시키는지 살펴봅니다.",
    neuroCards: [
      {
        phase: "1단계 (0~3분)",
        title: "알파파 및 세타파 유도",
        desc: "싱잉볼의 부드러운 잔향이 뇌파를 높은 긴장의 베타파(14~30Hz)에서 편안한 알파파(8~13Hz) 상태로 빠르게 전환합니다."
      },
      {
        phase: "2단계 (5~12분)",
        title: "편도체 과열 진정",
        desc: "호흡을 의식하면 투쟁-도피 교감신경 반응이 줄어듭니다. 미주신경이 자극되어 안정 시 심박수가 낮아지고 근육이 이완됩니다."
      },
      {
        phase: "3단계 (15~30분)",
        title: "디폴트 모드 네트워크(DMN) 안정",
        desc: "지속적인 침묵은 뇌의 DMN 활동을 가라앉혀 꼬리를 무는 잡념, 불안감, 미래에 대한 불필요한 걱정을 덜어냅니다."
      }
    ],
    matrixTitle: "목표별 권장 명상 시간 (뇌과학 매트릭스)",
    matrixSubtitle: "신경계 상태 전환 단계에 맞춘 과학적 근거 기반의 권장 시간표.",
    matrixHeaders: {
      duration: "시간",
      focus: "명상 초점",
      brainState: "뇌파 상태",
      benefit: "생리적 효과",
      preset: "바로가기"
    },
    matrixRows: [
      {
        duration: "1~3분",
        focus: "빠른 리셋 & 호흡 가다듬기",
        brainState: "고베타파 → 중베타파",
        benefit: "업무 중 급격히 치솟는 스트레스 호르몬(코르티솔) 분비 억제",
        timerLabel: "1분 타이머 →",
        timerSlug: "1-minute-meditation-timer"
      },
      {
        duration: "5분",
        focus: "습관 형성 & 아침 마음가짐",
        brainState: "알파파 초기 발생",
        benefit: "매일 지속 가능한 견고한 마인드풀니스 뇌 신경망 구축",
        timerLabel: "5분 타이머 →",
        timerSlug: "5-minute-meditation-timer"
      },
      {
        duration: "10분",
        focus: "스트레스 해소 & 감정의 중심 잡기",
        brainState: "안정적 알파파 리듬",
        benefit: "혈압을 안정시키고 감정적 돌발 상황에서의 여유와 회복력 증진",
        timerLabel: "10분 타이머 →",
        timerSlug: "10-minute-meditation-timer"
      },
      {
        duration: "15~20분",
        focus: "깊은 부교감신경 이완 및 회복",
        brainState: "알파파-세타파 경계",
        benefit: "의학적 스트레스 완화 프로그램(MBSR)에서 표준으로 권장하는 시간",
        timerLabel: "20분 타이머 →",
        timerSlug: "20-minute-meditation-timer"
      },
      {
        duration: "30분",
        focus: "인지 지구력 & 깊은 통찰",
        brainState: "지속적인 세타파",
        benefit: "작업 기억력을 높이고 창의적인 발상 및 문제 해결 능력 촉진",
        timerLabel: "30분 타이머 →",
        timerSlug: "30-minute-meditation-timer"
      },
      {
        duration: "45~60분",
        focus: "좌선(Zazen) & 위빳사나 수련",
        brainState: "심층 세타파 및 델타파",
        benefit: "사원 및 수련원 수준의 깊은 침묵으로 단단한 정신적 탄력성 배양",
        timerLabel: "1시간 타이머 →",
        timerSlug: "1-hour-meditation-timer"
      }
    ],
    acousticTitle: "음향 과학: 왜 디지털 알람 대신 전통 싱잉볼인가?",
    acousticSubtitle: "스마트폰의 전자 비프음은 급작스러운 놀람 반사와 아드레날린 분비를 유발합니다.",
    bells: [
      {
        title: "티베트 싱잉볼",
        freq: "기본 주파수 216Hz",
        desc: "약 7.5초 동안 이어지는 따뜻한 배음. 손으로 두드려 만든 청동 악기의 울림을 살려 청각을 부드럽게 감쌉니다."
      },
      {
        title: "교토 젠 벨",
        freq: "587Hz (경자·Keisu)",
        desc: "사찰의 맑은 종소리를 재현하여 머릿속 안개를 걷어내고 내면의 직관적 자각을 또렷하게 깨웁니다."
      },
      {
        title: "심층 사원 공(Gong)",
        freq: "초저역 108Hz",
        desc: "8.5초 동안 길게 뻗어나가는 묵직한 저음 파동. 가슴과 횡격막을 자연스럽게 진동시켜 안도감을 줍니다."
      },
      {
        title: "팅샤(Ting-Sha) 심벌",
        freq: "고주파 2048Hz",
        desc: "맑고 투명한 진동음을 내는 한 쌍의 전통 의식용 악기로, 세션이 끝날 때 마음을 맑게 일깨웁니다."
      }
    ],
    blueprintTitle: "자율 침묵 명상을 위한 5단계 로드맵",
    blueprintSubtitle: "신경계의 완전한 휴식을 이끌어내는 명상 구성법.",
    blueprintSteps: [
      {
        number: 1,
        title: "편안하면서도 단정한 자세 잡기",
        desc: "방석이나 의자에 앉아 척추를 편안히 펴고 어깨의 힘을 뺀 뒤 손을 무릎 위에 부드럽게 얹습니다."
      },
      {
        number: 2,
        title: "준비 카운트다운 활용하기",
        desc: "10~30초의 준비 시간을 두어 눈을 감고 일상의 분주함에서 신체적 고요로 부드럽게 전환합니다."
      },
      {
        number: 3,
        title: "자연스러운 호흡에 주의 두기",
        desc: "코끝을 스치는 숨결이나 아랫배가 자연스레 오르내리는 신체 감각에 편안히 주의를 머무르게 합니다."
      },
      {
        number: 4,
        title: "간격 알림 종소리로 주의 되돌리기",
        desc: "5분마다 울리는 은은한 간격 종을 켜두면 화면을 보지 않고도 잡념에서 자연스럽게 빠져나올 수 있습니다."
      },
      {
        number: 5,
        title: "완료 후 고요를 음미하며 마무리하기",
        desc: "마지막 종이 울린 후 바로 일어나지 말고 30초간 여운을 즐깁니다. 마음 상태를 기록하여 습관을 단단히 하세요."
      }
    ]
  },

  it: {
    badge: "Panoramica IA · Guida Rapida di Riferimento",
    heroTitle: "Cos'è un timer di meditazione online e perché praticare senza voce guida?",
    heroParagraph: "Un timer di meditazione online è un'applicazione web minimale dotata di autentiche campane acustiche (come ciotole tibetane e gong zen di Kyoto) progettata per sostenere la presenza mentale silenziosa. A differenza delle app con voce guida che richiedono una costante interpretazione mentale, la meditazione non guidata allena l'attenzione spontanea, acquieta il Default Mode Network (DMN) cerebrale e stimola la distensione vagale parasimpatica. Include sintesi sonora realistica, schermo sempre attivo, conto alla rovescia di preparazione, rintocchi a intervalli e totale privacy locale senza pubblicità.",
    takeaways: [
      {
        title: "Pura Quiete Senza Voce",
        desc: "Elimina l'affaticamento da voce narrante. Rafforza l'autonomia emotiva interiore e la presenza consapevole a ogni istante."
      },
      {
        title: "Armonici Risonanti",
        desc: "Risonanza sintetizzata a 216 Hz e 432 Hz per guidare le onde cerebrali dallo stress Beta a stati distensivi Alfa e Theta."
      },
      {
        title: "Blocco Schermo Attivo",
        desc: "Sfrutta l'API HTML5 Screen Wake Lock per impedire che smartphone e computer vadano in standby durante la pratica."
      },
      {
        title: "100% Riservatezza Locale",
        desc: "Nessun tracciamento, nessun profilo o account. Statistiche e riflessioni rimangono salvate solo sul tuo dispositivo."
      }
    ],
    neuroTitle: "La Neuroscienza della Quiete a Tempo",
    neuroSubtitle: "Come la meditazione silenziosa modula le frequenze cerebrali e distende il sistema nervoso simpatico.",
    neuroCards: [
      {
        phase: "Fase 1 (0–3 Min)",
        title: "Induzione delle Onde Alfa e Theta",
        desc: "Le vibrazioni armoniche delle campane tibetane favoriscono il passaggio dal ritmo vigile Beta (14–30 Hz) al ritmo rilassato Alfa (8–13 Hz)."
      },
      {
        phase: "Fase 2 (5–12 Min)",
        title: "Disattivazione dell'Amigdala",
        desc: "L'attenzione rivolta al respiro attenua i segnali di allarme. La stimolazione vagale rallenta il battito cardiaco e allenta le tensioni muscolari."
      },
      {
        phase: "Fase 3 (15–30 Min)",
        title: "Placamento della Default Mode Network (DMN)",
        desc: "La quiete duratura attenua la rete cerebrale predefinita, riducendo i pensieri ossessivi, l'ansia e le preoccupazioni sul futuro."
      }
    ],
    matrixTitle: "Durate Ottimali di Meditazione per Obiettivo",
    matrixSubtitle: "Tempi basati su evidenze scientifiche adatti a ogni fase del sistema nervoso.",
    matrixHeaders: {
      duration: "Durata",
      focus: "Focus della Pratica",
      brainState: "Stato Cerebrale",
      benefit: "Beneficio Fisiologico",
      preset: "Avvio Rapido"
    },
    matrixRows: [
      {
        duration: "1–3 Minuti",
        focus: "Micro-Reset e Respiro Consapevole",
        brainState: "Beta Alto → Beta Medio",
        benefit: "Arresta i picchi improvvisi di cortisolo durante intense giornate di lavoro",
        timerLabel: "Timer 1m →",
        timerSlug: "1-minute-meditation-timer"
      },
      {
        duration: "5 Minuti",
        focus: "Continuità dell'Abitudine e Presenza",
        brainState: "Prime Onde Alfa",
        benefit: "Costruisce percorsi neurali saldi per una consapevolezza quotidiana",
        timerLabel: "Timer 5m →",
        timerSlug: "5-minute-meditation-timer"
      },
      {
        duration: "10 Minuti",
        focus: "Rilascio dello Stress e Centro Emotivo",
        brainState: "Ritmo Alfa Stabile",
        benefit: "Abbassa la pressione sanguigna e aumenta la pazienza nelle difficoltà",
        timerLabel: "Timer 10m →",
        timerSlug: "10-minute-meditation-timer"
      },
      {
        duration: "15–20 Minuti",
        focus: "Rigenerazione Parasimpatica Profonda",
        brainState: "Confine Alfa-Theta",
        benefit: "Durata standard utilizzata nei percorsi clinici di mindfulness (MBSR)",
        timerLabel: "Timer 20m →",
        timerSlug: "20-minute-meditation-timer"
      },
      {
        duration: "30 Minuti",
        focus: "Resistenza Cognitiva e Introspezione",
        brainState: "Onde Theta Costanti",
        benefit: "Migliora la memoria di lavoro e stimola il pensiero creativo intuitivo",
        timerLabel: "Timer 30m →",
        timerSlug: "30-minute-meditation-timer"
      },
      {
        duration: "45–60 Minuti",
        focus: "Sedute Zazen e Ritiri Vipassana",
        brainState: "Accesso a Theta e Delta Profondi",
        benefit: "Pratica di tipo monastico che forgia resilienza mentale e serenità",
        timerLabel: "Timer 1h →",
        timerSlug: "1-hour-meditation-timer"
      }
    ],
    acousticTitle: "Scienza Acustica: Perché Campane Autentiche e non Sveglie Digitali?",
    acousticSubtitle: "Gli allarmi digitali sgradevoli innescano sussulti involontari e picchi di adrenalina.",
    bells: [
      {
        title: "Campana Tibetana",
        freq: "Fondamentale 216 Hz",
        desc: "Armonici ricchi con decadimento morbido di 7,5 s. Modella il bronzo martellato a mano per cullare l'udito con dolcezza."
      },
      {
        title: "Campana Zen di Kyoto",
        freq: "587 Hz (Keisu)",
        desc: "Campana monastica cristallina ispirata agli strumenti Kansho. Dissipa la nebbia mentale e acuisce la consapevolezza."
      },
      {
        title: "Gong Profondo da Tempio",
        freq: "108 Hz Sub-Bassi",
        desc: "Onda sonora a bassa frequenza con risonanza di 8,5 s. Fa vibrare delicatamente la cassa toracica distendendo il diaframma."
      },
      {
        title: "Cimbali Ting-Sha",
        freq: "2048 Hz Acuti",
        desc: "Coppia rituale con oscillazione armonica limpida per risvegliare dolcemente la presenza al termine della seduta."
      }
    ],
    blueprintTitle: "Guida in 5 Passi per la Pratica Autonoma",
    blueprintSubtitle: "Come strutturare una seduta silenziosa per il massimo ristoro nervoso.",
    blueprintSteps: [
      {
        number: 1,
        title: "Assumere una Posizione Comoda e Nobile",
        desc: "Siediti su un cuscino o su una sedia con la schiena dritta, le spalle rilassate e le mani adagiate sul grembo."
      },
      {
        number: 2,
        title: "Impostare una Pausa di Preparazione",
        desc: "Scegli da 10 a 30 secondi di riscaldamento iniziale per chiudere gli occhi e passare dalla frenesia alla calma fisica."
      },
      {
        number: 3,
        title: "Radicare l'Attenzione nel Respiro",
        desc: "Osserva la sensazione dell'aria fresca alle narici o il morbido sollevarsi e abbassarsi del ventre."
      },
      {
        number: 4,
        title: "Sfruttare le Campane d'Intervallo",
        desc: "Attiva un rintocco ogni 5 minuti per richiamare la mente dalle distrazioni senza dover aprire gli occhi."
      },
      {
        number: 5,
        title: "Chiudere con Quiete e Riflessione",
        desc: "Dopo il rintocco finale, rimani fermo 30 secondi prima di riaprire gli occhi. Annota il tuo stato d'animo per consolidare l'abitudine."
      }
    ]
  }
};

import type { SupportedLocale } from './translations';

export interface BeginnerStep {
  number: number;
  title: string;
  desc: string;
  tip: string;
}

export interface BeginnerRule {
  title: string;
  desc: string;
}

export interface BeginnerRoadmapItem {
  days: string;
  title: string;
  desc: string;
}

export interface BeginnerMyth {
  myth: string;
  reality: string;
}

export interface BeginnerGuideContent {
  badge: string;
  title: string;
  subtitle: string;
  steps: BeginnerStep[];
  rulesTitle: string;
  rulesSubtitle: string;
  rules: BeginnerRule[];
  roadmapTitle: string;
  roadmapSubtitle: string;
  roadmap: BeginnerRoadmapItem[];
  mythsTitle: string;
  mythsSubtitle: string;
  mythLabel: string;
  realityLabel: string;
  myths: BeginnerMyth[];
}

export const beginnerGuideTranslations: Record<SupportedLocale, BeginnerGuideContent> = {
  en: {
    badge: "New to Meditation? Start Here",
    title: "Meditation Made Simple: A Beginner's 3-Step Guide",
    subtitle: "No chanting, no expensive subscriptions, and no complicated rules. Just you, your breath, and a moment of genuine stillness.",
    steps: [
      {
        number: 1,
        title: "Sit Comfortably",
        desc: "You don't need to sit cross-legged on the floor. An ordinary chair, couch, or bed works great. Keep your back comfortably straight, rest your hands on your lap, and soften your shoulders.",
        tip: "Tip: Keep your posture relaxed yet alert."
      },
      {
        number: 2,
        title: "Follow Your Natural Breath",
        desc: "Gently close your eyes or gaze softly downward. Do not try to force or control your breathing. Simply pay attention to where you feel it most—the cool air at your nostrils, or your belly gently rising and falling.",
        tip: "Tip: Your breath is your home anchor."
      },
      {
        number: 3,
        title: "When Thoughts Pop Up, Return",
        desc: "Here is the biggest secret: your mind will wander, and that is 100% normal! The second you notice you're daydreaming, don't get frustrated. Simply notice it, smile, and gently return to your next breath.",
        tip: "Tip: Noticing mind-wandering IS the practice."
      }
    ],
    rulesTitle: "4 Golden Rules Every Beginner Should Know",
    rulesSubtitle: "Relieve the pressure and make your mindfulness habit effortless.",
    rules: [
      {
        title: "1. Start with Just 3 to 5 Minutes",
        desc: "Never feel pressured to sit for 30 or 60 minutes right away. A 3-minute or 5-minute session done consistently every morning builds more neuroplastic strength than a sporadic hour once a month."
      },
      {
        title: "2. There is No Such Thing as a \"Bad\" Session",
        desc: "If your mind feels busy, restless, or loud today, you didn't fail. A workout where the weights felt heavy is still a workout. Showing up and hearing the closing bell is your victory."
      },
      {
        title: "3. Anchor It to an Existing Habit",
        desc: "The easiest way to remember to meditate is habit-stacking. Meditate right after brewing your morning tea, or right before turning off your computer for the evening."
      },
      {
        title: "4. Trust the Bell, Forget the Clock",
        desc: "Avoid peeking at the screen. That's why our timer features resonant Tibetan bowls and screen wake lock—trust that the bell will chime when your session completes."
      }
    ],
    roadmapTitle: "Your First 30 Days: A Realistic Roadmap",
    roadmapSubtitle: "What to expect as your brain adapts to daily stillness.",
    roadmap: [
      {
        days: "Days 1–7",
        title: "The Spark (3–5 Mins)",
        desc: "Your primary focus is simply showing up. You might feel restless or notice how active your mind is. This awareness is step one."
      },
      {
        days: "Days 8–14",
        title: "The Anchor (5–7 Mins)",
        desc: "You begin noticing the gap between a stressful thought and your reaction. Returning to your breath starts feeling more natural and less effortful."
      },
      {
        days: "Days 15–21",
        title: "The Calm Center (10 Mins)",
        desc: "Physical relaxation deepens. You'll likely notice better sleep quality, improved patience in conversations, and lowered afternoon fatigue."
      },
      {
        days: "Days 22–30+",
        title: "The Sanctuary (10–15 Mins)",
        desc: "Meditation is no longer a chore on your to-do list; it becomes a tranquil refuge you look forward to every day."
      }
    ],
    mythsTitle: "Beginner Myth Busters",
    mythsSubtitle: "Clearing up common misconceptions before your first sit.",
    mythLabel: "Myth:",
    realityLabel: "Reality:",
    myths: [
      {
        myth: "\"I have to stop thinking completely to meditate.\"",
        reality: "The human brain produces roughly 60,000 thoughts a day. Meditation is not about stopping thoughts; it's about learning not to chase them. Think of thoughts as clouds passing in the sky while you remain the observer."
      },
      {
        myth: "\"I need to pay for an app with a talking guide.\"",
        reality: "Guided talking voices can create dependency and cognitive listening fatigue. Simple unguided meditation with authentic acoustic bells trains your brain in genuine, self-directed emotional regulation."
      },
      {
        myth: "\"If I feel fidgety or restless, I'm doing it wrong.\"",
        reality: "Modern screens flood our brains with dopamine. When you first sit in silence, your nervous system naturally releases pent-up stimulation. Simply observe the fidgetiness with gentle curiosity—it dissolves within a few minutes."
      }
    ]
  },

  es: {
    badge: "¿Nuevo en la Meditación? Empieza Aquí",
    title: "Meditación Simplificada: Guía de 3 Pasos para Principiantes",
    subtitle: "Sin cantos, sin suscripciones costosas y sin reglas complicadas. Solo tú, tu respiración y un instante de auténtica calma.",
    steps: [
      {
        number: 1,
        title: "Siéntate Cómodamente",
        desc: "No necesitas sentarte con las piernas cruzadas en el suelo. Una silla normal, un sofá o tu cama sirven perfectamente. Mantén la espalda cómodamente erguida, apoya las manos en tu regazo y relaja los hombros.",
        tip: "Consejo: Mantén una postura relajada pero atenta."
      },
      {
        number: 2,
        title: "Sigue tu Respiración Natural",
        desc: "Cierra suavemente los ojos o baja la mirada. No intentes forzar ni controlar el ritmo de tu respiración. Simplemente percibe dónde la sientes más: en el aire fresco de la nariz o en el vaivén del abdomen.",
        tip: "Consejo: Tu respiración es tu ancla principal."
      },
      {
        number: 3,
        title: "Cuando Surjan Pensamientos, Regresa",
        desc: "El gran secreto: tu mente se va a distraer, ¡y es 100% natural! En el instante en que notes que estás soñando despierto, no te frustres. Simplemente reconócelo, sonríe y regresa con suavidad a tu próxima respiración.",
        tip: "Consejo: Notar la distracción ES la práctica."
      }
    ],
    rulesTitle: "4 Reglas de Oro para Todo Principiante",
    rulesSubtitle: "Quita la presión y haz que tu hábito de mindfulness sea natural y placentero.",
    rules: [
      {
        title: "1. Empieza con solo 3 a 5 Minutos",
        desc: "Nunca te sientas obligado a sentarte 30 o 60 minutos al inicio. Una sesión de 3 a 5 minutos hecha a diario fortalece más tus circuitos neuronales que una hora esporádica al mes."
      },
      {
        title: "2. No Existe una Sesión \"Mala\"",
        desc: "Si tu mente se siente inquieta o llena de ruido hoy, no has fracasado. Un entrenamiento donde las pesas pesaron más sigue siendo un entrenamiento. Presentarte y escuchar la campana final es tu triunfo."
      },
      {
        title: "3. Ancla la Práctica a un Hábito Existente",
        desc: "La forma más fácil de no olvidar meditar es encadenar hábitos. Medita justo después de preparar tu café o té mañanero, o al cerrar el ordenador de trabajo."
      },
      {
        title: "4. Confía en la Campana, Olvida el Reloj",
        desc: "Evita mirar la pantalla. Por eso nuestro temporizador cuenta con cuencos tibetanos y bloqueo de pantalla: confía en que la campana sonará cuando termine tu tiempo."
      }
    ],
    roadmapTitle: "Tus Primeros 30 Días: Un Camino Realista",
    roadmapSubtitle: "Lo que puedes esperar mientras tu mente se adapta a la quietud diaria.",
    roadmap: [
      {
        days: "Días 1–7",
        title: "La Chispa (3–5 Min)",
        desc: "Tu único objetivo es presentarte. Es normal sentir inquietud o notar lo activa que está tu mente. Esta toma de consciencia es el paso esencial."
      },
      {
        days: "Días 8–14",
        title: "El Ancla (5–7 Min)",
        desc: "Empiezas a notar el espacio entre un pensamiento estresante y tu reacción. Volver a la respiración se vuelve más fluido y requiere menos esfuerzo."
      },
      {
        days: "Días 15–21",
        title: "El Centro de Calma (10 Min)",
        desc: "La relajación corporal se profundiza. Notarás mejor descanso nocturno, mayor paciencia en conversaciones y menos fatiga vespertina."
      },
      {
        days: "Días 22–30+",
        title: "El Santuario (10–15 Min)",
        desc: "Meditar deja de ser una tarea pendiente y se convierte en un refugio tranquilo y revitalizante que esperas con ilusión cada día."
      }
    ],
    mythsTitle: "Mitos Comunes Desmentidos",
    mythsSubtitle: "Aclarando conceptos erróneos antes de tu primera sesión.",
    mythLabel: "Mito:",
    realityLabel: "Realidad:",
    myths: [
      {
        myth: "\"Tengo que poner la mente en blanco para meditar.\"",
        reality: "El cerebro humano genera alrededor de 60,000 pensamientos al día. Meditar no es silenciar la mente, sino aprender a no engancharte a ellos. Son nubes cruzando el cielo mientras tú eres el observador."
      },
      {
        myth: "\"Necesito pagar por una app con voz guiada.\"",
        reality: "Las voces guiadas continuas crean dependencia y fatiga auditiva. La meditación no guiada con campanas acústicas entrena tu capacidad autónoma de autorregulación emocional."
      },
      {
        myth: "\"Si me siento inquieto, lo estoy haciendo mal.\"",
        reality: "Las pantallas saturan el sistema con dopamina. Al sentarte en silencio, el cuerpo libera tensión acumulada. Observa esa inquietud con curiosidad: se disuelve en pocos minutos."
      }
    ]
  },

  ja: {
    badge: "瞑想が初めての方へ・ここからスタート",
    title: "シンプル瞑想入門：初心者のための3ステップ",
    subtitle: "お経やお布施、有料アプリの登録、複雑な作法は一切不要です。あなたと呼吸、そして静かな今この瞬間だけがあれば十分です。",
    steps: [
      {
        number: 1,
        title: "心地よい姿勢で座る",
        desc: "床の上で無理に結跏趺坐（座禅の足）を組む必要はありません。普段の椅子、ソファ、ベッドの上で大丈夫です。背筋を自然に伸ばし、肩の力を抜いて手を膝の上に置きましょう。",
        tip: "ヒント：リラックスしながらも背筋はすっきりと。"
      },
      {
        number: 2,
        title: "自然な呼吸に意識を向ける",
        desc: "目を軽く閉じるか、視線を斜め前に落とします。呼吸をコントロールしようとせず、鼻先を通り抜ける涼しい空気や、お腹が上下する自然な感覚をただ感じ取ります。",
        tip: "ヒント：呼吸はいつでも戻れる心の錨です。"
      },
      {
        number: 3,
        title: "雑念が浮かんだら、優しく呼吸に戻る",
        desc: "最も大切な秘密：思考が浮かぶのは100%正常な脳の働きです。気が散ったことに気づいたら自分を責めず、心の中で微笑んで、静かに次のひと呼吸へと戻りましょう。",
        tip: "ヒント：気が散ったと気づく瞬間こそが瞑想の練習です。"
      }
    ],
    rulesTitle: "初心者が知っておくべき4つの黄金ルール",
    rulesSubtitle: "プレッシャーを手放し、マインドフルネスを無理なく日常に。",
    rules: [
      {
        title: "1. 最初は3〜5分から始める",
        desc: "最初から30分や60分座ろうと気負う必要はありません。毎朝の3〜5分の継続は、月に一度の1時間よりもはるかに脳の神経可塑性を育みます。"
      },
      {
        title: "2. 「失敗したセッション」は存在しない",
        desc: "頭の中が忙しかったり落ち着かなかったりしても、失敗ではありません。筋トレで重く感じた日も筋肉が鍛えられているのと同じです。座り、最後の鐘を聞くだけで十分です。"
      },
      {
        title: "3. すでにある日常習慣につなげる",
        desc: "最も挫折しない方法は「習慣の積み重ね」です。朝のお茶を淹れた直後や、仕事終わりにPCを閉じた直後など、既存の行動に結びつけましょう。"
      },
      {
        title: "4. 鐘の音を信頼し、時計を見ない",
        desc: "途中で画面を覗き込む必要はありません。当サイトの澄んだシンギングボウルと画面スリープ防止機能を信じ、終了の鐘が鳴るまで身を委ねてください。"
      }
    ],
    roadmapTitle: "最初の30日間：無理のないステップ",
    roadmapSubtitle: "脳が日々の静寂に適応していく過程の目安です。",
    roadmap: [
      {
        days: "1〜7日目",
        title: "小さな芽生え（3〜5分）",
        desc: "まずは「座ること」だけで100点です。落ち着かなさや思考の多さに気づくこと自体が、大切な第一歩です。"
      },
      {
        days: "8〜14日目",
        title: "心の錨（5〜7分）",
        desc: "ストレスを感じる思考と自分の反応の間に「隙間」を感じ始めます。呼吸に戻る動作がより自然になります。"
      },
      {
        days: "15〜21日目",
        title: "穏やかな中心（10分）",
        desc: "身体の深い緊張が緩みます。睡眠の質の向上、人との会話での心の余裕、午後の疲労感の軽減を実感し始めます。"
      },
      {
        days: "22〜30日目+",
        title: "自分だけの聖域（10〜15分）",
        desc: "瞑想は「やるべき義務」から「毎日が楽しみになる静かな隠れ家」へと変わっていきます。"
      }
    ],
    mythsTitle: "初心者にありがちな思い込みの解消",
    mythsSubtitle: "初めて座る前に知っておきたい真実。",
    mythLabel: "思い込み：",
    realityLabel: "真実：",
    myths: [
      {
        myth: "「瞑想中は頭を完全に空っぽにしなければならない」",
        reality: "人間の脳は1日に約6万回思考します。思考を止めるのではなく、思考を追いかけない練習です。青空を流れる雲をただ眺めるように見守りましょう。"
      },
      {
        myth: "「声のガイド付き有料アプリが必要である」",
        reality: "人の声によるガイドは聴覚疲労や依存を生むことがあります。シンプルな鐘の音による自立した瞑想こそが、真の感情調整力を育みます。"
      },
      {
        myth: "「そわそわして集中できないのは向いていないからだ」",
        reality: "日常のデジタル画面による過剰な刺激が沈静化する過程で、身体が緊張を解放している自然な反応です。好奇心を持って眺めていると数分で静まります。"
      }
    ]
  },

  fr: {
    badge: "Nouveau dans la Méditation ? Commencez Ici",
    title: "La Méditation Rendue Simple : Guide en 3 Étapes pour Débutants",
    subtitle: "Pas de chants, pas d'abonnements coûteux, pas de règles compliquées. Juste vous, votre souffle et un pur instant de tranquillité.",
    steps: [
      {
        number: 1,
        title: "Asseyez-vous Confortablement",
        desc: "Inutile de vous asseoir en tailleur sur le sol. Une chaise ordinaire, un fauteuil ou votre lit conviennent parfaitement. Gardez le dos confortablement droit, posez les mains sur vos cuisses et relâchez les épaules.",
        tip: "Astuce : Posture détendue mais éveillée."
      },
      {
        number: 2,
        title: "Suivez Votre Souffle Naturel",
        desc: "Fermez doucement les yeux ou baissez le regard. N'essayez pas de contrôler votre respiration. Observez simplement où vous la ressentez le plus : l'air frais aux narines ou le doux mouvement de votre ventre.",
        tip: "Astuce : Le souffle est votre ancre naturelle."
      },
      {
        number: 3,
        title: "Quand des Pensées Surgissent, Revenez",
        desc: "Le secret fondamental : votre esprit va vagabonder, et c'est 100% normal ! Dès que vous remarquez une distraction, ne vous blâmez pas. Souriez intérieurement et ramenez doucement votre attention vers le souffle.",
        tip: "Astuce : Remarquer la distraction EST la pratique."
      }
    ],
    rulesTitle: "4 Règles d'Or pour Tout Débutant",
    rulesSubtitle: "Libérez-vous de la pression et transformez la pleine conscience en plaisir quotidien.",
    rules: [
      {
        title: "1. Commencez par 3 à 5 Minutes Seulement",
        desc: "Ne vous imposez jamais 30 ou 60 minutes au début. Une séance de 3 à 5 minutes chaque matin développe davantage vos connexions cérébrales qu'une heure isolée par mois."
      },
      {
        title: "2. Une \"Mauvaise\" Séance n'Existe Pas",
        desc: "Si votre esprit est agité ou bavard aujourd'hui, vous n'avez pas échoué. S'asseoir et entendre le bol tibétain de fin est déjà une victoire complète."
      },
      {
        title: "3. Associez la Séance à une Habitude Quotidienne",
        desc: "Le moyen le plus simple est d'ancrer la pratique à un rituel : juste après votre café du matin ou au moment d'éteindre votre ordinateur de travail."
      },
      {
        title: "4. Faites Confiance à la Cloche, Oubliez l'Écran",
        desc: "Évitez de regarder l'heure. Notre minuterie intègre des bols tibétains authentiques et le maintien de l'écran allumé : la cloche vous signalera la fin avec sérénité."
      }
    ],
    roadmapTitle: "Vos 30 Premiers Jours : Une Progression Réaliste",
    roadmapSubtitle: "Ce qui se passe lorsque votre cerveau s'habitue au calme quotidien.",
    roadmap: [
      {
        days: "Jours 1–7",
        title: "L'Étincelle (3–5 Min)",
        desc: "Votre seul objectif est d'être présent. Remarquer l'agitation de votre esprit est déjà la première victoire."
      },
      {
        days: "Jours 8–14",
        title: "L'Ancre (5–7 Min)",
        desc: "Vous percevez l'espace entre une pensée stressante et votre réaction. Revenir au souffle devient plus fluide et naturel."
      },
      {
        days: "Jours 15–21",
        title: "Le Centre Paisible (10 Min)",
        desc: "La détente physique s'approfondit. Sommeil plus réparateur, meilleure patience et clarté mentale accrue."
      },
      {
        days: "Jours 22–30+",
        title: "Le Sanctuaire (10–15 Min)",
        desc: "La méditation n'est plus une tâche sur votre liste, mais un sanctuaire bienveillant attendu chaque jour avec joie."
      }
    ],
    mythsTitle: "Mythes Fréquents Démystifiés",
    mythsSubtitle: "Dissiper les idées reçues avant votre première assise.",
    mythLabel: "Mythe :",
    realityLabel: "Réalité :",
    myths: [
      {
        myth: "\"Je dois vider totalement mon esprit pour méditer.\"",
        reality: "Le cerveau humain produit environ 60 000 pensées par jour. Méditer ne consiste pas à stopper les pensées, mais à ne plus courir après elles. Elles sont des nuages traversant le ciel dont vous êtes le témoin."
      },
      {
        myth: "\"J'ai besoin d'une application payante avec guide vocal.\"",
        reality: "Les voix guidées continues créent une fatigue auditive et une dépendance. La méditation silencieuse avec cloches authentiques forge une véritable autonomie émotionnelle."
      },
      {
        myth: "\"Si je gigote ou m'agite, c'est que j'ai échoué.\"",
        reality: "Nos journées sur écran surchargent le système nerveux. En vous asseyant en silence, le corps relâche naturellement ce trop-plein. Observez l'agitation avec bienveillance : elle s'estompe rapidement."
      }
    ]
  },

  de: {
    badge: "Neu bei der Meditation? Hier starten",
    title: "Meditation ganz einfach: 3-Schritte-Leitfaden für Anfänger",
    subtitle: "Keine Gesänge, keine teuren Abos, keine komplizierten Regeln. Nur du, dein Atem und ein Augenblick wahrer Ruhe.",
    steps: [
      {
        number: 1,
        title: "Bequem hinsetzen",
        desc: "Du musst nicht im Lotussitz auf dem Boden sitzen. Ein gewöhnlicher Stuhl, das Sofa oder dein Bett eignen sich perfekt. Halte den Rücken aufrecht, lege die Hände in den Schoß und entspanne die Schultern.",
        tip: "Tipp: Haltung entspannt, aber aufmerksam halten."
      },
      {
        number: 2,
        title: "Dem natürlichen Atem folgen",
        desc: "Schließe sanft die Augen oder senke den Blick. Versuche nicht, den Atem zu kontrollieren. Spüre einfach dort hin, wo du ihn wahrnimmst: an den Nasenflügeln oder beim Heben und Senken der Bauchdecke.",
        tip: "Tipp: Dein Atem ist dein sicherer Anker."
      },
      {
        number: 3,
        title: "Wenn Gedanken auftauchen, sanft zurückkehren",
        desc: "Das größte Geheimnis: Dein Geist wird abschweifen – und das ist zu 100 % normal! Sobald du es bemerkst, ärgere dich nicht. Nimm es wahr, lächle und kehre ruhig zu deinem nächsten Atemzug zurück.",
        tip: "Tipp: Das Bemerken des Abschweifens IST die Meditation."
      }
    ],
    rulesTitle: "4 goldene Regeln für jeden Einsteiger",
    rulesSubtitle: "Nimm den Druck heraus und mache Achtsamkeit zu einer mühelosen Gewohnheit.",
    rules: [
      {
        title: "1. Mit nur 3 bis 5 Minuten beginnen",
        desc: "Fühle dich niemals verpflichtet, sofort 30 oder 60 Minuten zu sitzen. 3 bis 5 Minuten täglich stärken deine neuronalen Schaltkreise mehr als eine gelegentliche Stunde im Monat."
      },
      {
        title: "2. Es gibt keine \"schlechte\" Sitzung",
        desc: "Wenn dein Kopf heute unruhig oder laut war, bist du nicht gescheitert. Dasein und den Schlussgong hören ist dein voller Erfolg."
      },
      {
        title: "3. An eine bestehende Gewohnheit ankoppeln",
        desc: "Die einfachste Methode ist Habit-Stacking: Meditiere direkt nach der morgendlichen Tasse Tee oder direkt nach dem Zuklappen des Laptops am Feierabend."
      },
      {
        title: "4. Auf die Glocke vertrauen, die Uhr vergessen",
        desc: "Vermeide es, auf den Bildschirm zu schielen. Unser Timer nutzt echte Klangschalen und Bildschirmsperrschutz – die Glocke holt dich pünktlich und sanft zurück."
      }
    ],
    roadmapTitle: "Deine ersten 30 Tage: Ein realistischer Plan",
    roadmapSubtitle: "Was geschieht, während sich dein Gehirn an die tägliche Stille gewöhnt.",
    roadmap: [
      {
        days: "Tage 1–7",
        title: "Der Funke (3–5 Min)",
        desc: "Dein einziges Ziel ist das Dasein. Die eigene Unruhe wahrzunehmen, ist bereits der erste bedeutsame Fortschritt."
      },
      {
        days: "Tage 8–14",
        title: "Der Anker (5–7 Min)",
        desc: "Du bemerkst den Raum zwischen stressigen Gedanken und deiner Reaktion. Das Zurückkehren zum Atem fällt spürbar leichter."
      },
      {
        days: "Tage 15–21",
        title: "Die innere Ruhe (10 Min)",
        desc: "Tiefere körperliche Entspannung stellt sich ein: besserer Schlaf, mehr Geduld im Alltag und spürbar weniger Erschöpfung."
      },
      {
        days: "Tage 22–30+",
        title: "Die Zuflucht (10–15 Min)",
        desc: "Meditation ist keine Pflichtaufgabe mehr, sondern ein wohltuender Zufluchtsort, auf den du dich jeden Tag freust."
      }
    ],
    mythsTitle: "Typische Anfänger-Mythen aufgeklärt",
    mythsSubtitle: "Missverständnisse aus dem Weg räumen vor der ersten Sitzung.",
    mythLabel: "Mythos:",
    realityLabel: "Realität:",
    myths: [
      {
        myth: "\"Ich muss mein Denken komplett abstellen.\"",
        reality: "Das menschliche Gehirn produziert rund 60.000 Gedanken am Tag. Es geht nicht darum, Gedanken zu stoppen, sondern ihnen nicht mehr hinterherzurennen. Betrachte sie wie Wolken am Himmel."
      },
      {
        myth: "\"Ich brauche eine teure App mit Sprecherstimme.\"",
        reality: "Ständige Sprachführungen können Hörermüdung und Abhängigkeit erzeugen. Stilles Meditieren mit Naturglocken schult deine echte, selbstbestimmte Emotionsregulation."
      },
      {
        myth: "\"Wenn ich zappelig bin, mache ich es falsch.\"",
        reality: "Bildschirme überfluten unser Nervensystem mit Reizen. Beim ersten Stillsitzen baut der Körper diese Ladung ab. Beobachte die Unruhe mit Neugier – sie verfliegt nach wenigen Minuten."
      }
    ]
  },

  pt: {
    badge: "Novo na Meditação? Comece Aqui",
    title: "Meditação Descomplicada: Guia em 3 Passos para Iniciantes",
    subtitle: "Sem cânticos, sem assinaturas caras e sem regras difíceis. Apenas você, sua respiração e um momento de calma verdadeira.",
    steps: [
      {
        number: 1,
        title: "Sente-se com Conforto",
        desc: "Você não precisa cruzar as pernas no chão. Uma cadeira comum, sofá ou sua cama funcionam perfeitamente. Mantenha a coluna ereta de forma natural, repouse as mãos no colo e relaxe os ombros.",
        tip: "Dica: Mantenha a postura relaxada, porém desperta."
      },
      {
        number: 2,
        title: "Acompanhe sua Respiração Natural",
        desc: "Feche suavemente os olhos ou descanse o olhar para baixo. Não force nem controle o ritmo. Apenas observe onde você mais a sente: no ar fresco nas narinas ou no movimento suave do abdômen.",
        tip: "Dica: Sua respiração é sua âncora constante."
      },
      {
        number: 3,
        title: "Quando Surgirem Pensamentos, Retorne",
        desc: "O maior segredo: sua mente vai se distrair, e isso é 100% normal! No momento em que perceber devaneios, não se cobre. Reconheça, sorria e volte com gentileza para a respiração seguinte.",
        tip: "Dica: Perceber a distração É a própria prática."
      }
    ],
    rulesTitle: "4 Regras de Ouro para Todo Iniciante",
    rulesSubtitle: "Elimine a cobrança e construa seu hábito com leveza.",
    rules: [
      {
        title: "1. Comece com Apenas 3 a 5 Minutos",
        desc: "Nunca se sinta na obrigação de sentar por 30 ou 60 minutos de início. 3 a 5 minutos diários constroem mais neuroplasticidade do que uma hora esporádica uma vez ao mês."
      },
      {
        title: "2. Não Existe Sessão \"Ruim\"",
        desc: "Se sua mente esteve agitada hoje, você não fracassou. Estar presente e escutar o sino final já é uma conquista completa."
      },
      {
        title: "3. Vincule a um Hábito Já Existente",
        desc: "O método mais fácil é o empilhamento de hábitos: medite logo após passar o café da manhã ou ao fechar o notebook no fim do expediente."
      },
      {
        title: "4. Confie no Sino, Esqueça o Relógio",
        desc: "Evite espiar a tela. Nosso cronômetro possui taças tibetanas e bloqueio de suspensão de tela: confie que o sino soará com clareza no final."
      }
    ],
    roadmapTitle: "Seus Primeiros 30 Dias: Uma Jornada Realista",
    roadmapSubtitle: "O que esperar enquanto seu cérebro se adapta à quietude diária.",
    roadmap: [
      {
        days: "Dias 1–7",
        title: "A Faísca (3–5 Min)",
        desc: "Seu único foco é simplesmente comparecer. Notar a agitação da mente já é o primeiro grande passo."
      },
      {
        days: "Dias 8–14",
        title: "A Âncora (5–7 Min)",
        desc: "Você percebe o espaço entre um pensamento estressante e sua reação. Retornar à respiração se torna mais natural."
      },
      {
        days: "Dias 15–21",
        title: "O Centro de Calma (10 Min)",
        desc: "O relaxamento corporal se aprofunda: sono de melhor qualidade, maior paciência nas relações e menos cansaço à tarde."
      },
      {
        days: "Dias 22–30+",
        title: "O Santuário (10–15 Min)",
        desc: "A meditação deixa de ser uma obrigação e se torna um refúgio acolhedor e revigorante esperado com prazer todos os dias."
      }
    ],
    mythsTitle: "Mitos Comuns Desmistificados",
    mythsSubtitle: "Esclarecendo conceitos antes da sua primeira sessão.",
    mythLabel: "Mito:",
    realityLabel: "Realidade:",
    myths: [
      {
        myth: "\"Preciso esvaziar a mente por completo para meditar.\"",
        reality: "O cérebro gera cerca de 60 mil pensamentos por dia. Meditar não é calar a mente, mas aprender a não se apegar a eles. Veja-os como nuvens passando no céu."
      },
      {
        myth: "\"Preciso pagar por um aplicativo com voz guiada.\"",
        reality: "Vozes contínuas podem gerar fadiga auditiva e dependência. O silêncio com sinos tradicionais desenvolve verdadeira autorregulação emocional."
      },
      {
        myth: "\"Se me sinto inquieto, estou fazendo tudo errado.\"",
        reality: "As telas cotidianas sobrecarregam o corpo de estímulos. Ao sentar em silêncio, essa energia acumulada é liberada. Observe com curiosidade gentil: ela se dissipa em poucos minutos."
      }
    ]
  },

  ko: {
    badge: "명상이 처음이신가요? 여기서 시작하세요",
    title: "쉽고 편안한 명상: 초보자를 위한 3단계 안내서",
    subtitle: "주문 외우기, 비싼 유료 구독, 복잡한 규칙은 필요 없습니다. 오직 당신과 숨결, 그리고 고요한 현재의 순간만 있으면 됩니다.",
    steps: [
      {
        number: 1,
        title: "편안한 자세로 앉기",
        desc: "바닥에 억지로 가부좌를 틀 필요가 전혀 없습니다. 일반 의자, 소파, 침대 위 모두 좋습니다. 허리를 편안하게 펴고 손을 무릎에 얹은 뒤 어깨의 긴장을 풀어주세요.",
        tip: "팁: 편안하면서도 깨어있는 자세를 유지하세요."
      },
      {
        number: 2,
        title: "자연스러운 호흡 바라보기",
        desc: "눈을 부드럽게 감거나 시선을 아래로 둡니다. 숨을 억지로 조절하려 하지 마세요. 콧끝을 스치는 시원한 공기나 아랫배가 오르내리는 자연스러운 감각을 편안히 관찰합니다.",
        tip: "팁: 호흡은 언제든 돌아올 수 있는 마음의 닻입니다."
      },
      {
        number: 3,
        title: "생각이 떠오르면, 다시 호흡으로 돌아오기",
        desc: "명상의 가장 큰 비밀: 마음이 딴생각으로 흐르는 것은 100% 자연스러운 현상입니다! 잡념을 알아차린 순간 자책하지 말고, 미소 지으며 다시 다음 숨으로 부드럽게 돌아오세요.",
        tip: "팁: 산만함을 알아차리는 그 순간이 바로 명상입니다."
      }
    ],
    rulesTitle: "초보자가 꼭 알아두어야 할 4가지 황금 규칙",
    rulesSubtitle: "부담감을 내려놓고 일상에서 자연스럽게 습관을 만드세요.",
    rules: [
      {
        title: "1. 하루 3~5분으로 가볍게 시작하기",
        desc: "처음부터 30분이나 1시간을 앉아있어야 한다는 부담을 가질 필요가 없습니다. 매일 아침 꾸준한 3~5분이 한 달에 한 번 하는 1시간보다 뇌신경 회로를 훨씬 튼튼하게 만듭니다."
      },
      {
        title: "2. '실패한 명상'이란 없습니다",
        desc: "오늘따라 마음이 산만하고 잡념이 많았더라도 실패한 것이 아닙니다. 자리에 앉아 완료를 알리는 종소리를 들은 것만으로도 당신은 이미 성공했습니다."
      },
      {
        title: "3. 기존의 일상 습관에 연결하기",
        desc: "가장 쉬운 습관 형성법은 기존 행동에 덧붙이는 것입니다. 아침에 차나 물을 마신 직후, 또는 퇴근 후 컴퓨터를 끈 직후 명상을 시작해 보세요."
      },
      {
        title: "4. 종소리를 믿고 화면은 잊기",
        desc: "명상 중에 시계를 훔쳐보지 마세요. 맑고 깊은 싱잉볼 소리와 화면 꺼짐 방지 기능이 세션이 끝나는 순간을 부드럽게 알려줍니다."
      }
    ],
    roadmapTitle: "첫 30일: 현실적이고 자연스러운 여정",
    roadmapSubtitle: "뇌가 일상의 고요함에 적응해 가는 과정입니다.",
    roadmap: [
      {
        days: "1~7일차",
        title: "시작의 불꽃 (3~5분)",
        desc: "목표는 오직 '자리에 앉는 것'입니다. 몸이 들뜨거나 마음이 바쁘다는 것을 알아차리는 것 자체가 훌륭한 첫걸음입니다."
      },
      {
        days: "8~14일차",
        title: "마음의 닻 (5~7분)",
        desc: "스트레스 반응과 내 생각 사이에 작은 여유 공간이 생기기 시작합니다. 호흡으로 돌아오는 과정이 한결 수월해집니다."
      },
      {
        days: "15~21일차",
        title: "평온의 중심 (10분)",
        desc: "신체적 이완이 깊어집니다. 수면의 질이 향상되고, 대화 시 여유가 생기며 오후의 피로감이 줄어드는 것을 체감합니다."
      },
      {
        days: "22~30일차+",
        title: "나만의 안식처 (10~15분)",
        desc: "명상은 더 이상 해야 할 숙제가 아니라, 하루 중 가장 기다려지는 평온하고 회복력 있는 쉼터가 됩니다."
      }
    ],
    mythsTitle: "초보자가 자주 오해하는 명상 상식",
    mythsSubtitle: "첫 세션을 시작하기 전 알아두면 좋은 사실들.",
    mythLabel: "오해:",
    realityLabel: "진실:",
    myths: [
      {
        myth: "\"명상 중에는 생각을 완전히 없애야 한다.\"",
        reality: "사람의 뇌는 하루에 약 6만 가지 생각을 만들어냅니다. 생각을 억누르는 것이 아니라 생각에 끌려다니지 않는 연습입니다. 파란 하늘을 흘러가는 구름처럼 생각을 바라보세요."
      },
      {
        myth: "\"말하는 음성 가이드 앱을 결제해야 한다.\"",
        reality: "끊임없는 음성 지도는 청각적 피로와 의존성을 만들 수 있습니다. 맑은 종소리와 함께하는 고요한 침묵 명상이 진정한 자율적 감정 조절력을 길러줍니다."
      },
      {
        myth: "\"몸이 꼼지락거리고 답답하면 명상에 맞지 않는 것이다.\"",
        reality: "일상의 디지털 자극이 가라앉으며 몸에 쌓인 긴장이 풀려나가는 자연스러운 생리 반응입니다. 호기심을 갖고 지켜보면 몇 분 안에 자연스레 잦아듭니다."
      }
    ]
  },

  it: {
    badge: "Nuovo alla Meditazione? Inizia Qui",
    title: "La Meditazione Semplice: Guida in 3 Passi per Principianti",
    subtitle: "Nessun canto, nessun abbonamento costoso e nessuna regola complicata. Solo tu, il tuo respiro e un istante di autentica quiete.",
    steps: [
      {
        number: 1,
        title: "Siediti Comodamente",
        desc: "Non c'è bisogno di sedersi a gambe incrociate sul pavimento. Una normale sedia, il divano o il letto vanno benissimo. Mantieni la schiena comodamente dritta, posa le mani sulle ginocchia e rilassa le spalle.",
        tip: "Consiglio: Postura rilassata ma vigile."
      },
      {
        number: 2,
        title: "Segui il Tuo Respiro Naturale",
        desc: "Chiudi dolcemente gli occhi o abbassa lo sguardo. Non forzare il ritmo della respirazione. Osserva semplicemente dove lo avverti di più: l'aria fresca alle narici o il morbido sollevarsi dell'addome.",
        tip: "Consiglio: Il respiro è la tua ancora sicura."
      },
      {
        number: 3,
        title: "Quando i Pensieri Emergono, Ritorna",
        desc: "Il segreto più grande: la mente si distrarrà, ed è al 100% naturale! Quando ti accorgi di esserti allontanato, non giudicarti. Sorridi dentro di te e torna con dolcezza al respiro successivo.",
        tip: "Consiglio: Accorgersi della distrazione È la meditazione."
      }
    ],
    rulesTitle: "4 Regole d'Oro per Ogni Principiante",
    rulesSubtitle: "Rimuovi ogni pressione e trasforma la consapevolezza in un'abitudine serena.",
    rules: [
      {
        title: "1. Inizia con Soli 3–5 Minuti",
        desc: "Non sentirti mai in dovere di sederti per 30 o 60 minuti da subito. 3 o 5 minuti ogni mattina rafforzano i circuiti cerebrali molto più di un'ora isolata al mese."
      },
      {
        title: "2. Non Esiste una Sessione \"Sbagliata\"",
        desc: "Se oggi la tua mente è stata agitata o rumorosa, non hai fallito. Esserci e ascoltare la campana finale è già una vittoria completa."
      },
      {
        title: "3. Collegala a un'Abitudine Esistente",
        desc: "Il modo più efficace è concatenare le abitudini: medita subito dopo il caffè del mattino o appena spegni il computer da lavoro."
      },
      {
        title: "4. Fidati della Campana, Dimentica l'Orologio",
        desc: "Evita di sbirciare lo schermo. Il nostro timer dispone di campane tibetane e blocco dello schermo: fidati che il rintocco suonerà con precisione al termine."
      }
    ],
    roadmapTitle: "I Tuoi Primi 30 Giorni: Un Percorso Realistico",
    roadmapSubtitle: "Cosa aspettarsi mentre il cervello si abitua alla quiete quotidiana.",
    roadmap: [
      {
        days: "Giorni 1–7",
        title: "La Scintilla (3–5 Min)",
        desc: "Il tuo unico obiettivo è esserci. Notare quanto la mente sia attiva è già il primo passo fondamentale."
      },
      {
        days: "Giorni 8–14",
        title: "L'Ancora (5–7 Min)",
        desc: "Cominci a notare lo spazio tra un pensiero stressante e la tua reazione. Tornare al respiro diventa sempre più naturale."
      },
      {
        days: "Giorni 15–21",
        title: "Il Centro di Calma (10 Min)",
        desc: "Il rilassamento fisico si approfondisce: sonno più rigenerante, maggiore pazienza con gli altri e meno stanchezza pomeridiana."
      },
      {
        days: "Giorni 22–30+",
        title: "Il Santuario (10–15 Min)",
        desc: "La meditazione non è più un dovere quotidiano, ma un rifugio accogliente e rigenerante che attendi con gioia ogni giorno."
      }
    ],
    mythsTitle: "Miti Comuni Sfatati",
    mythsSubtitle: "Chiarire i dubbi più frequenti prima della prima seduta.",
    mythLabel: "Mito:",
    realityLabel: "Realtà:",
    myths: [
      {
        myth: "\"Devo svuotare completamente la mente per meditare.\"",
        reality: "Il cervello produce circa 60.000 pensieri al giorno. Meditare non significa fermare i pensieri, ma imparare a non inseguirli. Guardali come nuvole nel cielo mentre tu resti l'osservatore."
      },
      {
        myth: "\"Serve un'app a pagamento con una voce guida.\"",
        reality: "Le voci guidate continue possono creare stanchezza uditiva e dipendenza. Il silenzio con campane autentiche sviluppa una vera e autonoma regolazione emotiva."
      },
      {
        myth: "\"Se mi sento irrequieto, sto sbagliando tutto.\"",
        reality: "Gli schermi sovraccaricano il corpo di stimoli. Nel silenzio, il sistema nervoso rilascia l'energia accumulata. Osserva l'irrequietezza con curiosità: svanirà in pochi minuti."
      }
    ]
  }
};

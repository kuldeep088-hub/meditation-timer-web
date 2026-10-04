# Meditation Timer Online

A minimalist, distraction-free online meditation timer built with **Astro**, **Tailwind CSS v4**, and the **Apple Human Interface Guidelines**.

Live site: [freemeditationtimeronline.com](https://freemeditationtimeronline.com)

---

## Features

- **Apple-Inspired Zen Simplicity**: 44px frosted glass navigation, clean tabular digits that don't jitter, and distraction-free dark/light themes.
- **Auto-Fading Zen Mode**: Peripheral controls smoothly fade out to 0% opacity after 3.5 seconds of meditation, keeping focus purely on your breath.
- **Physical Modeling Web Audio Synthesizer**:
  - Resonant Tibetan Singing Bowl
  - Kyoto Zen Bell
  - Deep Grounding Temple Gong
  - Pure Ting-Sha Cymbals
  - *Instant sound with 0KB download overhead and 100% offline support.*
- **Free Ambient Soundscapes**:
  - Gentle Rain on Leaves
  - Forest Mountain Stream
  - Ocean Tide Swells
  - Brown Noise (Deep Calm)
  - Soft Zen Breeze
- **Dual-Slider Audio Mixer**: Independent volume controls for bells and ambient nature sounds.
- **Preparation Countdown & Intervals**: Configurable warm-up time (5s–60s) and periodic interval bells (every 1m, 2m, 5m, 10m, 15m, etc.).
- **Visual Breath Pacer**: Optional pulsing mindfulness aura for relaxed rhythmic breathing.
- **Screen Wake Lock**: Automatically keeps mobile, tablet, and desktop screens awake throughout your practice.
- **100% Private Local Habit & Streak Tracker**: Daily streaks, Apple Health-style 7-day consistency rhythm, and post-session reflection check-ins saved locally in `localStorage` without sign-up.

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm / pnpm / bun

### Installation

```bash
git clone https://github.com/kuldeep088-hub/meditation-timer-web.git
cd meditation-timer-web
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Production Build

```bash
npm run build
```

Generates a static build inside the `dist/` directory ready for deployment on Cloudflare Pages, Vercel, Netlify, or GitHub Pages.

---

## License

MIT

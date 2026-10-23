# Amit Engineering Co. — Website

React + Vite + Tailwind CSS. Deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

Almost all text, photos, contact details and service data live in **`src/config/site.js`**.
Search that file for `TODO` and fill in the real phone number, email, WhatsApp number and address
before going live. Empty values are hidden automatically (no address → no map, no clients → no client strip).

Photos are in `public/images/`. To add a project photo, put the file there and add a line to `PROJECTS` in `site.js`.

## Contact form

The form sends email through [EmailJS](https://www.emailjs.com/). Add these in
Vercel → Project → Settings → Environment Variables, then redeploy:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

The EmailJS template can use `{{name}}`, `{{company}}`, `{{phone}}`, `{{email}}`, `{{service}}` and `{{message}}`.
Until the keys are set, the form opens the visitor's email app with the enquiry filled in.

## Deploy

`vercel.json` rewrites all paths to `index.html`, so links like `/about` work on refresh.
If the Vercel project root is the repo root, set **Root Directory** to `frontend`.

## Animations

No extra packages — plain CSS + small React helpers.

- `src/index.css` (bottom, "MOTION") — all keyframes, hover and press effects.
- `src/components/IntroLoader.jsx` — opening screen that slides up. Change `SHOW_MS` to make it shorter/longer.
- `src/components/motion.jsx` — `<Reveal>` (scroll animation: `variant="up|left|right|zoom|fade|wipe"`, `delay={ms}`), `<CountUp>` (stats), scroll progress bar.
- Wrap any new block in `<Reveal>` to get the scroll animation; add class `lift` for the hover-lift card effect and `zoom-wrap` around an image for hover zoom.
- Users who turn on "reduce motion" in their phone/computer settings see no animations.

# Astro + Keystatic

Build a complete Astro website for a fictional Magician/Mentalist named "Victor Ashveil".
This is a dark-aesthetic, professional marketing site. The site will be hosted on GitHub
Pages at the custom subdomain astro.abyss.dev.

## Stack
- Astro (static output, `output: 'static'`)
- Tailwind CSS
- Keystatic CMS
- GitHub Actions for CI/CD deploy to GitHub Pages

## Design
- Dark aesthetic: near-black background (#0a0a0f), deep purple/navy accents, warm gold highlights
- Display font: Cormorant Garant (Google Fonts)
- Body font: Inter (Google Fonts)
- Professional, atmospheric, approachable — not cheesy Halloween-style
- Subtle animations where appropriate (scroll reveals, hover effects)
- Fully responsive

## Pages
1. **Home** — Hero with tagline, brief intro, featured shows teaser, testimonials strip, CTA
2. **About** — Bio, philosophy, headshot placeholder
3. **Shows** — Cards for each show type (Corporate Events, Private Parties, Stage Shows, Virtual)
4. **Blog** — List of posts with excerpts
5. **Contact** — Booking inquiry form (static HTML form, action can point to Netlify Forms
    or Formspree as a placeholder)

## Blog Posts (create 2 arbitrary example posts)
- Post 1: "The Psychology Behind Misdirection" — a short thoughtful post about how misdirection works psychologically
- Post 2: "What to Expect When You Book a Mentalist" — a practical guide for clients

## Keystatic CMS
- Configure Keystatic for local and GitHub mode
- Content collections for: blog posts, shows, testimonials
- Fields should be sensible for a performer's marketing site

## GitHub Pages Setup
- Add a CNAME file containing `astro.abyss.dev`
- Configure `base` and `site` in astro.config.mjs appropriately for GitHub Pages root domain
- GitHub Actions workflow at `.github/workflows/deploy.yml` that:
  - Triggers on push to main
  - Installs dependencies with npm
  - Runs `astro build`
  - Deploys the `dist/` folder to the `gh-pages` branch using actions/deploy-pages

## Repo structure
Create all files needed for a working project. Include a README.md explaining:
- How to run locally
- How to access the CMS at /keystatic
- How to configure the GitHub repo settings to enable GitHub Pages from gh-pages branch
- DNS configuration needed to point astro.abyss.dev to GitHub Pages

Do not leave placeholders — write actual content, actual styles, actual working code.

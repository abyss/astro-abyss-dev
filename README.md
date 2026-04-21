# Victor Ashveil — Mentalist & Psychological Illusionist

Astro website for [Victor Ashveil](https://astro.abyss.dev), hosted on GitHub Pages at a custom subdomain.

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [Keystatic](https://keystatic.com) — git-backed CMS

---

## Running Locally

```bash
npm install
npm run dev
```

The site is available at `http://localhost:4321`.

### Accessing the CMS

With the dev server running, visit `http://localhost:4321/keystatic`.

Keystatic runs in **local mode** by default — changes are written directly to the filesystem as Markdown/JSON files in `src/content/`. No account or external service needed.

---

## GitHub Pages Setup

### 1. Enable GitHub Pages

In your repository settings:

1. Go to **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow at `.github/workflows/deploy.yml` handles builds and deploys the `dist/` folder

### 2. Set the Custom Domain

In **Settings → Pages → Custom domain**, enter `astro.abyss.dev` and save.

GitHub will automatically commit a `CNAME` file — but one is already present in `public/CNAME` so this step is just confirming.

Enable **Enforce HTTPS** once the certificate has provisioned (usually within a few minutes of the DNS being correct).

---

## DNS Configuration

To point `astro.abyss.dev` at GitHub Pages, add an `A` record (or `CNAME`) in your DNS provider:

### Option A — CNAME (recommended for subdomains)

| Type  | Name  | Value                    |
|-------|-------|--------------------------|
| CNAME | astro | YOUR_USERNAME.github.io  |

Replace `YOUR_USERNAME` with your GitHub username.

### Option B — A records (apex domain only)

Not needed here since this is a subdomain, but for reference, GitHub Pages IP addresses are:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

DNS changes can take up to 48 hours to propagate, though typically much faster.

---

## Keystatic GitHub Mode (Optional)

To run Keystatic in GitHub mode (editable via a hosted UI without a local dev server), set the following environment variables:

```
KEYSTATIC_STORAGE_KIND=github
KEYSTATIC_GITHUB_REPO_OWNER=your-github-username
KEYSTATIC_GITHUB_REPO_NAME=your-repo-name
```

You'll also need to [create a GitHub OAuth App](https://keystatic.com/docs/github-mode) and set the relevant token variables.

For read-only production deployments the `KEYSTATIC_STORAGE_KIND` is set to `local` in the GitHub Actions workflow, which prevents the admin UI from being exposed.

---

## Content Structure

| Directory | Purpose |
|---|---|
| `src/content/blog/` | Blog posts (Markdown) |
| `src/content/shows/` | Show format descriptions (Markdown) |
| `src/content/testimonials/` | Client testimonials (JSON) |

All content is editable via the Keystatic CMS at `/keystatic` when running locally.

---

## Replacing the Contact Form

The contact form at `/contact` submits to Formspree. To activate it:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace `YOUR_FORM_ID` in `src/pages/contact.astro` with your actual form ID

The form action URL should look like: `https://formspree.io/f/xabcdefg`

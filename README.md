# Benson — Expressive Portfolio

A dark, responsive portfolio for Tochukwu Teco-Benson, software engineer and Vaulta co-founder. This is an update to the existing React/Vite project. It uses the same Git repository and Vercel deployment.

## Review the refresh on its own

Extract `Bensons-Portfolio-Expressive.zip`, open the extracted folder in your terminal, then run:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. Review the homepage, all four case studies, the project filters, the mobile menu and screenshot zoom.

## Apply it to your existing Git-connected portfolio

Keep your original project folder and its `.git` directory. Do not replace the entire folder or initialize another Git repository.

From your **existing portfolio folder**, run the updater using the path to the extracted refresh. For a normal Downloads location:

```bash
bash "$HOME/Downloads/Bensons-Portfolio-Expressive/UPDATE-EXISTING-PORTFOLIO.sh" "$PWD"
npm ci
npm run dev
```

The script moves the old `src`, `public` and managed root files into a dated `Bensons-Portfolio-backup-…` folder beside your original project, then copies in the refresh. It preserves `.git`, `.env` files, `node_modules`, `.gitignore` and other repository configuration. It replaces `src` completely, so old unused components do not remain in the project or fail lint checks. A backup of any previous Vercel configuration is retained; review it for custom settings before publishing.

After your local review:

```bash
npm run lint
npm run build
git status
git diff --stat
```

Commit and push through your usual workflow when satisfied. If your Vercel project still has its Git deployment connection enabled, the push will trigger its usual deployment. No new Vercel project is required. Build command: `npm run build`; output directory: `dist`.

### Restore the previous version

The updater prints the backup path. Stop the dev server. Move the updated managed files into a separate folder, then move the originals from the backup back into your existing project. Alternatively, use Git to restore the files if you have already committed the previous version. Keep the backup until you are happy with the refresh.

## The new visual direction

- Oversized identity typography, outlined display lettering and a chrome-purple 3D sculpture that responds to pointer movement.
- A custom WebGL shader with an actual rendered image fallback. Animation suspends offscreen or in hidden tabs; a persistent motion toggle and system reduced-motion preference are supported.
- Four large project scenes. On spacious desktop screens, vertical scrolling moves through a pinned horizontal showcase. Smaller or shorter screens and reduced-motion users get vertical scenes with the same content.
- A floating chapter dock, magnetic action buttons, scroll reveals and a moving typography ribbon.
- A full Vaulta founder chapter, with interactive workspace, access and infrastructure tabs.
- A separate work index with hover/focus image previews, category filters and a grid switch.
- Interactive capability and experience sections, a larger portrait composition and oversized contact typography.
- Four updated case studies, real project screenshots, clear ownership and project statuses, and earlier personal builds with their existing repository links.
- Responsive navigation, keyboard focus states, native screenshot dialogs, direct contact links and the existing contact form.
- Optimized WebP assets, updated metadata, valid structured data and Vercel SPA routing.

## Design research

These official portfolios informed the composition and interaction patterns:

- [Dennis Snellenberg](https://dennissnellenberg.com/) — large identity treatment, generous visual composition and a typographic work index.
- [Carl Gordon](https://www.carlgordonmedia.com/) — expressive 3D presentation, project staging and floating navigation.
- [Rauno Freiberg](https://rauno.me/) — deliberate framing, navigation detail and interface craft.

The implementation uses Benson's identity, supplied screenshots and project stories. The sculpture is procedural code created for this portfolio. No reference-site copy, photography, proprietary models or source code were reused.

## Content and integrations

- Project stories, metrics, technology lists, statuses and URLs: `src/data/projects.js`.
- Homepage, founder story, education and experience: `src/pages/Home.jsx`.
- Contact details and form: `src/components/Contact.jsx`.
- Styling and responsive behaviour: `src/index.css`.
- Social metadata: `index.html` and `src/components/SEO.jsx`.
- CV: `public/Tochukwu-Teco-Benson-CV.pdf`, copied from the supplied CV without changing its contents.

The contact form preserves the existing Formspree endpoint (`mjgannaj`). No test messages were sent. Confirm delivery from your own account before launch. Email and phone links work independently of the form.

Real client/internal projects link to their supplied live or demo destinations; no public source-code links are invented. TaskFlow and NextHire retain their public GitHub links. Babcock is functional and awaiting final stakeholder review. The Zinny destination currently points to the Help Desk, as supplied.

Fonts load from Google Fonts, with local system-font fallbacks. The application requires JavaScript. No artificial loading screen or custom cursor is used.

## Validation and preview limits

The production build and ESLint were checked. The sculpture shader was compiled, linked and rendered with an offscreen graphics context; its fallback image comes from that rendering. Route content, local assets, project destinations, case-study ownership descriptions and updater behaviour were also checked. The browser available in the build environment cannot open localhost, so a complete browser interaction pass could not be performed there. Review locally at desktop and mobile widths before publishing. The inline visual preview illustrates the implemented direction; the ZIP contains the full application.

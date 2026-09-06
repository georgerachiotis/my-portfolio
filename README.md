# Georgios Rachiotis — Portfolio

A single-page React / Vite portfolio for Junior Software Developer and Junior Full-Stack Developer applications. Uses plain CSS and existing dependencies; no routing or UI library is needed.

## Development

- Run `npm install` once.
- Run `npm run dev` for the local preview.
- Run `npm run lint` and `npm run build` before release.
- Run `npm run preview` to inspect the production build.
- Existing GitHub Pages deployment: `npm run deploy`. The Vite base remains `/my-portfolio/`.

## Editing content

- `src/data/profile.js`: contact URLs, navigation, ordered skill categories, main technologies, training. Add C# / .NET here when appropriate.
- `src/data/projects.js`: projects with stable IDs, descriptions, stack arrays, optional screenshots/alt text, status, demo links and repository links.
- `src/components/ProjectCard.jsx`: shared presentation for every project. Images and demos render only when supplied.
- About, experience and education have dedicated components.
- `public/cv.pdf`: existing CV, preserved.
- `src/styles/global.css`: palette, layout, responsive breakpoints, focus styles and reduced-motion support.
- `index.html`: page title, description and social metadata.

## Content to provide / confirm

1. Supply real screenshots for projects, with descriptive alt text. None were included in the original repository.
2. Featured projects are Decision Companion and The Unbroken: Gladiator's Rise. Their descriptions follow their public repository documentation.
3. Decision Companion links to its GitHub Pages application. The Unbroken is a JavaFX desktop application, so its repository provides setup/run instructions instead of a browser demo.
4. Review the existing CV against the new positioning. It has not been rewritten.
5. Supply the final public URL and a social sharing image if canonical / og:url / og:image metadata is wanted.
6. Training is listed without unsupported completion dates or certificate credentials. Coding Factory is explicitly in progress.

## Accessibility and performance

Semantic page sections, a skip link, keyboard focus indicators, native training disclosure, accessible mobile navigation and reduced-motion support. Content is visible without scroll observers. System fonts avoid external font requests; the existing lightweight portrait is reused. External links use noopener/noreferrer.

No automated test suite is configured. Validate responsive layouts, mobile navigation, training disclosure, anchor targets and the browser console in addition to build and lint.

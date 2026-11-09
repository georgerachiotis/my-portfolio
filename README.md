# Georgios Rachiotis — Portfolio

A single-page React and Vite portfolio presenting my work as a Software Developer, with a focus on React and Java. It includes web and desktop projects, technical skills, background, experience and a downloadable CV. The interface uses plain CSS and does not require a routing or UI library.

## Live site

https://georgerachiotis.github.io/my-portfolio/

## Development

- Run `npm install` to install dependencies.
- Run `npm run dev` to start the local development server.
- Run `npm run lint` to check the code and `npm run build` to create a production build.
- Run `npm run preview` to inspect the production build locally.
- Run `npm run deploy` to build and publish `dist` to the `gh-pages` branch. The Vite base path is `/my-portfolio/`.

## Project structure

- `src/data/profile.js`: contact links, navigation, skills, main technologies and training. Skills are ordered as Backend, Frontend, Databases, Tools & Concepts, and Additional. C# and .NET are listed under Backend; Angular and MongoDB are listed as currently learning.
- `src/data/projects.js`: project descriptions, technologies, highlights, screenshots, demos and repository links.
- `src/components/ProjectCard.jsx`: shared project presentation. Screenshot and demo elements render only when provided.
- `src/components/`: page sections and shared interface components.
- `src/assets/profilepic.png`: profile portrait used in the hero section.
- `public/cv.pdf`: current CV linked from the portfolio. Replace this source file when updating the CV; do not edit the generated copy in `dist`.
- `src/styles/global.css`: colors, layout, responsive breakpoints, focus styles and reduced-motion support.
- `index.html`: page title, description and social metadata.

## Projects

The portfolio currently presents two projects:

- **Decision Companion** — a React decision-making web application with a live demo hosted on GitHub Pages. Project details and links are in `src/data/projects.js`.
- **The Unbroken: Gladiator's Rise** — a Java and JavaFX desktop game. Its repository includes setup and run instructions instead of a browser demo.

Project screenshots have not been added yet. When adding them, include descriptive alt text in `src/data/projects.js`. A social sharing image can also be added if `og:image` metadata is needed.

## Accessibility and validation

The site uses semantic sections, a skip link, keyboard focus indicators, a native disclosure for additional training, accessible mobile navigation and reduced-motion support. Content remains visible without scroll observers. System fonts avoid external font requests, and external links use `noopener` and `noreferrer`.

There is no automated test suite configured for this portfolio. Before release, run the lint and production build, then manually check responsive layouts, mobile navigation, the training disclosure, section links and the browser console.

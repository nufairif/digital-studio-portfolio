# Digital Studio Portfolio

A modern portfolio website for a creative digital design and development studio. The project uses a bold dark interface, expressive typography, neon accent colors, smooth motion, and responsive page layouts to present studio work, services, team story, and contact details.

## Description

This website is designed for agencies, studios, freelancers, or creative teams that want to showcase digital products, brand systems, web experiences, motion work, and art direction in a premium editorial style.

The project includes a homepage, work portfolio, services page, about page, contact page, animated navigation, mobile-friendly layouts, and horizontal category scrolling on smaller screens.

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS v4
- React Router
- Motion

## Project Structure

```txt
website-design/
  frontend/
    src/
      app/
        components/
        pages/
        routes.ts
        App.tsx
      styles/
      main.tsx
    package.json
    tsconfig.json
    vite.config.ts
```

## Getting Started

Install dependencies:

```bash
cd frontend
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run TypeScript checks:

```bash
npx tsc --noEmit
```

Check dependencies:

```bash
npm audit
```

## Notes

- Run npm commands from the `frontend` folder.
- VS Code settings are included to avoid false Tailwind CSS at-rule warnings.
- If old TypeScript errors still show in VS Code, run `TypeScript: Restart TS Server`.
- If `npm run build` fails with `spawn EPERM` from `esbuild` on Windows, check antivirus or security settings that may block executables inside `node_modules`.

# tailwind-v4-darkmode-repro

🎨 Minimal reproduction repo showing Tailwind CSS v4 dark mode issue where two CSS versions are loaded in dev mode.

## Steps to run

```bash
npm install
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
npm run dev

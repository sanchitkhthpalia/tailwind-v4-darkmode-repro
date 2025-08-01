# Tailwind v4 Dark Mode Reproduction

This is a minimal reproduction of issue [#18539](https://github.com/tailwindlabs/tailwindcss/issues/18539) from Tailwind CSS,  
where dark mode conflicts occur because Tailwind v4 loads two CSS versions in dev mode.

## Steps to reproduce

1. Clone the repo:

```bash
git clone https://github.com/sanchitkhthpalia/tailwind-v4-darkmode-repro.git
cd tailwind-v4-darkmode-repro

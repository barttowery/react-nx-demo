# Introduction

This is a frontend web example using React code. This is a [ReactJS](https://reactjs.org) + [Vite](https://vitejs.dev) monorepo styled with [Tailwindcss](https://tailwindcss.com). The solution/monorepo was created and scaffolded with [Nx](https://nx.dev). Read sections below to find Nx commands to create components and additional projects within this solution.

This is a potential architectural approach that I would take for a React solution. For more details on me, see [LinkedIn](https://www.linkedin.com/in/bart-towery-52287b/).

## Work in Progress

Note that this solution is a work in progress. It is not completed. The current functionality is done (or at least has a first draft).

- Shared Components Storybook - The design library of shared components to be used in this solution. Many of these are based of [ShadCn](https://ui.shadcn.com/)/[Radix UI](https://www.radix-ui.com/). To start the Shared Components Storybook, run `npx nx storybook shared-ui`.

## What is inside?

This project uses many tools like:

- [Nx](https://nx.dev) - Installing Nx globally (`npm add --global nx@latest`) allows you to avoid using `npx` at the beginning of the below commands.
- [Node](https://nodejs.org/en/download) - Version 24+ required for Storybook 10
- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev)
- [Tailwindcss](https://tailwindcss.com)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)

## Visual Studio Code Extensions

Once VS Code is installed, install some or all of the following extensions to improve your development experience:

### Required

- ESLint
- Prettier

### Recommended

- Tailwind CSS Intellisense
- PostCSS Language Support
- GitHub Copilot
- Nx Console

## Running Storybook

To start Storybook for a particular project:

```
npx nx storybook <project>
```


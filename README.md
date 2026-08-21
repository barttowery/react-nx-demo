# Introduction

This is a frontend web example using React code. This is a [ReactJS](https://reactjs.org) + [Vite](https://vitejs.dev) monorepo styled with [Tailwindcss](https://tailwindcss.com). The solution/monorepo was created and scaffolded with [Nx](https://nx.dev). Read sections below to find Nx commands to create components and additional projects within this solution.

This is a potential architectural approach that I would take for a React solution. For more details on me, see [LinkedIn](https://www.linkedin.com/in/bart-towery-52287b/).

## Live Deployment

This example is running live at [https://react-nx-demo-git-main-barttowerys-projects.vercel.app/](https://react-nx-demo-git-main-barttowerys-projects.vercel.app/).

## Work in Progress

Note that this solution is a work in progress. It is not completed. The current functionality is done (or at least has a first draft).

- Web Application - The basic web application exists. Includes a components overview, workflow visualization, sales demo pages along with an about us page. Buttons for light/dark mode and green/blue theme switcher are working. Navigation works for the full size and mobile.
- Shared Components Storybook - The design library of shared components to be used in this solution. Many of these are based of [ShadCn](https://ui.shadcn.com/)/[Radix UI](https://www.radix-ui.com/). To start the Shared Components Storybook, run `npx nx storybook shared-ui`.
- General Architectural Structure - Splitting between domains (e.g. overview, sales, platform, shared) and between functionality within a domain (e.g. feature, mocks, models, ui, utils) is done.

TODOs:
- All data is hardcoded right now. Will create APIs to make it more realistic.

## Technology/Packages Used

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

## Running the Project
Start the Web Application using `nx serve react-nx-demo`. The Web Application runs at [http://localhost:4200](http://localhost:4200).

## Running Storybook
To start Storybook for a particular project:
```
npx nx storybook <project>
```
- For the shared-ui Storybook, run `nx storybook shared-ui`. This is the Storybook for the Shared Component Library and the Design System for the solution.
- For the platform-ui Storybook, run `nx storybook platform-ui`. This is the Storybook for the Platform UI Library. This includes the header, navigation functionality, etc.
- For the overview-ui Storybook, run `nx storybook overview-ui`. This is the Storybook for the Overview UI Library. This includes the components for the component overview page and the about me area.
- For the workflow-ui Storybook, run `nx storybook workflow-ui`. This is the Storybook for the Workflow UI Library. This includes the demo of the workflow visualization.
- For the sales-ui Storybook, run `nx storybook sales-ui`. This is the Storybook for the Sales UI Library. This includes the components for the sales demo.

## Project Architecture

### Structure
Follows the Nx approach with apps and packages. This project is broken apart the way a large project should be broken apart to demonstrate the proper approach. In some instances, this approach is overkill for the current size of this project. The project is created following [Atomic Design](https://atomicdesign.bradfrost.com/) principles.

### Web App
A React application that includes the top level routing. The routing details for each individual domain is retrieved from the feature package for that domain.

Note that I find it better in larger projects to push routing for domain areas into those packages. This allows domain areas to be owned by groups and prevents some merge conflicts. Run the web application by using `nx serve react-nx-demo`. This runs the web application at [http://localhost:4200](http://localhost:4200).

### Packages
This is the meat of the functionality. The following packages exist.
- overview-feature (`/packages/overview-feature`) - Contains the overview routes and the pages for component overview and about me.
- overview-ui (`/packages/overview-ui`) - Contains the overview UI components. Any needed data will be passed in via properties (makes unit testing better). Storybook is configured and can be run via `nx storybook overview-ui`.
- platform-models (`/packages/platform-models`) - Contains the models for the platform (i.e. Theme). This would be for models needed by platform level components.
- platform-ui (`/packages/platform-ui`) - Contains the platform UI components. This contains items such as the header and navigation as well as any other components needed by the platform. Any needed data will be passed in via properties (makes unit testing better). Storybook is configured and can be run via `nx storybook platform-ui`.
- sales-feature (`/packages/sales-feature`) - COMING SOON! Contains the sales routes, the pages for sales demo and hooks for retrieving the data (when that is implemented).
- sales-ui (`/packages/sales-ui`) - COMING SOON! Contains the sales UI components. All data is passed in via properties (makes unit testing better). Storybook is configured and can be run via `nx storybook sales-ui`.
- shared-models (`/packages/shared-models`) - Does not currently exist, but would contain the models for the shared components.
- shared-ui (`/packages/shared-ui`) - The shared component library for the solution and the design library for the solution. Storybook is configured and can be run via `nx storybook shared-ui`. These are intended to be shared components that could be used across multiple web sites. 
- shared-utils (`/packages/shared-utils`) - Contains a tailwind class merge utility. Other shared utilities such as data formatters (currency, date, etc.) would also exist in this library.
- workflow-feature (`/packages/workflow-feature`) - Contains the workflow routes, the page for the Workflow visualization and hooks for retrieving the data (when that is implemented).
- workflow-mocks (`/packages/workflow-mocks`) - Contains the mocks for the workflow components and is used by Storybook in the workflow-ui package.
- workflow-models (`/packages/workflow-models`) - Contains the models for the workflow components including the workflow step structure.
- workflow-ui (`/packages/workflow-ui`) - Contains the workflow UI components. This contains the workflow functionality including building the
hierarchy for the workflow, laying out the workflow and displaying the workflow inside the React Flow container. All data is passed in via
properties (makes unit testing better). Storybook is configured and can be run via `nx storybook workflow-ui`.

## Unit Testing
Unit testing for the shared component library is done via Storybook visual testing and vitest. This can be run using `nx test shared-ui` or `nx test shared-ui --coverage` to regenerate the code coverage testing details. Testing is not complete or thorough at this point, but offers a general idea of how things could be done.

## AI Agent Files
There are AI agent files in the monorepo. At this point, they are nothing more than the files added by Nx and the Nx Console extension. Rules and documentation should be added to provide proper instructions to agents for better use. This will be updated in the near future.

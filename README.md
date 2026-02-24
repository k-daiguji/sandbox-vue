# Sandbox vue

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
  - [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
  - [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv)
  - [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)
  - [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)
  - [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Project Setup

1. Clone repository

   ```sh
   git clone https://github.com/k-daiguji/sandbox-vue.git
   ```

1. Change directory

   ```sh
   cd sandbox-vue
   ```

1. Install packages

   ```sh
   npm install
   ```

1. Install browsers

   ```sh
   npx playwright install
   ```

## Commands

### Compile and Hot-Reload for Development

```sh
 npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

- Runs the end-to-end tests

  ```sh
  npm run test:e2e
  ```

- Runs the tests only on Chromium

  ```sh
  npm run test:e2e -- --project=chromium
  ```

- Runs the tests of a specific file

  ```sh
  npm run test:e2e -- tests/example.spec.ts
  ```

- Runs the tests in debug mode

  ```sh
  npm run test:e2e -- --debug
  ```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

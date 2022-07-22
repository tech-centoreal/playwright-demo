# Getting Started with Playwright

This project was initialized with `npm init` and `npm init playwright@latest`.

## Available Scripts

In the project directory, you can run:

Inside that directory, you can run several commands:

  - ### `npx playwright test`

    Runs the end-to-end tests.

  - ### `npx playwright test --project=chromium`

    Runs the tests only on Desktop Chrome.

  - ### `npx playwright test example`

    Runs the tests in a specific file.

  - ### `npx playwright test --debug`

    Runs the tests in debug mode.

  - ### `npx playwright codegen`

    Auto generate tests with Codegen.

We suggest that you begin by typing:

`npx playwright test`

And check out the following files:
  - ./e2e/example.spec.js - Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - ./playwright.config.js - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. 
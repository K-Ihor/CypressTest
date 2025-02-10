import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    viewportWidth: 1440,
    viewportHeight: 1060,
    defaultCommandTimeout: 40000,
    execTimeout: 3000,
    taskTimeout: 3000,
    pageLoadTimeout: 60000,
    requestTimeout: 3000,
    responseTimeout: 3000,
    supportFile: 'cypress/support/e2e.ts',
    fixturesFolder: 'cypress/fixtures',
    specPattern: 'cypress/e2e/**/*.spec.ts',
    chromeWebSecurity: false,
    env: {
      ENV: "https://demoqa.com/automation-practice-form",
    },
    setupNodeEvents(on, config) {
      return config;
    }
  }
});

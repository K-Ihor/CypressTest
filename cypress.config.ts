import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    supportFile: 'cypress/support/e2e.ts',
    fixturesFolder: 'cypress/fixtures',
    specPattern: 'cypress/e2e/**/*.spec.ts',
    chromeWebSecurity: false, // Отключает CORS-блокировки
    viewportWidth: 1440,
    viewportHeight: 1060,
  }
});

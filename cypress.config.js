const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    failOnStatusCode: false,
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env: {
      specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    },
  },
});

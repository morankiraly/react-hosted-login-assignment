const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'y69j22',
  e2e: {
    experimentalOriginDependencies: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});

import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:4000',
  },
})

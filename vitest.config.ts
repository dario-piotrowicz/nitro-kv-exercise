import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    forceRerunTriggers: ['**/server/**/*.ts'],
    include: ['test.ts']
  },
})
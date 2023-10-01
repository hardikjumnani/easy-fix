import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.js'],
    include: ['./src/__tests__/**/*.test.jsx'],
    globals: true,
  },
});
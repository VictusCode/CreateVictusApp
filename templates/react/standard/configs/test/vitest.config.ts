import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './configs/test/setupTests.ts',
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['../../src/**/*'],
      exclude: [],
    },
    alias: {
      '@app/': new URL('../../src/app', import.meta.url).pathname,
      '@modules/': new URL('../../src/modules', import.meta.url).pathname,
      '@pages/': new URL('../../src/pages', import.meta.url).pathname,
      '@shared/': new URL('../../src/shared', import.meta.url).pathname,
      '@ui/': new URL('../../src/ui', import.meta.url).pathname,
    },
  },
});

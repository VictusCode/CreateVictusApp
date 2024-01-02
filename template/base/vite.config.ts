import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const PORT = Number(process.env.PORT) || 3000;

export default defineConfig(({ mode }) => {
  const buildOptions = {
    outDir: 'dist',
    assetsDir: 'assets',
  };

  if (mode === 'production') {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    Object.assign(buildOptions, {
      sourcemap: false,
      manifest: true,
    });
  }

  if (mode === 'development') {
    Object.assign(buildOptions, {
      sourcemap: true,
    });
  }

  return {
    plugins: [tsconfigPaths(), react()],
    base: '/',
    publicDir: './public',
    build: buildOptions,
    preview: {
      port: PORT,
    },
  };
});

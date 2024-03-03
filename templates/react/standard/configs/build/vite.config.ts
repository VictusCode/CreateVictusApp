import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolvePath } from './helpers';

const PORT = Number(process.env.PORT) || 3000;

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  const buildOptions = {
    outDir: 'dist',
    assetsDir: 'assets',
  };

  if (!isDev) {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    Object.assign(buildOptions, {
      sourcemap: false,
      manifest: true,
    });
  }

  if (isDev) {
    Object.assign(buildOptions, {
      sourcemap: true,
    });
  }

  return {
    plugins: [tsconfigPaths(), react(), TanStackRouterVite()],
    base: '/',
    publicDir: './public',
    build: buildOptions,
    preview: {
      port: PORT,
    },
    define: {
      IS_DEV: isDev,
    },
    resolve: {
      alias: {
        '@app': resolvePath('app'),
        '@modules': resolvePath('modules'),
        '@pages': resolvePath('pages'),
        '@shared': resolvePath('shared'),
        '@ui': resolvePath('ui'),
      },
    },
  };
});

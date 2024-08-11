import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import { plugins } from '../plugins';
import { resolvePath } from '../shared/helpers';
import { baseBuildConfig as build } from './base';
import { devBuildConfig } from './dev';
import { prodBuildConfig } from './prod';

export default defineConfig(({ mode }) => {
  if (mode !== 'local') dotenv.config({ path: '.env' });

  const IS_DEV = mode === 'develop' || mode === 'local';
  const port = Number(process.env.PORT) || 3030;

  Object.assign(build, IS_DEV ? devBuildConfig : prodBuildConfig);

  return {
    plugins,
    base: '/',
    publicDir: resolvePath('public'),
    build,
    preview: {
      port,
    },
    server: {
      port,
    },
    define: {
      IS_DEV,
    },
  };
});

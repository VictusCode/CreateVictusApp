import { BuildOptions } from 'esbuild';
import { resolveRoot } from './utils/resolveRoot';
import { CleanPlugin } from './plugins/clean';

const mode = process.env.MODE || 'development';

const isDev = mode === 'development';

const config: BuildOptions = {
  outdir: resolveRoot('build'),
  entryPoints: [resolveRoot('src', 'index.jsx')],
  entryNames: '[dir]/bundle.[name]-[hash]',
  allowOverwrite: true,
  bundle: true,
  tsconfig: resolveRoot('tsconfig.json'),
  minify: true,
  sourcemap: isDev,
  metafile: true,
  loader: {
    '.png': 'file',
    '.svg': 'file',
    '.jpg': 'file',
  },
  plugins: [
    CleanPlugin,
    HTMLPlugin({
      title: 'App',
    }),
  ],
};

export { config };

import { BuildOptions } from 'esbuild';
import { resolveRoot } from './utils/resolveRoot';
import { cleanPlugin } from './plugins/clean';
import { htmlPlugin } from '@craftamap/esbuild-plugin-html';

const mode = process.env.MODE || 'development';

const isDev = mode === 'development';

const config: BuildOptions = {
  outdir: resolveRoot('dist'),
  entryPoints: [resolveRoot('src', 'index.tsx')],
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
    cleanPlugin,
    htmlPlugin({
      files: [
        {
          entryPoints: [resolveRoot('src', 'index.tsx')],
          filename: 'index.html',
          title: 'VictusCode App',
          favicon: resolveRoot('public', 'logo.ico'),
        },
      ],
    }),
  ],
};

export { config };

import react from '@vitejs/plugin-react';
import { PluginOption } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const plugins: PluginOption[] = [
  tsconfigPaths(),
  react({
    babel: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            displayName: false,
            fileName: false,
            minify: true,
            pure: true,
            ssr: false,
            transpileTemplateLiterals: true,
          },
        ],
      ],
    },
  }),
];

export { plugins };

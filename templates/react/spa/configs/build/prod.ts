import { BuildOptions } from 'vite';

const prodBuildConfig: BuildOptions = {
  sourcemap: false,
  manifest: true,
  minify: 'terser',
  terserOptions: {
    compress: {
      keep_infinity: true,
      drop_console: true,
      drop_debugger: true,
    },
  },
  cssMinify: 'esbuild',
  chunkSizeWarningLimit: 1024,
};

export { prodBuildConfig };

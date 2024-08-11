import { BuildOptions } from 'vite';

const baseBuildConfig: BuildOptions = {
  outDir: 'dist',
  sourcemap: false,
  assetsDir: 'assets',
  cssCodeSplit: true,
  emptyOutDir: true,
  target: 'esnext',
  reportCompressedSize: true,
};

export { baseBuildConfig };

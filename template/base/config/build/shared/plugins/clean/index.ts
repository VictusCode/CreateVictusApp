import { Plugin } from 'esbuild';
import { rm } from 'fs/promises';

const CleanPlugin: Plugin = {
  name: 'CleanPlugin',
  setup(build) {
    build.onStart(async () => {
      try {
        const outdir = build.initialOptions.outdir;
        if (outdir) await rm(outdir, { recursive: true });
      } catch (e) {
        console.log('CleanPlugin error: ', e);
      }
    });
  },
};

export { CleanPlugin };

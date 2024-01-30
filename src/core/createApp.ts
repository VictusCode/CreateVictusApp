import { createDir } from './createDir';
import { downloadFromURL } from './downloadFromURL';

const createApp = async (dir: string, url: string) => {
  await createDir(dir);
  downloadFromURL(url, dir);
};

export { createApp };

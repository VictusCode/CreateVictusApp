import { createDir } from './createDir';

const createApp = async (dir: string, url: string) => {
  createDir(dir);
};

export { createApp };

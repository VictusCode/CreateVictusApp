import { existsSync, mkdirSync } from 'fs';
import { printError } from '../ui/shared';

const createDir = (dir: string) => {
  if (existsSync(dir)) return printError('directory exists, please choose another name');

  mkdirSync(dir);
};

export { createDir };

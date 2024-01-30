import { existsSync } from 'fs';
import { mkdirSync } from 'temp';
import { printError } from '../ui/shared';

const createDir = async (dir: string) => {
  if (existsSync(dir)) return printError('directory exists, please choose another name');

  mkdirSync(dir);
};

export { createDir };

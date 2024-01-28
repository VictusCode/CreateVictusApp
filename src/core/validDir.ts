import { existsSync, mkdirSync } from 'fs';
import { printError } from '../ui/shared';

const validDir = (dir: string) => {
  if (!dir) {
    printError('please provide a valid directory name');
    return false;
  }

  if (existsSync(dir)) {
    printError('directory exists, please choose another name');
    return false;
  }

  return true;
};

export { validDir };

import { existsSync } from 'fs';
import { printError } from '../ui/shared';

const validDir = (dir: string) => {
  if (!dir) {
    printError('Please provide a valid directory name');
    return false;
  }

  if (existsSync(dir)) {
    printError('Directory exists, please choose another name');
    return false;
  }

  return true;
};

export { validDir };

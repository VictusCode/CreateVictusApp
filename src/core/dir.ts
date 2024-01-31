import { existsSync, mkdirSync, rmSync } from 'fs';
import { printError } from '../ui/shared';

const createDir = async (dir: string) => {
  if (existsSync(dir)) return printError('directory exists, please choose another name');

  mkdirSync(dir);
};

const clearDir = async (dir: string) => {
  if (!existsSync(dir)) return;

  rmSync(dir, { recursive: true, force: true });
};

export { createDir, clearDir };

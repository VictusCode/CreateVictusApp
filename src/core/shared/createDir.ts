import { printError } from '@ui/shared/error';
import { existsSync, mkdirSync } from 'fs';
import { env } from './env';

const createProjectDir = () => {
  const { dir } = env;

  if (!dir) return printError('please provide a directory name');

  if (existsSync(dir)) return printError('directory exists, please choose another name');

  mkdirSync(dir);

  return dir;
};

export { createProjectDir };

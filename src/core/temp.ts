import { existsSync } from 'fs';
import ora from 'ora';
import { join } from 'path';
import { cleanupSync, mkdirSync } from 'temp';
import packageJSON from '../../package.json';
import { printError } from '../ui/shared';

const createTempDir = async (dir: string) => {
  if (existsSync(dir)) {
    printError('directory exists, please choose another name');
    return;
  }

  const spinner = ora(`Preparing the environment \n`).start();
  mkdirSync(dir);

  const tempDir = mkdirSync({
    dir,
    prefix: '.',
  });

  const file = join(tempDir, `${packageJSON.name}-${Date.now()}`);

  spinner.succeed(`Successfully prepared the environment \n`);

  return { dir: tempDir, file };
};

const clearTempDir = async () => {
  cleanupSync();
};

export { createTempDir, clearTempDir };

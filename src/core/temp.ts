import { existsSync, mkdirSync, mkdtempSync, rmSync } from 'fs';
import ora from 'ora';
import { tmpdir } from 'os';
import { join } from 'path';
import packageJSON from '../../package.json';

const createTempEnv = async () => {
  const spinner = ora('Preparing the temp environment').start();

  const tempDir = mkdtempSync(join(tmpdir(), packageJSON.name));

  const tempFile = join(tempDir, 'source.tar.gz');

  const tempAppDir = join(tempDir, 'app');
  mkdirSync(tempAppDir);

  spinner.succeed('Successfully prepared the temp environment');

  return {
    tempAppDir,
    tempDir,
    tempFile,
  };
};

const cleanTempEnv = (tempDir: string) => {
  const spinner = ora('Cleaning up temp environment (づ ᴗ _ᴗ)づ  ๋࣭ ⭑🗑๋࣭ ⭑').start();
  try {
    if (existsSync(tempDir)) rmSync(tempDir, { recursive: true });

    spinner.succeed('successfully cleared temp environment');
  } catch (error) {
    spinner.fail('Failed to clear temp environment (╥﹏╥)');
  }
};

export { createTempEnv, cleanTempEnv };

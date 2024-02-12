import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync } from 'fs';
import { join } from 'path';
import { printError } from '../ui/shared';

const createDir = async (dir: string) => {
  if (existsSync(dir)) return printError('directory exists, please choose another name');

  mkdirSync(dir);
};

const clearDir = async (dir: string) => {
  if (!existsSync(dir)) return;

  rmSync(dir, { recursive: true, force: true });
};

const syncTempDirToProjectDir = (tempDir: string, projectDir: string) => {
  createDir(projectDir);

  const copyRecursiveSync = (src: string, dest: string) => {
    const entries = readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = join(src, entry.name);
      const destPath = join(dest, entry.name);

      if (entry.isDirectory()) {
        mkdirSync(destPath, { recursive: true });
        copyRecursiveSync(srcPath, destPath);
      } else {
        copyFileSync(srcPath, destPath);
      }
    }
  };

  try {
    copyRecursiveSync(tempDir, projectDir);
  } catch (error) {
    clearDir(projectDir);
  }
};

export { createDir, clearDir, syncTempDirToProjectDir };

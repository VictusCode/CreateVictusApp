import { ProjectConfig } from '../shared';
import { syncTempDirToProjectDir } from './dir';
import { cloneFromRemoteRepositoryToTemp } from './git';
import { cleanTempEnv, createTempEnv } from './temp';
import { setupBaseTemplate } from './templates';

const createApp = async (dir: string, config: ProjectConfig) => {
  const { tempDir, tempFile, tempAppDir } = await createTempEnv();

  const templatesDir = await cloneFromRemoteRepositoryToTemp({ tempDir, tempFile });

  if (!templatesDir) return;

  setupBaseTemplate({
    templatesDir,
    tempAppDir,
    config,
  });

  // todo: installation of additional packages

  syncTempDirToProjectDir(tempAppDir, dir);
  cleanTempEnv(tempDir);
};

export { createApp };

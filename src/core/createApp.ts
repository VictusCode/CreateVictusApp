import { ProjectConfigType } from '@app/configs';
import { cloneFromRemoteRepositoryToTemp } from './cloneRepository';
import { syncTempDirToProjectDir } from './dir';
import { cleanTempEnv, createTempEnv } from './temp';
import { setupBaseTemplate } from './templates';

const createApp = async (dir: string, config: ProjectConfigType) => {
  const { tempDir, tempFile, tempAppDir } = await createTempEnv();

  const templatesDir = await cloneFromRemoteRepositoryToTemp({ tempDir, tempFile });

  if (!templatesDir) return;

  setupBaseTemplate({
    templatesDir,
    tempAppDir,
    config,
  });

  // TODO: installation of additional packages

  syncTempDirToProjectDir(tempAppDir, dir);
  cleanTempEnv(tempDir);
};

export { createApp };

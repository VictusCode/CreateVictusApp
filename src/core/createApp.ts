import { ProjectConfigType } from '@app/configs';
import { cloneFromRemoteRepositoryToTemp } from './cloneRepository';
import { syncTempDirToProjectDir } from './dir';
import { cleanTempEnv, createTempEnv } from './temp';
import { setupTemplate } from './templates';

type ReturnType = {
  isError: boolean;
};

const createApp = async (dir: string, config: ProjectConfigType): Promise<ReturnType> => {
  const { tempDir, tempFile, tempAppDir } = await createTempEnv();

  const templatesDir = await cloneFromRemoteRepositoryToTemp({ tempDir, tempFile });

  if (!templatesDir)
    return {
      isError: true,
    };

  const { isError } = setupTemplate({
    templatesDir,
    tempAppDir,
    config,
  });

  if (isError)
    return {
      isError: true,
    };

  syncTempDirToProjectDir(tempAppDir, dir);

  cleanTempEnv(tempDir);

  return { isError: false };
};

export { createApp };

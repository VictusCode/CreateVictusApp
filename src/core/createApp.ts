import { ProjectConfig } from '../shared';
import { syncTempDirToProjectDir } from './dir';
import { cloneFromRemoteRepositoryToTemp } from './git';
import { createTempDir } from './temp';

const createApp = async (dir: string, config: ProjectConfig) => {
  const { name: temp } = await createTempDir(dir);

  // based project
  const clonedRepo = await cloneFromRemoteRepositoryToTemp({
    config,
    temp,
  });

  if (!clonedRepo) return;

  // todo: installation of additional packages

  syncTempDirToProjectDir(temp, dir);
};

export { createApp };

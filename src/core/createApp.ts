import { ProjectConfig } from '../shared';
import { cloneFromRemoteRepository } from './git';
import { createTempDir } from './temp';

const createApp = async (dir: string, config: ProjectConfig) => {
  const temp = await createTempDir(dir);
  if (!temp) return;

  const clonedRepo = await cloneFromRemoteRepository({
    config,
    temp,
  });

  if (!clonedRepo) return;
};

export { createApp };

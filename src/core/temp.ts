import ora from 'ora';
import tmp from 'tmp';

const createTempDir = async (dir: string): Promise<tmp.DirResult> => {
  const spinner = ora(`Preparing the environment \n`).start();

  const tempDir = tmp.dirSync({ dir, prefix: '.' });

  spinner.succeed(`Successfully prepared the temp environment \n`);

  return tempDir;
};

const clearTempDir = async () => {
  tmp.setGracefulCleanup();
};

export { createTempDir, clearTempDir };

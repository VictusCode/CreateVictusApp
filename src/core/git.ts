import axios from 'axios';
import { createWriteStream } from 'fs';
import ora from 'ora';
import { join } from 'path';
import tar from 'tar';
import { gitTarUrl } from './config';

type Props = {
  tempFile: string;
  tempDir: string;
};

const cloneFromRemoteRepositoryToTemp = async ({ tempFile, tempDir }: Props) => {
  const spinner = ora('Cloning remote repo (づ ᴗ _ᴗ)づ ✩₊˚.⋆☾⋆⁺').start();

  try {
    const response = await axios.get(gitTarUrl, { responseType: 'stream' });
    const writer = createWriteStream(tempFile);
    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    await tar.extract({
      file: tempFile,
      cwd: tempDir,
      strip: 0,
      filter: (path) => path.startsWith('CreateVictusApp-main/templates'),
    });

    const templatesDir = join(tempDir, 'CreateVictusApp-main', 'templates');

    spinner.succeed('Successfully cloned repo');

    return templatesDir;
  } catch (error) {
    spinner.fail('Failed to clone repo (╥﹏╥)');

    return null;
  }
};

export { cloneFromRemoteRepositoryToTemp };

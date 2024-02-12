import axios from 'axios';
import { createWriteStream } from 'fs';
import got from 'got';
import ora from 'ora';
import { tmpdir } from 'os';
import { join } from 'path';
import { Stream } from 'stream';
import tar from 'tar';
import tmp from 'tmp';
import { promisify } from 'util';
import { ProjectConfig } from '../shared';
import { gitTarUrl } from './config';
import { clearTempDir } from './temp';

type Props = {
  config: ProjectConfig;
  temp: tmp.DirResult;
};

const cloneFromRemoteRepositoryToTemp = async ({ temp }: Props) => {
  const spinner = ora(`Cloning remote repo (づ ᴗ _ᴗ)づ ✩₊˚.⋆☾⋆⁺ \n`).start();

  try {
    const tempFilePath = join(tmpdir(), 'template.tar.gz');

    const response = await axios({
      method: 'get',
      url: gitTarUrl,
      responseType: 'stream',
    });

    const writer = createWriteStream(tempFilePath);

    response.data.pipe(writer);

    await new Promise<void>((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    await tar.extract({
      file: tempFilePath,
      cwd: process.cwd(),
      strip: 4,
      filter: (path) => path.startsWith('CreateVictusApp-main/templates/react/base'),
    });

    require('fs').unlinkSync(tempFilePath);

    console.log('Template extracted successfully.');
  } catch (error) {
    spinner.fail(`Failed to clone repo (╥﹏╥) \n `);
    clearTempDir();
    return null;
  }

  spinner.succeed(`Successfully cloned repo\n`);

  return temp;
};

export { cloneFromRemoteRepositoryToTemp };

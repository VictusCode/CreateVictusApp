import got from 'got';
import ora from 'ora';
import { Stream } from 'stream';
import tar from 'tar';
import { createWriteStream } from 'temp';
import { promisify } from 'util';
import { clearDir } from '.';
import { ProjectConfig, ProjectConfigPathType } from '../shared';
import { gitTarUrl } from './config';
import { clearTempDir } from './temp';

const pipeline = promisify(Stream.pipeline);

type Props = {
  config: ProjectConfig;
  temp: {
    dir: string;
    file: string;
  };
};
const cloneFromRemoteRepository = async ({ temp }: Props) => {
  const spinner = ora(`Cloning remote repo (づ ᴗ _ᴗ)づ ✩₊˚.⋆☾⋆⁺ \n`).start();

  try {
    await pipeline(got.stream(gitTarUrl), createWriteStream(temp.file));

    await tar.x({
      file: temp.file,
      cwd: temp.dir,
      strip: 1,
    });
  } catch (error) {
    // spinner.fail(`Failed to clone repo (╥﹏╥) \n `);
    clearTempDir();
    console.log(error);
  }

  // spinner.succeed(`Successfully cloned repo\n`);

  return temp;
};

export { cloneFromRemoteRepository };

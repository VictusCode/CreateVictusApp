import { ProjectConfigType } from '@app/configs';
import ora from 'ora';
import { join } from 'path';
import { copyDirRecursiveSync } from './dir';

type Props = {
  tempAppDir: string;
  templatesDir: string;
  config: ProjectConfigType;
};

type ReturnType = {
  isError: boolean;
};

const setupTemplate = ({ tempAppDir, templatesDir, config }: Props): ReturnType => {
  const spinner = ora('Copying the template (づ ᴗ _ᴗ)づ  ✩₊˚🛠✩').start();

  try {
    const baseTemplatePath = join(templatesDir, ...config.path);

    copyDirRecursiveSync(baseTemplatePath, tempAppDir);

    spinner.succeed('Template successfully copied');
  } catch (error) {
    spinner.fail('Failed to copy template (╥﹏╥)');
    return { isError: true };
  }

  return { isError: false };
};

export { setupTemplate };

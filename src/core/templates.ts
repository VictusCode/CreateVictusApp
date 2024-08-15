import { ProjectConfigType } from '@app/configs';
import ora from 'ora';
import { join } from 'path';
import { copyDirRecursiveSync } from './dir';

type Props = {
  tempAppDir: string;
  templatesDir: string;
  config: ProjectConfigType;
};

const setupBaseTemplate = ({ tempAppDir, templatesDir, config }: Props) => {
  const spinner = ora('Copying the base template (づ ᴗ _ᴗ)づ  ✩₊˚🛠✩').start();

  try {
    const baseTemplatePath = join(templatesDir, ...config.path);

    copyDirRecursiveSync(baseTemplatePath, tempAppDir);

    spinner.succeed('Template successfully copied');
  } catch (error) {
    spinner.fail('Failed to copy base template (╥﹏╥)');
  }
};

export { setupBaseTemplate };

import { prompt } from 'enquirer';
import { printError } from '../../shared';
import { ProjectConfig, ProjectConfigs, reactConfigs } from '../configs';
import { ProjectConfigTypeEnum } from '../configs/type';
import { ProjectTypeEnum } from '../type';

const configureProjectPrompt = async (projectType: ProjectTypeEnum): Promise<ProjectConfig | null> => {
  let configs: ProjectConfigs | null = null;
  if (projectType === ProjectTypeEnum.react) configs = reactConfigs;

  if (!configs) {
    printError('project type not found');
    return null;
  }

  const response = (await prompt({
    type: 'select',
    name: 'projectConfig',
    message: 'Choose a project template',
    choices: Object.values(configs).map(({ type: name, title: message, description: hint }) => ({
      type: 'select',
      name,
      message,
      hint,
    })),
  })) as {
    projectConfig: keyof ProjectConfigTypeEnum;
  };

  return configs[ProjectConfigTypeEnum[response.projectConfig]];
};

export { configureProjectPrompt };

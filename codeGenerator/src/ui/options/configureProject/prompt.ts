import { ProjectConfigsType, ProjectConfigType, ProjectConfigTypeEnum, templateConfigs } from '@app/configs';
import { ReactProjectConfigTypeEnum } from '@app/configs/templates/enums/reactProject';
import { prompt } from 'enquirer';
import { printError } from '../../print';

type ResponseType = {
  projectConfig: ReactProjectConfigTypeEnum;
};

const configureProjectPrompt = async (
  projectType: ProjectConfigTypeEnum,
): Promise<ProjectConfigType | null> => {
  const configs: ProjectConfigsType = templateConfigs[projectType];

  if (!configs) {
    printError(`Project type "${projectType}" not found`);

    return null;
  }

  const response: ResponseType = await prompt({
    type: 'select',
    name: 'projectConfig',
    message: 'Choose a project configuration',
    choices: Object.values(configs).map(({ type: name, title: message, description: hint }) => ({
      type: 'select',
      name,
      message,
      hint,
    })),
  });

  return configs[response.projectConfig];
};

export { configureProjectPrompt };

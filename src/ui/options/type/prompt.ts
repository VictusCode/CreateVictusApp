import { prompt } from 'enquirer';
import { projectsTypes } from './constants';
import { ProjectTypeConfig, ProjectTypeEnum } from './types';

const promptProjectType = async (): Promise<ProjectTypeConfig> => {
  const response = (await prompt({
    type: 'select',
    name: 'projectType',
    message: 'Choose a project template',
    choices: Object.values(projectsTypes).map(({ type: name, title: message, description: hint }) => ({
      type: 'select',
      name,
      message,
      hint,
    })),
  })) as {
    projectType: keyof ProjectTypeEnum;
  };

  return projectsTypes[ProjectTypeEnum[response.projectType]];
};

export { promptProjectType };

import { ProjectConfigTypeEnum, PromptProjectConfigsItemType } from '@app/configs';
import { promptProjectConfigs } from '@app/configs/templates';
import { prompt } from 'enquirer';

type ResponseType = {
  projectType: ProjectConfigTypeEnum;
};

const promptProjectType = async (): Promise<PromptProjectConfigsItemType> => {
  const response: ResponseType = await prompt({
    type: 'select',
    name: 'projectType',
    message: 'Choose a project type',
    choices: Object.values(promptProjectConfigs).map(({ type: name, title: message, description: hint }) => ({
      type: 'select',
      name,
      message,
      hint,
    })),
  });

  return promptProjectConfigs[ProjectConfigTypeEnum[response.projectType]];
};

export { promptProjectType };

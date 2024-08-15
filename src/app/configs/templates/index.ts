import { ProjectConfigTypeEnum } from './enums/project';
import { reactProjectConfigs, reactPromptProjectConfig } from './react';
import { PromptProjectConfigsType, TemplateConfigsType } from './types/project';

const templateConfigs: TemplateConfigsType = Object.freeze({
  [ProjectConfigTypeEnum.react]: reactProjectConfigs,
});

const promptProjectConfigs: PromptProjectConfigsType = Object.freeze({
  [ProjectConfigTypeEnum.react]: reactPromptProjectConfig,
});

export { templateConfigs, TemplateConfigsType, promptProjectConfigs };

export {
  ProjectConfigType,
  ProjectConfigsType,
  ProjectConfigPathType,
  PromptProjectConfigsItemType,
} from './types/project';
export { ProjectConfigTypeEnum } from './enums/project';

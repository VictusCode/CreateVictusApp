import { ProjectConfigTypeEnum } from '../enums/project';
import { ReactProjectConfigTypeEnum } from '../enums/reactProject';

type ProjectConfigPathType = string[];

type ProjectConfigType = {
  title: string;
  description: string;
  type: ReactProjectConfigTypeEnum; // ? add more enums here
  path: ProjectConfigPathType;
  successMessageFactory: (projectPath: string) => string;
};

type ProjectConfigsType = Record<ProjectConfigType['type'], ProjectConfigType>;

type TemplateConfigsType = Record<ProjectConfigTypeEnum, ProjectConfigsType>;

type PromptProjectConfigsItemType = {
  title: string;
  description: string;
  type: ProjectConfigTypeEnum;
};

type PromptProjectConfigsType = Record<ProjectConfigTypeEnum, PromptProjectConfigsItemType>;

export {
  ProjectConfigPathType,
  ProjectConfigsType,
  ProjectConfigType,
  PromptProjectConfigsItemType,
  PromptProjectConfigsType,
  TemplateConfigsType,
};

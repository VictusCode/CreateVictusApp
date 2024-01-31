enum ProjectConfigTypeEnum {
  'basic' = 'basic',
}

type ProjectConfigPathType = string[];

type ProjectConfig = {
  title: string;
  description: string;
  type: ProjectConfigTypeEnum;
  path: ProjectConfigPathType;
};

type ProjectConfigs = Record<ProjectConfigTypeEnum, ProjectConfig>;

export { ProjectConfig, ProjectConfigs, ProjectConfigTypeEnum, ProjectConfigPathType };

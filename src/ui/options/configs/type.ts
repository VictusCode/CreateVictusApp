enum ProjectConfigTypeEnum {
  'basic' = 'basic',
}

type ProjectConfig = {
  title: string;
  description: string;
  type: ProjectConfigTypeEnum;
  url: string;
};

type ProjectConfigs = Record<ProjectConfigTypeEnum, ProjectConfig>;

export { ProjectConfig, ProjectConfigs, ProjectConfigTypeEnum };

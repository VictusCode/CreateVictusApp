enum ProjectTypeEnum {
  'react' = 'react',
} // todo add nest, solid, next, remix

type ProjectTypeConfig = {
  title: string;
  description: string;
  type: ProjectTypeEnum;
};

type ProjectTypes = Record<ProjectTypeEnum, ProjectTypeConfig>;

export { ProjectTypeEnum, ProjectTypeConfig, ProjectTypes };

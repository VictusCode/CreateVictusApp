import { ProjectTypeEnum, ProjectTypes } from './types';

const projectsTypes: ProjectTypes = {
  [ProjectTypeEnum.react]: {
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    type: ProjectTypeEnum.react,
  },
};

export { projectsTypes };

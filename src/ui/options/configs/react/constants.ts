import { ProjectConfigs, ProjectConfigTypeEnum } from '../../../../shared';

const reactConfigs: ProjectConfigs = {
  [ProjectConfigTypeEnum.basic]: {
    title: 'Basic',
    description:
      'Classic VictusCode React app: TypeScript, Vite, Vitest, React Query, React Router, Recoil, Styled Components, I18next and more.',
    type: ProjectConfigTypeEnum.basic,
    path: ['react', 'base'],
  },
  // add custom configurator
};

export { reactConfigs };

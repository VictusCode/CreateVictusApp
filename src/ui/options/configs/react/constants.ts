import { ProjectConfigs, ProjectConfigTypeEnum } from '../../../../shared';

const reactConfigs: ProjectConfigs = {
  [ProjectConfigTypeEnum.standard]: {
    title: 'Standard',
    description:
      'Standard VictusCode React app: TypeScript, Vite, Vitest, React Query, React Router, Recoil, Styled Components, I18next and more.',
    type: ProjectConfigTypeEnum.standard,
    path: ['react', 'standard'],
  },
  // add more configs here
};

export { reactConfigs };

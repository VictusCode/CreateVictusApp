import { ProjectConfigs, ProjectConfigTypeEnum } from '../type';

const reactConfigs: ProjectConfigs = {
  [ProjectConfigTypeEnum.basic]: {
    title: 'Basic',
    description:
      'Classic VictusCode React app: TypeScript, Vite, Vitest, React Query, React Router, Recoil, Styled Components, I18next and more.',
    type: ProjectConfigTypeEnum.basic,
    url: 'https://github.com/VictusCode/CreateVictusApp/tree/main/templates/react/base',
  },
  // add custom configurator
};

export { reactConfigs };

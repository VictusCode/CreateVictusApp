import { blue, italic } from 'colorette';
import { ProjectConfigTypeEnum } from './enums/project';
import { ReactProjectConfigTypeEnum } from './enums/reactProject';
import { ProjectConfigsType, PromptProjectConfigsItemType } from './types/project';

const reactProjectConfigs: ProjectConfigsType = Object.freeze({
  [ReactProjectConfigTypeEnum.spa]: {
    title: 'SPA',
    description:
      'TypeScript, Vite, Vitest, TanStack Query, TanStack Router, Jotai, Styled Components, I18next and more',
    type: ReactProjectConfigTypeEnum.spa,
    successMessageFactory: (projectPath: string) =>
      `Run ${italic(
        blue(`cd ${projectPath} && npm install && npm run dev`),
      )} to start the development server`,
    path: ['react', 'spa'],
  },
  // ? add more configs here
});

const reactPromptProjectConfig: PromptProjectConfigsItemType = Object.freeze({
  title: 'React',
  description: 'React is a JavaScript library for building user interfaces',
  type: ProjectConfigTypeEnum.react,
});

export { reactProjectConfigs, reactPromptProjectConfig };

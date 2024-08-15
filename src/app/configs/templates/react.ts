import { blue, italic } from 'colorette';
import { ProjectConfigTypeEnum } from './enums/project';
import { ReactProjectConfigTypeEnum } from './enums/reactProject';
import { ProjectConfigsType, PromptProjectConfigsItemType } from './types/project';

const reactProjectConfigs: ProjectConfigsType = Object.freeze({
  [ReactProjectConfigTypeEnum.standard]: {
    title: 'Standard',
    description:
      'Standard VictusCode React app: TypeScript, Vite, Vitest, React Query, React Router, Recoil, Styled Components, I18next and more',
    type: ReactProjectConfigTypeEnum.standard,
    successMessageFactory: (projectPath: string) =>
      `Run ${italic(
        blue(`cd ${projectPath} && npm install && npm run dev`),
      )} to start the development server`,
    path: ['react', 'standard'],
  },
  // ? add more configs here
});

const reactPromptProjectConfig: PromptProjectConfigsItemType = Object.freeze({
  title: 'React',
  description: 'React is a JavaScript library for building user interfaces',
  type: ProjectConfigTypeEnum.react,
});

export { reactProjectConfigs, reactPromptProjectConfig };

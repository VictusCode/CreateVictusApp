import { prompt } from 'enquirer';

const promptProjectDir = async (): Promise<string> => {
  const response = (await prompt({
    name: 'projectDir',
    type: 'input',
    message: 'What is the name of your project?',
    initial: 'VictusCodeApp',
  })) as {
    projectType: string;
  };

  return response.projectType;
};

export { promptProjectDir };

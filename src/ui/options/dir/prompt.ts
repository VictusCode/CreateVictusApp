import { prompt } from 'enquirer';

type ResponseType = {
  projectType: string;
};

const promptProjectDir = async (): Promise<string> => {
  const response: ResponseType = await prompt({
    name: 'projectDir',
    type: 'input',
    message: 'What is the name of your project?',
    initial: 'VictusCodeApp',
  });

  return response.projectType;
};

export { promptProjectDir };

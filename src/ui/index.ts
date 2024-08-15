import chalk from 'chalk';
import { Command } from 'commander';
import packageJSON from '../../package.json';
import { createApp, validDir } from '../core';
import { printIntro } from './intro';
import { configureProjectPrompt } from './options';
import { promptProjectType } from './options/type';
import { printOutro } from './outro';

const program = new Command();

const app = async () => {
  printIntro();

  program
    .name(packageJSON.name)
    .version(packageJSON.version)
    .description('A CLI for creating web apps with the VictusCode stack')
    .option('<directory>', 'The name of the directory to create', packageJSON.name)
    .usage(`${chalk.green('<directory>')} [options]`)
    .parse(process.argv);

  const projectDir = program.args[0]?.trim().replace(/\s/g, '-').toLowerCase() ?? packageJSON.name;

  if (!validDir(projectDir)) return;

  const { type: projectType } = await promptProjectType(); // ? "react" for example

  const projectConfig = await configureProjectPrompt(projectType); // ? "standard" for example

  if (!projectConfig) return;

  await createApp(projectDir, projectConfig);

  printOutro(projectConfig.successMessageFactory(projectDir));
};

export { app };

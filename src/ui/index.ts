import chalk from 'chalk';
import { Command } from 'commander';
import packageJSON from '../../package.json';
import { createApp, validDir } from '../core';
import { configureProjectPrompt, promptProjectType } from './options';
import { welcomeStage } from './welcome';

const program = new Command();

const app = async () => {
  welcomeStage();

  program
    .name(packageJSON.name)
    .version(packageJSON.version)
    .description('A CLI for creating web apps with the VictusCode stack')
    .argument('<directory>', 'The name of the directory to create')
    .usage(`${chalk.green('<directory>')} [options]`)
    .parse(process.argv);

  const userProjectDir = program.args[0]?.trim().replace(/\s/g, '-').toLowerCase();

  const projectDir = userProjectDir || packageJSON.name;

  if (!validDir(projectDir)) return;

  const { type: projectType } = await promptProjectType();

  const projectConfig = await configureProjectPrompt(projectType);

  if (!projectConfig) return;

  createApp(projectDir, projectConfig);
};

export { app };

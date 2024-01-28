import { Command } from 'commander';
import { welcomeStage } from './welcome';

const program = new Command();

const app = () => {
  welcomeStage();

  program
    .description('A CLI for creating web apps with the VictusCode stack')
    .argument('[dir]', 'The name of the name of the directory to create');

  program.parse();
};

export { app };

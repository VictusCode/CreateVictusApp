import { logger } from './logger';

const printSuccess = (value: string) => logger.succeed(`${value} \n `);

export { printSuccess };

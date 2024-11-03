import { logger } from './logger';

const printError = (error: string) => logger.fail(`${error} \n `);

export { printError };

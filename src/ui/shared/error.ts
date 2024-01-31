import ora from 'ora';

const printError = (error: string) => ora().fail(`${error} \n `);

export { printError };

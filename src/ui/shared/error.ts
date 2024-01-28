const errorColor = '\x1b[31m';

const printError = (error: string) => console.error(errorColor, error);

export { printError };

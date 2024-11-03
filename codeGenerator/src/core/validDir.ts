import { blue, italic } from 'colorette';
import { existsSync } from 'fs';
import { printError, printInfo } from '../ui/print';

const printExample = () => printInfo(`Run ${italic(blue('npx victus-app YOUR_DIR_NAME'))}`);

const validDir = (dir: string) => {
  if (!dir) {
    printError('Please provide a valid directory name');
    printExample();

    return false;
  }

  if (existsSync(dir)) {
    printError(`Directory ${italic(blue(`"${dir}"`))} exists, please choose another name`);
    printExample();

    return false;
  }

  return true;
};

export { validDir };

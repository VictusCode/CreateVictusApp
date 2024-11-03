import { magenta, yellow } from 'colorette';
import figlet from 'figlet';

const mergeIntro = (left: string, right: string) => {
  const leftLines = left.split('\n');
  const rightLines = right.split('\n');
  const maxHeight = Math.max(leftLines.length, rightLines.length);
  let result = '';

  for (let i = 0; i < maxHeight; i++) {
    const leftLine = leftLines[i] ?? '';
    const rightLine = rightLines[i] ?? '';
    result += magenta(leftLine) + yellow(rightLine + '\n');
  }

  return result.trim();
};

const intro = mergeIntro(figlet.textSync('Victus', 'Stop'), figlet.textSync('Code', 'Stop'));

const printIntro = () => console.log(intro);

export { printIntro };

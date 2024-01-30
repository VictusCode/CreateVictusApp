import ora from 'ora';
import git from 'simple-git';

const downloadFromURL = async (url: string, dir: string) => {
  // const  url = "https://github.com/VictusCode/CreateVictusApp/tree/main/template/frontend/base"
  // const dir = "TEST_FOLDER"

  const spinner = ora(`Casting spells (づ ᴗ _ᴗ)づ ✩₊˚.⋆☾⋆⁺ in: ${dir}...\n`).start();

  try {
    await git().clone(url, dir, ['--depth=1']);
  } catch (error) {
    spinner.fail(`Failed to cast spells (╥﹏╥) \n `);
  }
};

export { downloadFromURL };

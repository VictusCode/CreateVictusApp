import path from 'path';

const resolvePath = (...paths: string[]) => path.resolve(__dirname, '..', '..', 'src', ...paths);

export { resolvePath };

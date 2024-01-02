import path from 'path';

const resolveRoot = (...segments: string[]) => path.resolve(__dirname, '..', '..', '..', '..', ...segments);

export { resolveRoot };

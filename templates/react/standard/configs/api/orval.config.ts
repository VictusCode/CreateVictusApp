import { resolvePath } from '../shared/helpers';

const config = {
  main: {
    input: resolvePath('src', 'shared', 'api', 'schema.yaml'),
    output: {
      target: resolvePath('src', 'shared', 'api', 'generated', 'endpoints.ts'),
      prettier: true,
      client: 'react-query',
      mode: 'split',
      override: {
        mutator: {
          path: resolvePath('src', 'shared', 'api', 'axios.ts'),
          name: 'createInstance',
        },
      },
    },
  },
};

export default config;

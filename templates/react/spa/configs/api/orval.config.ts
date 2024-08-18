import { resolvePath } from '../shared/helpers';

const config = {
  main: {
    input: resolvePath('src', 'app', 'api', 'schema.yaml'),
    output: {
      target: resolvePath('src', 'app', 'api', 'generated', 'endpoints.ts'),
      prettier: true,
      client: 'react-query',
      mode: 'split',
      override: {
        mutator: {
          path: resolvePath('src', 'app', 'api', 'axios.ts'),
          name: 'createInstance',
        },
      },
    },
  },
};

export default config;

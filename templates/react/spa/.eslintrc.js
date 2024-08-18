// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/no-deprecated': 'off',
    'i18next/no-literal-string': [
      'error',
      { markupOnly: true, ignoreAttribute: ['data-testid', 'to', 'src'] },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-param-reassign': 'off',
    'no-unused-variable': 'error',
    'no-unused-vars': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        custom: {
          regex: '^(T|P|Props|[A-Z][a-zA-Z0-9]*(Props|Type))$',
          match: true,
        },
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        custom: {
          regex: '^[A-Z][a-zA-Z0-9]*Enum$',
          match: true,
        },
      },
      {
        selector: 'enumMember',
        format: ['camelCase'],
      },
    ],
  },
  overrides: [
    {
      files: ['./generated/*.ts', './generated/*.tsx', 'routeTree.gen.ts'],
      rules: {
        '@typescript-eslint/naming-convention': ['off'],
      },
    },
  ],
  ignorePatterns: ['../**/*', 'node_modules/', 'dist/', 'build/', 'public/'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    IS_DEV: true,
    vi: true,
    vitest: true,
  },
};

module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'react/no-deprecated': 'off',
    'no-param-reassign': 'off',
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
  ignorePatterns: ['dist', 'node_modules'],
};

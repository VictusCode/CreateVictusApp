// https://jestjs.io/docs/configuration

import type { Config } from 'jest';

const config: Config = {
  maxWorkers: '50%',
  clearMocks: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
  rootDir: '../../',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  modulePaths: ['<rootDir>src/'],
  setupFilesAfterEnv: ['<rootDir>configs/tests/setupTest.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>configs/test/utils/EmptyComponent.tsx',
    '^@app/(.*)$': '<rootDir>src/app/$1',
    '^@entities/(.*)$': '<rootDir>src/entities/$1',
    '^@features/(.*)$': '<rootDir>src/features/$1',
    '^@pages/(.*)$': '<rootDir>src/pages/$1',
    '^@shared/(.*)$': '<rootDir>src/shared/$1',
    '^@widgets/(.*)$': '<rootDir>src/widgets/$1',
    '^@ui/(.*)$': '<rootDir>src/ui/$1',
  },
  globals: {
    IS_DEV: true,
  },
};

export default config;

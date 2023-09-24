import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './' });

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
  globals: {
    tsconfig: 'tsconfig.jest.json',
  },
};

export default createJestConfig(customJestConfig);

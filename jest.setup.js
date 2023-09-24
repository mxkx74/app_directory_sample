import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import { server } from './src/mock';

jest.mock('next/router', () => require('next-router-mock'));

beforeAll(() => {
  server.listen();
  global.IS_REACT_ACT_ENVIRONMENT = false;
});

afterEach(() => {
  jest.clearAllMocks();
  server.resetHandlers();
  cleanup();
});

afterAll(() => {
  server.close();
});

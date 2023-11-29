import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
// TODO: mswのapp router対応待ち
// import { server } from './src/mock';

beforeAll(() => {
  // server.listen();
  global.IS_REACT_ACT_ENVIRONMENT = false;
});

afterEach(() => {
  jest.clearAllMocks();
  // server.resetHandlers();
  cleanup();
});

afterAll(() => {
  // server.close();
});

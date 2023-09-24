import { setupWorker } from 'msw';
import { setupServer } from 'msw/node';
import * as Handlers from '@/mock/handlers';

const initMock = async () => {
  if (process.env.NODE_ENV === 'development') {
    if (typeof window === 'undefined') {
      const server = setupServer(...Handlers.handlers);
      server.listen({
        onUnhandledRequest: 'bypass',
      });
    } else {
      const worker = setupWorker(...Handlers.handlers);
      await worker.start({
        onUnhandledRequest: 'bypass',
      });
    }
  }
};

await initMock();

export const server = setupServer(...Handlers.handlers);

export const handlers = Handlers.handlers;

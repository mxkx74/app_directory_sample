import { type ReactNode } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Inter } from 'next/font/google';
import { NextAuthProvider } from '@/provider/NextAuthProvider';
import { QueryClientProvider } from '@/provider/QueryClientProvider';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={`dark ${inter.className}`}>
        <QueryClientProvider>
          <NextAuthProvider>{children}</NextAuthProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
};

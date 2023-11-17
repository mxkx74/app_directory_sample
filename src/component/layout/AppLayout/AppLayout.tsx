import { type ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

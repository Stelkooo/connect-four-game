import './globals.css';
import { Space_Grotesk } from 'next/font/google';

import Providers from '@/store/provider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata = {
  title: 'Connect Four',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={spaceGrotesk.className}>{children}</body>
      </html>
    </Providers>
  );
}

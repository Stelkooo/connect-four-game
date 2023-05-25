import './globals.css';
import { Space_Grotesk } from 'next/font/google';

import { store } from '@/store/store';
import { Provider } from 'react-redux';

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
    <Provider store={store}>
      <html lang="en">
        <body className={spaceGrotesk.className}>{children}</body>
      </html>
    </Provider>
  );
}

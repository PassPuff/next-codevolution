import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Default title from RootLayout.tsx',
    template: '%s | WHAT IS IT',
  },
  description: 'the best site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: 'lightblue',
            padding: '2rem',
          }}
        >
          <Header />
        </header>
        {children}
        <footer
          style={{
            backgroundColor: 'lightgoldenrodyellow',
            padding: '1rem',
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Sora, Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from 'sonner';

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const satoshiFont = localFont({
  variable: '--font-satoshi',
  src: [
    {
      path: '../../public/fonts/Satoshi-Light.otf',
      style: '300',
    },
    {
      path: '../../public/fonts/Satoshi-Regular.otf',
      style: '400',
    },
    {
      path: '../../public/fonts/Satoshi-Medium.otf',
      style: '500',
    },
    {
      path: '../../public/fonts/Satoshi-Bold.otf',
      style: '700',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nexa',
  description: 'Base Marketplace',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${sora.className} ${inter.variable} ${satoshiFont.variable} antialiased`}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#1a1a2e',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            },
            className: 'sonner-toast',
          }}
          richColors
        />
        {children}
      </body>
    </html>
  );
}

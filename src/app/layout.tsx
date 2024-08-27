import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { ScrollArea } from '@/components/ui/scroll-area';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Fin Tech App',
  description: 'Finance control app for managing day-to-day expenses',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <div className="flex flex-col justify-between w-full h-full min-h-screen">
          <Header />
          <ScrollArea className="flex-auto w-full max-w-3xl px-4 py-4 sm:px-6 md:py-6">
            <main>{children}</main>
          </ScrollArea>
          <Footer />
        </div>
      </body>
    </html>
  );
}

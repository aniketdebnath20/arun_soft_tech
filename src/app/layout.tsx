
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { AnimatedBackground } from '@/components/ui/animated-background';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'ZenithTech - Innovative Technology & Software Solutions',
  description: 'ZenithTech pioneers the future of technology with expert Web & Mobile Development, UI/UX Design, Cloud Solutions, and strategic Consulting.',
  keywords: ['web development', 'mobile app development', 'ui/ux design', 'cloud solutions', 'tech consulting'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-dvh flex-col">
            <AnimatedBackground />
            <Header />
            <div className="flex-1">
              <main className="relative z-10">{children}</main>
            </div>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

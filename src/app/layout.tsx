
'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { Suspense, useState, useEffect } from 'react';
import { NavigationEvents } from '@/components/navigation-events';
import { PageLoader } from '@/components/page-loader';
import IntroAnimation from '@/components/intro-animation';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    if (isClient) {
      // Phase 1: Keep animations paused and show intro
      document.body.classList.add('loading-active');
      
      // Phase 2: After 3s, trigger intro text wipe-out animation
      const introTimer = setTimeout(() => {
        setShowIntro(false);
      }, 2000);

      // Phase 3: After 4s, un-pause background animations
      const backgroundTimer = setTimeout(() => {
        document.body.classList.remove('loading-active');
      }, 4000);

      // Phase 4: After 5s (giving background 1s to animate), show content
      const contentTimer = setTimeout(() => {
        setContentVisible(true);
      }, 5000); 

      return () => {
        clearTimeout(introTimer);
        clearTimeout(backgroundTimer);
        clearTimeout(contentTimer);
      };
    }
  }, [isClient]);
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
          <title>ZenithTech - Innovative Technology & Software Solutions</title>
          <meta name="description" content="ZenithTech pioneers the future of technology with expert Web & Mobile Development, UI/UX Design, Cloud Solutions, and strategic Consulting." />
          <meta name="keywords" content="web development, mobile app development, ui/ux design, cloud solutions, tech consulting" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        {isClient && <IntroAnimation isVisible={showIntro} />}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-dvh flex-col">
            <Header />
            <div id="content-wrapper" className={cn("flex-1 transition-opacity duration-1000", contentVisible ? "opacity-100" : "opacity-0")}>
              <main className="relative z-10">{children}</main>
            </div>
            <Footer />
          </div>
          <Toaster />
          {isClient && (
            <Suspense>
              <NavigationEvents />
            </Suspense>
          )}
          {isClient && <PageLoader />}
        </ThemeProvider>
      </body>
    </html>
  );
}

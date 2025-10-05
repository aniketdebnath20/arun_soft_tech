
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../logo';
import { ServicesMenu } from './services-menu';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glassmorphism shadow-2xl' : 'bg-transparent'
      )}
      onMouseLeave={() => setIsServicesMenuOpen(false)}
    >
      <div className="container flex h-20 items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center justify-center flex-1">
          {navLinks.map(link =>
            link.label === 'Services' ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setIsServicesMenuOpen(true)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-muted-foreground transition-colors duration-300 hover:text-foreground flex items-center gap-1',
                    'after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:bg-primary after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100'
                  )}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform duration-300',
                      isServicesMenuOpen ? 'rotate-180' : ''
                    )}
                  />
                </Link>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-4 py-2 text-muted-foreground transition-colors duration-300 hover:text-foreground',
                  'after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:bg-primary after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100'
                )}
                onMouseEnter={() => setIsServicesMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
        <div className="flex items-center justify-end md:w-auto">
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                      >
                        <X className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                      >
                        <Menu className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[240px] sm:w-[300px] glassmorphism p-0"
              >
                <SheetHeader className="border-b p-4">
                  <SheetTitle className="sr-only">
                    Mobile Navigation Menu
                  </SheetTitle>
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <Logo />
                  </Link>
                </SheetHeader>
                <div className="flex flex-col h-full pt-6">
                  <nav className="flex flex-col space-y-4 px-4 text-lg">
                    {navLinks.map(link => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="transition-colors hover:text-primary px-2 py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isServicesMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0"
            onMouseEnter={() => setIsServicesMenuOpen(true)}
          >
            <ServicesMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

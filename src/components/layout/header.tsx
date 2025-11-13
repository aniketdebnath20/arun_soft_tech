
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  ChevronDown,
  Home,
  LayoutGrid,
  Info,
  Mail,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../logo';
import { ServicesMenu } from './services-menu';
import { servicesMenu } from '@/lib/data';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/services', label: 'Services', icon: LayoutGrid, collapsible: true },
  { href: '/about', label: 'About', icon: Info },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [openCollapsible, setOpenCollapsible] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCollapsibleToggle = (label: string) => {
    setOpenCollapsible(openCollapsible === label ? null : label);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glassmorphism shadow-2xl' : 'bg-transparent'
      )}
      onMouseLeave={() => setIsServicesMenuOpen(false)}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-2 pl-20">
          {navLinks.map(link =>
            link.collapsible ? (
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

        <div className="flex items-center">
          {/* Mobile Navigation Trigger */}
          <div className="flex items-center md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full p-6 md:hidden text-foreground hover:bg-muted/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200">
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 text-foreground" />
                  ) : (
                    <Menu className="w-5 h-5 text-foreground" />
                  )}
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-sm p-0 flex flex-col bg-background shadow-2xl"
              >
                <SheetHeader className="p-4 flex flex-row items-center justify-between border-b">
                   <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                   <SheetDescription className="sr-only">Main navigation menu for mobile devices.</SheetDescription>
                  <SheetClose asChild>
                    <Link href="/" className="w-full">
                      <Logo />
                    </Link>
                  </SheetClose>
                </SheetHeader>
                <div className="flex-grow overflow-y-auto">
                  <nav className="flex flex-col space-y-1 p-4 text-base font-medium">
                    {navLinks.map((link, index) =>
                      link.collapsible ? (
                        <Collapsible
                          key={`${link.href}-${index}`}
                          onOpenChange={() => handleCollapsibleToggle(link.label)}
                          open={openCollapsible === link.label}
                        >
                          <div className="flex items-center justify-between w-full rounded-md px-3 py-2 transition-colors hover:bg-muted/50">
                            <SheetClose asChild>
                              <Link
                                href={link.href}
                                className="flex items-center gap-3 text-foreground"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <link.icon className="w-5 h-5 text-muted-foreground" />
                                {link.label}
                              </Link>
                            </SheetClose>
                            <CollapsibleTrigger>
                              <ChevronDown
                                className={cn(
                                  'w-5 h-5 transition-transform duration-300',
                                  openCollapsible === link.label ? 'rotate-180' : ''
                                )}
                              />
                            </CollapsibleTrigger>
                          </div>
                          <CollapsibleContent>
                            <div className="pl-8 mt-1 space-y-1 border-l ml-5">
                              {servicesMenu.map(category =>
                                category.items.map((item, itemIndex) => (
                                  <SheetClose
                                    asChild
                                    key={`${item.href}-${itemIndex}`}
                                  >
                                    <Link
                                      href={item.href}
                                      className="block transition-colors text-muted-foreground hover:text-foreground rounded-md px-3 py-2"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {item.title}
                                    </Link>
                                  </SheetClose>
                                ))
                              )}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <SheetClose asChild key={`${link.href}-${index}`}>
                          <Link
                            href={link.href}
                            className="flex items-center gap-3 transition-colors text-foreground hover:bg-muted/50 rounded-md px-3 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <link.icon className="w-5 h-5 text-muted-foreground" />
                            {link.label}
                          </Link>
                        </SheetClose>
                      )
                    )}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Services Mega Menu */}
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

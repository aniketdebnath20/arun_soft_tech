
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Loader2,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import Logo from '@/components/logo';

const navigationLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Clients', href: '/#clients' },
  { name: 'Contact', href: '/contact' },
];
const services = [
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'Cloud & DevOps',
  'Security & Audits',
];
const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61582587444066', label: 'Facebool' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/arunsofttech/', label: 'Instagram' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubscribing(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setEmail('');
        toast({
          title: 'Successfully Subscribed!',
          description:
            'Thank you for subscribing to our newsletter. Check your email for confirmation.',
        });
      } else {
        throw new Error(result.message || 'Failed to subscribe');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: 'Subscription Failed',
        description:
          'There was an error subscribing to our newsletter. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="relative overflow-hidden z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 border-b border-border/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{}}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-gradient">Stay Updated</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on technology
              trends, project insights, and company news.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <div className="relative p-0.5 rounded-[4px] bg-gradient-to-r from-primary to-accent flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="bg-background border-none w-full rounded-[3px] focus-visible:ring-0 focus-visible:ring-offset-0"
                  disabled={isSubscribing}
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubscribing || !email.trim()}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white whitespace-nowrap disabled:opacity-50 rounded-[4px]"
              >
                {isSubscribing ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  'Subscribe'
                )}
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
        {/* <div className=""> */}
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">

              {/* Logo + About Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-6 flex flex-col items-start"
              >
                <Link href="/">
                  <div className="flex items-center space-x-2 group cursor-pointer">
                    <Logo />
                  </div>
                </Link>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base max-w-sm">
                  Building tomorrow&apos;s digital experiences with cutting-edge
                  technology and innovative solutions.
                </p>
                <div className="space-y-3 text-sm sm:text-base">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>arunsofttech8@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>+8779182671</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Mumbai</span>
                  </div>
                </div>
              </motion.div>

              {/* Middle Links Section */}
              <div className="col-span-1 md:col-span-2 lg:col-span-2 grid grid-cols-2 gap-8 sm:gap-12">

                {/* Quick Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h4 className="text-lg font-semibold text-foreground relative after:content-[''] after:block after:w-12 after:h-[2px] after:bg-primary after:mt-2">
                    Quick Links
                  </h4>
                  <nav className="space-y-3">
                    {navigationLinks.map(link => (
                      <Link key={link.name} href={link.href}>
                        <div className="text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer text-sm sm:text-base">
                          {link.name}
                        </div>
                      </Link>
                    ))}
                  </nav>
                </motion.div>

                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h4 className="text-lg font-semibold text-foreground relative after:content-[''] after:block after:w-12 after:h-[2px] after:bg-primary after:mt-2">
                    Services
                  </h4>
                  <nav className="space-y-3">
                    {services.map(service => (
                      <Link href="/services" key={service}>
                        <div className="text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer text-sm sm:text-base">
                          {service}
                        </div>
                      </Link>
                    ))}
                  </nav>
                </motion.div>
              </div>

              {/* Connect Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6 flex flex-col items-start"
              >
                <h4 className="text-lg font-semibold text-foreground relative after:content-[''] after:block after:w-12 after:h-[2px] after:bg-primary after:mt-2">
                  Connect
                </h4>

                {/* Social Icons */}
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-10 h-10 bg-background/50 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300 hover:scale-110 shadow-md"
                    >
                      <div className="absolute -inset-px rounded-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <Icon className="h-5 w-5" />
                      </div>
                    </Link>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4 text-left w-full">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    Ready to start your project?
                  </p>
                  <Button
                    size="sm"
                    asChild
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-[6px]"
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        {/* </div> */}


        <Separator className="opacity-30" />
        <div className="py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{}}
            className="text-sm text-muted-foreground text-center md:text-left"
          >
            © {new Date().getFullYear()} ArunSoftTech. All rights reserved. Built
            with passion for the future.
          </motion.div>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
            <Button
              size="sm"
              onClick={scrollToTop}
              className="rounded-full shadow-md text-primary-foreground bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
    </footer>
  );
}

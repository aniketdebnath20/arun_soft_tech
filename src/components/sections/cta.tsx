
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Cta() {

  const primaryEmail = "arunsofttech8@gmail.com";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(primaryEmail)}&su=${encodeURIComponent("New project inquiry")}&body=${encodeURIComponent("Hi, I'd like to discuss a project with you.")}`;

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative bg-muted/70 rounded-3xl p-10 md:p-16 overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-primary/20">
          <motion.div
            className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full"
            animate={{
              y: [0, -10, 0, 10, 0],
              x: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          ></motion.div>
          <motion.div
            className="absolute -bottom-12 -left-12 w-32 h-32 bg-accent/10 rounded-full"
            animate={{
              y: [0, 10, 0, -10, 0],
              x: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 2,
            }}
          ></motion.div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Power your business with software
              </h2>
              <p className="text-muted-foreground text-lg">
                Custom solutions to streamline your workflow.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button
                asChild
                size="lg"
                className="bg-lime-300 text-black hover:bg-lime-400 rounded-full text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link
                 href={gmailComposeUrl}
                  aria-label="Open Gmail compose window"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

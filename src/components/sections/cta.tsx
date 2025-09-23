
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Cta() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative bg-muted/70 rounded-3xl p-10 md:p-16 overflow-hidden">
          <motion.div
            className="absolute -top-10 -right-10 w-20 h-20 bg-foreground rounded-full"
            animate={{
              y: [0, -10, 0, 10, 0],
              x: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
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
                className="bg-lime-300 text-black hover:bg-lime-400 rounded-full text-lg px-8 py-6"
              >
                <Link href="/contact">
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

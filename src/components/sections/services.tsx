
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { Card } from '../ui/card';
import { TiltCard } from '../ui/tilt-card';

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter text-gradient"
          >
            Our Core Expertise
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            We deliver exceptional digital products by focusing on what we do best.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
             <TiltCard key={service.id} className="group">
                <div
                    className={cn(
                    'relative h-full w-full rounded-2xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]',
                    'hover:shadow-primary/20'
                    )}
                >
                    {/* Front of card */}
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                    <div
                        className={cn(
                        'h-full w-full rounded-2xl p-8 flex flex-col items-center justify-center text-center text-white bg-gradient-to-br',
                        service.gradient
                        )}
                    >
                        <service.icon className="w-16 h-16 mb-6" />
                        <h3 className="text-2xl font-bold">
                        {service.title}
                        </h3>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden">
                        <p className="text-xs text-white/70">Tap for details</p>
                        </div>
                    </div>
                    </div>

                    {/* Back of card */}
                    <div className="absolute inset-0 h-full w-full rounded-2xl bg-card text-card-foreground [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="h-full w-full flex flex-col justify-between items-start text-left p-8">
                        <div>
                        <h3 className="text-2xl font-bold mb-4 text-gradient">
                            {service.title}
                        </h3>
                        <p className="text-base leading-relaxed text-muted-foreground mb-4">
                            {service.description}
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {service.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-primary" />
                                <span>{detail}</span>
                            </li>
                            ))}
                        </ul>
                        </div>
                        <div className="w-full flex justify-between items-center mt-4">
                        <Button variant="link" asChild className="p-0 h-auto">
                            <Link href="/contact">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="link" asChild className="p-0 h-auto">
                            <Link href="/contact">
                            Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        </div>
                    </div>
                    </div>
                </div>
            </TiltCard>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="lg:hidden"
          >
            <TiltCard>
                <Card className="h-full w-full rounded-2xl flex flex-col justify-center items-center text-center p-8 bg-card">
                    <Lightbulb className="w-16 h-16 mb-6 text-primary" />
                    <h3 className="text-2xl font-bold mb-4 text-gradient">
                        Bringing Your Ideas to Reality
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground mb-6">
                        Have a unique project in mind? We love a good challenge.
                    </p>
                    <Button asChild className="bg-gradient-to-r rounded-[6px] from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
                        <Link href="/contact">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </Card>  
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function AllServices() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter"
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            We provide a wide range of digital services to help your business grow. Explore our offerings below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col glassmorphism transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                <CardHeader className="flex-shrink-0">
                  <div className="flex items-center gap-4">
                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br", service.gradient)}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gradient">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 text-base text-muted-foreground">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 flex items-center gap-4">
                    <Button asChild className="w-full bg-gradient-to-r from-primary to-accent text-white group relative overflow-hidden rounded-[3px]">
                      <Link href="/contact" className="flex items-center justify-center">
                        <span className="relative flex items-center justify-center">
                          <span className="block transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">Get a Quote</span>
                          <span className="absolute block transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">Get a Quote</span>
                        </span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 ease-in-out" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="w-full rounded-[3px] shadow-lg shadow-primary/10 transition-all duration-300 group relative overflow-hidden hover:bg-gradient-to-r from-primary to-accent"
                    >
                      <Link href={`/services/${service.slug}`} className="font-semibold text-muted-foreground group-hover:text-white flex items-center justify-center">
                        <span className="relative flex items-center justify-center group-hover:text-white">
                          <span className="block transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">View More</span>
                          <span className="absolute block transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">View More</span>
                        </span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

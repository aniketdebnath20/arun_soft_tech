
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="circuit"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M30 0 L30 30 L0 30 M60 30 L30 30 L30 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary"
              />
              <circle cx="30" cy="30" r="2" fill="currentColor" className="text-accent" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div> */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-muted-foreground">
              Innovative Software Solutions
            </span>
          </div>
        </motion.div> */}

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10 leading-tight"
        >
          <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            We Build The
          </span>
          <br />
          <span className="text-foreground">Digital Future</span>
        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-muted-foreground"
        >
          Transform your vision into cutting-edge digital experiences.
          We craft premium web applications, mobile solutions, and cloud platforms
          that drive business growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button
            size="lg"
            asChild
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className={
              'px-8 py-4 font-semibold rounded-full hover:scale-105 transition-all duration-300 glassmorphism border-2 border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground'
            }
          >
            <Link href="/about">
              <Play className="mr-2 w-5 h-5" />
              Watch Our Story
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-3xl  text-muted-foreground">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">150+</div>
              <div className="text-sm">Projects Delivered</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-400 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">99%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>


    </section>
  );
}

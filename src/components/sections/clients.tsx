
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { clients } from '@/lib/data';

export function Clients() {
  return (
    <section id="clients" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Trusted by Industry Leaders</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are proud to collaborate with innovative companies worldwide.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-12 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
          }}
        >
          <div className="flex w-max animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center">
                <Image
                  src={client.logoUrl}
                  alt={client.name}
                  width={150}
                  height={75}
                  data-ai-hint={client.logoHint}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

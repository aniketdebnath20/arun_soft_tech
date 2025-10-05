
'use client';

import Link from 'next/link';
import { servicesMenu } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export function ServicesMenu() {
  return (
    <div className="w-full bg-[#fcfcfcf1] border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-4">
          <div className="md:col-span-3">
            {servicesMenu.map(category => (
              <div key={category.title}>
                <h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4">
                  {category.title}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                  {category.items.map(item => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="group flex items-start gap-3 p-2 -m-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <item.icon className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-foreground rounded-xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-background mb-3">
              Drive business with smart software
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore solutions to streamline your operations and accelerate
              growth.
            </p>
            <Link
              href="/contact"
              className="group text-background font-semibold flex items-center gap-2"
            >
              Contact
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

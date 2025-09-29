
'use client';

import Link from 'next/link';
import { servicesMenu } from '@/lib/data';

export function ServicesMenu() {
  return (
    <div className="w-full glassmorphism border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-6 py-8">
        {servicesMenu.map(category => (
          <div key={category.title}>
            <h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4">
              {category.title}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
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
    </div>
  );
}

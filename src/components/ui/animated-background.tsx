"use client";
import React from 'react';
import { useTheme } from 'next-themes';

export function AnimatedBackground() {
  const { theme } = useTheme();
  
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 opacity-5">
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
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            theme === 'dark' ? 
            'radial-gradient(at 20% 80%, hsla(210, 90%, 50%, 0.1), transparent 50%), radial-gradient(at 80% 20%, hsla(280, 90%, 60%, 0.1), transparent 50%)'
            : 'radial-gradient(at 20% 80%, hsla(210, 90%, 50%, 0.05), transparent 50%), radial-gradient(at 80% 20%, hsla(280, 90%, 60%, 0.05), transparent 50%)'
            ,
        }}
      />
    </div>
  );
}

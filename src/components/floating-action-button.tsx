
'use client';

import React from 'react';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

type FloatingActionButtonProps = {
  href: string;
  'aria-label': string;
  tooltip: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export function FloatingActionButton({
  href,
  'aria-label': ariaLabel,
  tooltip,
  children,
  className,
  onClick,
}: FloatingActionButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-125 ${className}`}
          aria-label={ariaLabel}
          onClick={onClick}
        >
          {children}
        </Link>
      </TooltipTrigger>
      <TooltipContent className=' bg-slate-50 text-foreground shadow-xl px-4 py-2 rounded-[4px]'>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}

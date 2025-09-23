
"use client"
import React, { useRef, useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type TiltCardProps = {
  children: ReactNode;
  maxTilt?: number;
  perspective?: number;
  className?: string;
};

export function TiltCard({
  children,
  maxTilt = 15,
  perspective = 1000,
  className,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    function onMove(e: MouseEvent | TouchEvent) {
        // Do not tilt if the card is flipped
        if (el?.classList.contains('is-flipped')) return;

        const event = 'touches' in e ? e.touches?.[0] : e;
        if (!event) return;
        
        const rect = el!.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const nx = (x / rect.width) * 2 - 1;
        const ny = (y / rect.height) * 2 - 1;

        const rotateY = nx * maxTilt * -1;
        const rotateX = ny * maxTilt;

        const translateZ = Math.max(10, Math.abs(nx) + Math.abs(ny)) * 6;

        el!.style.transform = `perspective(${perspective}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    function onLeave() {
      if (!el) return;
      el.style.transition = 'transform 600ms cubic-bezier(.2,.9,.2,1)';
      el.style.transform = `perspective(${perspective}px) translateZ(0px) rotateX(0deg) rotateY(0deg)`;
      setTimeout(() => {
        if (el) el.style.transition = '';
      }, 700);
    }

    function onEnter() {
        if (el) {
            el.style.transition = '';
            // A bit of a hack to detect flip
            if (getComputedStyle(el).transform.includes('matrix3d(-1')) {
                el.classList.add('is-flipped');
            } else {
                el.classList.remove('is-flipped');
            }
        }
    }

    el.addEventListener('mousemove', onMove as EventListener);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('touchmove', onMove as EventListener, { passive: true });
    el.addEventListener('touchend', onLeave);

    return () => {
      el.removeEventListener('mousemove', onMove as EventListener);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('touchmove', onMove as EventListener);
      el.removeEventListener('touchend', onLeave);
    };
  }, [maxTilt, perspective]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "h-[360px] md:h-[500px] w-full",
        className,
      )}
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}

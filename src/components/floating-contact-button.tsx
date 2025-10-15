
'use client';

import React, { useRef } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { Phone } from 'lucide-react';
import { FloatingActionButton } from './floating-action-button';

const WhatsAppIcon = () => (
    <svg
      viewBox="0 0 32 32"
      className="w-7 h-7 text-white fill-current"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.044-.53-.044a.74.74 0 0 0-.528.245c-.41.41-1.518 1.518-1.518 3.686 0 2.169 1.518 4.28 1.748 4.588.23.308 2.93 4.226 6.94 6.012.913.39 1.76.645 2.448.825.817.215 1.588.16 2.225-.15.7-.355 1.39-1.76 1.605-2.487.215-.726.215-1.35 0-1.518-.17-.17-.372-.23-.732-.41l-.04-.01zM16.05 3.867a12.14 12.14 0 0 0-12.14 12.14c0 4.226 2.607 7.946 6.012 9.925L4 32l5.973-3.957A12.13 12.13 0 0 0 16.05 28.2a12.14 12.14 0 0 0 12.14-12.14A12.14 12.14 0 0 0 16.05 3.867z"
      ></path>
    </svg>
);


type FloatingActionButtonsProps = {
  dragConstraintRef: React.RefObject<HTMLDivElement | null>;
};

export function FloatingActionButtons({ dragConstraintRef }: FloatingActionButtonsProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const wasDragged = useRef(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (wasDragged.current) {
        e.preventDefault();
        wasDragged.current = false;
    }
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // A small timeout to distinguish between a drag and a click
    setTimeout(() => { wasDragged.current = false; }, 200);

    const parent = dragConstraintRef.current;
    const button = buttonRef.current;
    if (!parent || !button) return;

    // After dragging, snap to the nearest edge
    if (info.point.x < parent.clientWidth / 2) {
      // Snap to left
      button.style.transform = `translateX(${16}px) translateY(${button.getBoundingClientRect().top - parent.getBoundingClientRect().top}px) translateZ(0px)`;
    } else {
      // Snap to right
      button.style.transform = `translateX(${parent.clientWidth - button.clientWidth - 16}px) translateY(${button.getBoundingClientRect().top - parent.getBoundingClientRect().top}px) translateZ(0px)`;
    }
  };

  const handleDragStart = () => {
    wasDragged.current = true;
  }

  return (
    <motion.div
      ref={buttonRef}
      drag
      dragConstraints={dragConstraintRef}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      dragMomentum={false}
      whileTap={{ scale: 0.95, cursor: 'grabbing' }}
      className="fixed z-[60] cursor-grab md:hidden pointer-events-auto flex flex-col items-center gap-3 bottom-4 right-6"
    >
      <FloatingActionButton
        href="https://wa.me/8779182671"
        aria-label="Chat on WhatsApp"
        tooltip="Chat with us"
        className="bg-[#25D366] hover:bg-[#1DAE52]"
        onClick={handleClick}
      >
        <WhatsAppIcon />
      </FloatingActionButton>

      <FloatingActionButton
        href="tel:+8779182671"
        aria-label="Call us"
        tooltip="Call us"
        className="bg-primary hover:bg-primary/90"
        onClick={handleClick}
      >
        <Phone className="w-6 h-6 text-white" />
      </FloatingActionButton>
    </motion.div>
  );
}


"use client";

import React, { useEffect, useRef, useState } from 'react';
import { timelineEvents } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const TimelineItem = ({ event, index }: { event: (typeof timelineEvents)[0], index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const isRightAlignedOnDesktop = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={cn(
                "relative flex w-full items-center",
                isRightAlignedOnDesktop ? "md:justify-end" : "md:justify-start"
            )}
        >
            <div
                className={cn(
                    "z-10 absolute md:relative left-[-15px] md:left-auto top-1 md:top-auto transition-transform duration-500 ease-out",
                    isInView ? "scale-100" : "scale-0",
                    isRightAlignedOnDesktop ? "md:order-3 md:left-[-15px]" : "md:order-1 md:right-[-15px] md:left-auto" 
                )}
            >
                <div className="bg-primary shadow-xl w-8 h-8 rounded-full flex items-center justify-center">
                    <event.icon className="w-5 h-5 text-primary-foreground" />
                </div>
            </div>
            <motion.div 
                initial={{ opacity: 0, x: isRightAlignedOnDesktop ? 40 : -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRightAlignedOnDesktop ? 40 : -40 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className={cn(
                    "rounded-lg w-full ml-10 md:ml-0 p-0 md:max-w-md",
                    isRightAlignedOnDesktop ? "md:order-2" : "md:order-2"
            )}>
                <Card className="glassmorphism">
                    <CardHeader>
                        <div className="flex justify-between items-baseline mb-1">
                            <CardTitle className="font-bold text-lg">{event.title}</CardTitle>
                            <p className="text-sm font-medium text-primary">{event.year}</p>
                        </div>
                        <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                </Card>
            </motion.div>
        </motion.div>
    );
};

export function AboutTimeline() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );
        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-16 md:py-24  overflow-hidden">
            <div className="container max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gradient">Our Journey</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        From a small startup to a leading technology partner, this is our story.
                    </p>
                </motion.div>
                <div className="relative">
                    <motion.div 
                        className="absolute left-[1px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" 
                        style={{ transformOrigin: 'top' }}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: isVisible ? 1 : 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    />
                    <div className="space-y-8">
                        {timelineEvents.map((event, index) => (
                             <TimelineItem key={index} event={event} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

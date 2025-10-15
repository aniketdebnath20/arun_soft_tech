
"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Telescope, Brush, HardHat, Rocket, Plus, Minus } from "lucide-react";
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const processSteps = [
    {
        icon: Telescope,
        title: "Discovery & Strategy",
        description: "We start by understanding your vision, goals, and target audience to lay a solid foundation for the project.",
    },
    {
        icon: Brush,
        title: "UI/UX Design",
        description: "Our team creates intuitive and beautiful UI/UX designs, wireframes, and prototypes for a seamless user experience.",
    },
    {
        icon: HardHat,
        title: "Development",
        description: "Our developers write clean, efficient, and scalable code to build a robust application that meets your requirements.",
    },
    {
        icon: Rocket,
        title: "Deployment & Launch",
        description: "We handle the entire launch process, ensuring a smooth and successful deployment to your chosen platform.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};



export function Process() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <motion.section
            className="py-16 md:py-24 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter text-gradient">
                        Our Proven Process
                    </h2>
                    <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
                        A streamlined workflow to take your idea from concept to reality,
                        ensuring quality and efficiency at every stage.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            onMouseEnter={() => setHoveredIndex(index)}
                            className={cn("relative z-0 transition-all duration-300", hoveredIndex === index && "z-10")}
                        >
                            <motion.div
                                layout
                                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                className={cn(
                                    "relative h-full w-full p-8 rounded-2xl glassmorphism transition-all duration-300",
                                    "border border-border/50",
                                    hoveredIndex === index && "shadow-2xl shadow-primary/10 border-primary/20"
                                )}
                            >
                                <motion.div layout="position" className="flex items-center justify-between mb-6">
                                    <div className={cn("w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300", hoveredIndex === index ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary")}>
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <div className="text-4xl font-bold text-muted-foreground/10">0{index + 1}</div>
                                </motion.div>

                                <CardHeader className="p-0">
                                    <motion.div layout="position" className="flex items-start justify-between">
                                        <CardTitle className="text-xl font-bold">{step.title}</CardTitle>
                                        <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-muted-foreground ml-4">
                                            <AnimatePresence initial={false} mode="wait">
                                                <motion.div
                                                    key={hoveredIndex === index ? "minus" : "plus"}
                                                    initial={{ rotate: 45, opacity: 0 }}
                                                    animate={{ rotate: 0, opacity: 1 }}
                                                    exit={{ rotate: -45, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {hoveredIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                </CardHeader>

                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                            animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
                                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="overflow-hidden"
                                        >
                                            <CardDescription className="leading-relaxed text-muted-foreground">
                                                {step.description}
                                            </CardDescription>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

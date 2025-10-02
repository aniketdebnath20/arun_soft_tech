
'use client';

import React, { use } from 'react';
import { services, projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};


export default function ServicePage({ params }: ServicePageProps) {
  const { slug } = use(params); // ✅ unwrap the Promisems
  const service = services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  const { title, longDescription, icon: Icon, gradient, features, process, benefits, faqs, relatedProjectIds } = service;

  const relatedProjects = projects.filter(p => relatedProjectIds.includes(p.id));

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-24 relative"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={itemVariants} className="mb-8">
            <Link href="/services" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Services
            </Link>
          </motion.div>
          <div className="text-center">
            <motion.div
              variants={itemVariants}
              className={cn("w-24 h-24 mb-8 mx-auto rounded-3xl flex items-center justify-center text-white bg-gradient-to-br shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-primary/50", gradient)}>
              <Icon className="w-12 h-12" />
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              {title}
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {longDescription}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* What We Offer Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.8 }}
        className="py-24"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">What We Offer</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Core components of our {title} service.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full rounded-2xl bg-card/50 glassmorphism neon-border transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10">
                        <CheckCircle className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold pt-1">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Our Process Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-muted/30"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Our Approach</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A proven process for delivering outstanding results.
            </p>
          </motion.div>
          <div className="relative">
            <motion.div
              className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-border origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ amount: 0.4, once: true }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-y-0"
            >
              {process.map((step, index) => (
                <motion.div key={index} variants={itemVariants} className="relative flex flex-col items-center text-center">
                  <div className="bg-muted/30 p-2 rounded-full border mb-6 z-10">
                    <div className={cn("w-16 h-16 rounded-full flex items-center justify-center text-white bg-gradient-to-br", gradient)}>
                      <step.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <Card className="w-full glassmorphism h-full">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold">{index + 1}. {step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us & FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.8 }}
        className="py-24"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-8">Why ArunSoftTech?</h2>
              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </motion.section>
{/* 
      {relatedProjects.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-muted/30"
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gradient">Related Work</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                See our expertise in action with these projects.
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              variants={containerVariants}
            > */}
              {/* {relatedProjects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <Card className="group overflow-hidden transition-all duration-300 h-full flex flex-col glassmorphism hover-glow">
                    <CardContent className="p-0 flex flex-col flex-grow">
                      <div className="relative overflow-hidden aspect-video rounded-t-lg">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          data-ai-hint={project.imageHint}
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4 text-sm flex-grow">{project.description}</p>
                        <Button asChild size="sm" className="w-full mt-auto bg-gradient-to-r from-primary/80 to-accent/80 text-white transition-all duration-300 group-hover:from-primary group-hover:to-accent">
                          <Link href={project.link}>
                            View Project <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))} */}
            {/* </motion.div>
          </div>
        </motion.section>
      )} */}

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-background"
      >
        <div className="container mx-auto px-6">
          <div className="relative bg-muted/40 rounded-3xl p-10 md:p-16 overflow-hidden shadow-2xl hover:shadow-primary/10 transition-shadow">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Ready to start with {title}?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Let&apos;s discuss how we can help you achieve your goals.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button
                  asChild
                  size="lg"
                  className="bg-lime-300 text-black hover:bg-lime-400 rounded-full text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}


"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, User, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
    const { toast } = useToast();
    const contactImage = getPlaceholderImage('contact-main');
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
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

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", message: "" },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. We'll get back to you soon.",
        });
        form.reset();
    }

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="container">
        <div className={cn(
          "text-center mb-16 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Let's Build Together</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form or use our contact details below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={cn("transition-all duration-700 ease-out", isVisible ? "opacity-100" : "opacity-0")}>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8">
                    Our team is ready to answer your questions. Reach out and let us know how we can help.
                </p>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-lg">Our Office</p>
                          <p className="text-muted-foreground">123 Tech Avenue, Innovation City, 12345</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-lg">Email Us</p>
                          <p className="text-muted-foreground">contact@zenith.tech</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-lg">Call Us</p>
                          <p className="text-muted-foreground">+1 (234) 567-890</p>
                        </div>
                    </div>
                </div>
            </div>
             <Card className={cn(
                "p-8 shadow-2xl bg-card/80 glassmorphism transition-all duration-700 ease-out",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )} style={{transitionDelay: '200ms'}}>
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input className="pl-10" placeholder="e.g. Jane Doe" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <div className="relative">
                                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                  <Input className="pl-10" type="email" placeholder="your.email@example.com" {...field} />
                                </div>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your Message</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Textarea placeholder="Tell us about your project..." className="min-h-[120px] pt-3" {...field} />
                                  </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button type="submit" size="lg" className="w-full text-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                </Form>
            </Card>
        </div>
      </div>
    </section>
  );
}

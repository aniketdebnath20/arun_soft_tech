
'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Zap
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    info: "hello@zenith.tech",
    description: "Get in touch for project inquiries",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Phone,
    title: "Call Us",
    info: "+1 (234) 567-890",
    description: "Mon-Fri, 9AM-6PM",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    info: "Innovation City, USA",
    description: "Heart of the Tech Hub",
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: Clock,
    title: "Response Time",
    info: "< 24 Hours",
    description: "We'll get back to you quickly",
    gradient: "from-orange-500 to-red-500"
  }
];

const services = [
  "Web Development",
  "Mobile App Development", 
  "UI/UX Design",
  "Cloud & DevOps",
  "Digital Consulting",
  "AI & Data Solutions"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center mx-auto mb-8 hover-glow">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-green-400">Message Sent!</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Thank you for reaching out. We've received your message and will get back to you within 24 hours.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                company: "",
                service: "",
                budget: "",
                message: ""
              });
            }}
            className="px-8 py-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-xl hover-glow"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-teal-900/10 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-teal-900/30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="holographic-text">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your digital presence? Let's discuss your project and bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="glassmorphism rounded-2xl p-6 text-center hover-glow transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center mx-auto mb-4 hover-glow`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary">{info.title}</h3>
                <p className="text-foreground font-medium mb-1">{info.info}</p>
                <p className="text-muted-foreground text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Start Your Project</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you with a detailed proposal for your project.
            </p>
          </div>

          <div className="glassmorphism rounded-2xl p-8 neon-border text-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="mb-2 block">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-background/50 border-border/30 focus:border-primary focus:bg-background/70"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="mb-2 block">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-background/50 border-border/30 focus:border-primary focus:bg-background/70"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company" className="mb-2 block">Company</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="bg-background/50 border-border/30 focus:border-primary focus:bg-background/70"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <Label htmlFor="service" className="mb-2 block">Service Needed *</Label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => handleInputChange("service", e.target.value)}
                    className="w-full px-3 py-2 bg-background/50 border border-border/30 rounded-md focus:border-primary focus:bg-background/70"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-background">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="budget" className="mb-2 block">Project Budget</Label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                  className="w-full px-3 py-2 bg-background/50 border border-border/30 rounded-md focus:border-primary focus:bg-background/70"
                >
                  <option value="">Select budget range</option>
                  <option value="under-10k" className="bg-background">Under $10,000</option>
                  <option value="10k-50k" className="bg-background">$10,000 - $50,000</option>
                  <option value="50k-100k" className="bg-background">$50,000 - $100,000</option>
                  <option value="100k-plus" className="bg-background">$100,000+</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message" className="mb-2 block">Project Details *</Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-background/50 border-border/30 focus:border-primary focus:bg-background/70"
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-lg font-semibold rounded-xl hover-glow hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Side Content Section */}
      <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="glassmorphism rounded-2xl p-8">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-6 hover-glow">
                          <MessageSquare className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-purple-400">Why Choose ZenithTech?</h3>
                      <div className="space-y-4 text-muted-foreground">
                          <div className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span>5+ years of industry expertise</span>
                          </div>
                          <div className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span>500+ successful projects delivered</span>
                          </div>
                          <div className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span>24/7 support and maintenance</span>
                          </div>
                          <div className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span>Cutting-edge technology stack</span>
                          </div>
                      </div>
                  </div>

                  <div className="glassmorphism rounded-2xl p-8">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center mb-6 hover-glow">
                          <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-orange-400">Quick Response</h3>
                      <p className="text-muted-foreground leading-relaxed">
                          We understand that time is crucial for your business. Our team typically responds to all inquiries within 24 hours with a detailed project assessment and timeline.
                      </p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}

    
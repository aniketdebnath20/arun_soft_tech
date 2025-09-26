
import { services } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const { title, longDescription, icon: Icon, gradient, features } = service;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-muted/20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <Link href="/services" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Services
            </Link>
          </div>
          <div className="text-center">
             <div className={cn("w-24 h-24 mb-8 mx-auto rounded-3xl flex items-center justify-center text-white bg-gradient-to-br", gradient)}>
                <Icon className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">Key Features</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    What we offer in our {title} service.
                </p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glassmorphism hover-glow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
       {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
            <div className="relative bg-muted/40 rounded-3xl p-10 md:p-16 overflow-hidden">
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
                        className="bg-lime-300 text-black hover:bg-lime-400 rounded-full text-lg px-8 py-6"
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
        </section>
    </div>
  );
}

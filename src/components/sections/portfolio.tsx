
"use client";

import { useState, useTransition, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Loader } from 'lucide-react';
import { motion } from 'framer-motion';

import { projects, userInterestsOptions, Project as ProjectType } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getRecommendations } from '@/app/actions';
import { cn } from '@/lib/utils';

export function Portfolio() {
  const [isPending, startTransition] = useTransition();
  const [activeInterest, setActiveInterest] = useState<string | null>(null);
  const [recommendedProjects, setRecommendedProjects] = useState<string[]>([]);
  
  const handleInterestClick = (interest: string) => {
    if (activeInterest === interest) {
      setActiveInterest(null);
      setRecommendedProjects([]);
      return;
    }

    setActiveInterest(interest);
    startTransition(async () => {
      const result = await getRecommendations({ userInterests: interest });
      if (result && result.recommendations) {
        const projectIds = result.recommendations.split(',').map(id => id.trim());
        setRecommendedProjects(projectIds);
      }
    });
  };

  const displayedProjects = activeInterest && recommendedProjects.length > 0
    ? projects.filter(p => recommendedProjects.includes(p.id))
    : projects;

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Our Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore a selection of our projects and see our expertise in action.
            Select an interest to get personalized recommendations!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {userInterestsOptions.map((interest) => (
            <Button
              key={interest}
              variant={activeInterest === interest ? 'default' : 'outline'}
              onClick={() => handleInterestClick(interest)}
              disabled={isPending}
              className="rounded-full"
            >
              {isPending && activeInterest === interest && <Loader className="mr-2 h-4 w-4 animate-spin" />}
              {interest}
            </Button>
          ))}
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        {activeInterest && displayedProjects.length === 0 && !isPending && (
             <p className="text-center text-muted-foreground mt-8">No matching projects for this interest. Try another one!</p>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 h-full flex flex-col glassmorphism hover-glow">
      <CardContent className="p-0 flex flex-col flex-grow">
        <div className="relative overflow-hidden aspect-[3/2] rounded-t-lg">
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
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
            ))}
          </div>
          <Button asChild size="sm" className="w-full mt-auto bg-gradient-to-r from-primary/80 to-accent/80 text-white transition-all duration-300 group-hover:from-primary group-hover:to-accent">
            <Link href={project.link}>
              View Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

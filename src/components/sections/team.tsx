
"use client";
import Image from 'next/image';
import { teamMembers } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export function Team() {
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

  return (
    <section id="team" ref={sectionRef} className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <div className={cn(
          "text-center max-w-3xl mx-auto transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Our Talented Team</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The brilliant minds turning ideas into reality.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 [perspective:1000px]">
          {teamMembers.map((member, index) => (
            <div key={index} className={cn(
                "group h-[350px] rounded-lg transition-all duration-700 ease-out",
                isVisible ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: `${200 + index * 150}ms`, transform: isVisible ? 'translateY(0)' : 'translateY(48px)' }}>
              <div className="relative h-full w-full rounded-lg shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of card */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <Card className="h-full w-full overflow-hidden">
                    {member.imageUrl && (
                      <Image 
                        src={member.imageUrl} 
                        alt={member.name} 
                        data-ai-hint={member.imageHint} 
                        fill 
                        className="object-cover" 
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                      <p className="text-primary-foreground/80">{member.role}</p>
                    </div>
                  </Card>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 h-full w-full rounded-lg bg-card text-card-foreground [transform:rotateY(180deg)] [backface-visibility:hidden]">
                   <Card className="h-full w-full flex flex-col justify-center items-center text-center p-6">
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-primary font-semibold">{member.role}</p>
                      <p className="mt-4 text-muted-foreground">{member.bio}</p>
                   </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

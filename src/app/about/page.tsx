
'use client';

import { motion } from 'framer-motion';
import { Target, Linkedin, Github } from 'lucide-react';
import { AboutTimeline } from '@/components/sections/about-timeline';
import { Card, CardContent } from '@/components/ui/card';
import { team } from '@/lib/data';
import { useTheme } from 'next-themes';

export default function AboutPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Building the Future
              </span>
              <br />
              <span className="text-foreground">One Project at a Time</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We&apos;re a passionate team of innovators, designers, and developers dedicated to creating
              digital experiences that transform businesses and delight users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  ArunSoftTech was born from a simple belief: technology should empower, not complicate.
                  Founded in 2018, we started as a small team with big dreams and an unwavering
                  commitment to excellence.
                </p>
                <p>
                  Today, we&apos;re proud to be a leading digital solutions provider, having helped over
                  150 businesses transform their digital presence and achieve remarkable growth.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-foreground leading-relaxed">
                        To empower businesses with innovative digital solutions that drive growth,
                        enhance user experiences, and create lasting impact in the digital world.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New Timeline */}
      <AboutTimeline />

      {/* Team Section */}
      <section className="py-32 relative text-center">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-6xl font-bold mb-16 tracking-tighter ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            <span className="text-gradient">Meet Our Leadership</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group p-1 bg-gradient-to-br rounded-3xl shadow-xl relative overflow-hidden"
                style={{ '--from-color': `var(--from-color, ${member.color.split(' ')[0]})`, '--to-color': `var(--to-color, ${member.color.split(' ')[2]})` } as React.CSSProperties}
              >
                <div className={`p-8 rounded-[22px] h-full glassmorphism flex flex-col items-center`}>
                  <div className={`w-24 h-24 mb-6 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-4xl font-bold text-white`}>
                    {member.image}
                  </div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{member.name}</h3>
                  <p className="gradient-text text-sm font-semibold mb-4">{member.role}</p>
                  <p className={`text-sm flex-grow ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>{member.bio}</p>
                  <div className="flex gap-4 mt-6">
                    <motion.button whileHover={{ scale: 1.2, y: -2 }} className="text-slate-400 hover:text-primary transition-colors duration-200 ease-in-out hover:drop-shadow-[0_0_8px_hsl(var(--primary))]"><Linkedin size={20} /></motion.button>
                    <motion.button whileHover={{ scale: 1.2, y: -2 }} className="text-slate-400 hover:text-primary transition-colors duration-200 ease-in-out hover:drop-shadow-[0_0_8px_hsl(var(--primary))]"><Github size={20} /></motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

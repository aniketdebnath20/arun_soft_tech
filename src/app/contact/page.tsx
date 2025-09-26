
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Send,
  MessageSquare,
  Phone,
  MapPin,
  CheckCircle,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const services = [
  { id: 'website-design', label: 'Website design' },
  { id: 'content-creation', label: 'Content creation' },
  { id: 'ux-design', label: 'UX design' },
  { id: 'strategy-consulting', label: 'Strategy & consulting' },
  { id: 'user-research', label: 'User research' },
  { id: 'other', label: 'Other' },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-md mx-auto text-center p-8 bg-transparent rounded-lg"
        >
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Message Sent!</h2>
          <p className="text-muted-foreground mb-6">
            Thank you for reaching out. We&apos;ve received your message and will get
            back to you as soon as possible.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
          >
            Send Another Message
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
          className="text-center mb-12"
        >
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Contact our team
            </span>
          </div>
          <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Got any questions about the product or scaling on our platform?
            We&apos;re here to help. Chat to our friendly team 24/7 and get
            onboard in less than 5 minutes.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="max-w-5xl mx-auto px-2 md:px-3 grid md:grid-cols-2 md:justify-items-end gap-16">
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.2 }}
            className="space-y-8 "
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium mb-1.5">First name</label>
                  <Input id="first-name" placeholder="First name" className='rounded-[4px]' />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium mb-1.5">Last name</label>
                  <Input id="last-name" placeholder="Last name" className='rounded-[4px]' />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                <Input id="email" type="email" placeholder="you@company.com" className='rounded-[4px]' />
              </div>

              <div>
                <label htmlFor="phone-number" className="block text-sm font-medium mb-1.5">Phone number</label>
                <div className="flex gap-2">
                  <Select defaultValue="US">
                    <SelectTrigger className="w-[80px] rounded-[4px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">US</SelectItem>
                      <SelectItem value="CA">CA</SelectItem>
                      <SelectItem value="UK">UK</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input id="phone-number" placeholder="+1 (555) 000-0000" className="flex-1 rounded-[4px]" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
                <Textarea id="message" placeholder="Leave us a message..." rows={4} className='rounded-[4px]' />
              </div>

              <div>
                <Label className="block text-sm font-medium mb-4">Services</Label>
                <RadioGroup defaultValue={services[0].id} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map(service => (
                    <div key={service.id} className="flex items-center gap-2">
                      <RadioGroupItem value={service.id} id={service.id} />
                      <Label htmlFor={service.id} className="text-sm font-medium text-muted-foreground cursor-pointer">
                        {service.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-gray-800" size="lg">
                Send message
              </Button> */}

              <Button
                className="px-8 py-5 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                  Start Your Project
              </Button>

            </form>
          </motion.div>

          {/* Right Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.4 }}
            className="hidden md:block space-y-12 "
          >
            <div>
              <h3 className="text-lg font-semibold">Chat with us</h3>
              <p className="text-muted-foreground mt-1 mb-4">
                Speak to our friendly team via live chat.
              </p>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 text-primary font-semibold hover:underline">
                  <MessageSquare className="w-5 h-5" />
                  <span>Start a live chat</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-primary font-semibold hover:underline">
                  <Send className="w-5 h-5" />
                  <span>Shoot us an email</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-primary font-semibold hover:underline">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                  <span>Message us on X</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Call us</h3>
              <p className="text-muted-foreground mt-1 mb-4">
                Call our team Mon-Fri from 8am to 5pm.
              </p>
              <a href="#" className="flex items-center gap-3 text-primary font-semibold hover:underline">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 000-0000</span>
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Visit us</h3>
              <p className="text-muted-foreground mt-1 mb-4">
                Chat to us in person at our Melbourne HQ.
              </p>
              <a href="#" className="flex items-center gap-3 text-primary font-semibold hover:underline">
                <MapPin className="w-5 h-5" />
                <span>100 Smith Street, Collingwood VIC 3066</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

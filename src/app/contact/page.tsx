'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Send,
  MessageSquare,
  Mail,
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { strict } from 'assert';

const services = [
  { id: 'website-design', label: 'Website design' },
  { id: 'content-creation', label: 'Content creation' },
  { id: 'ux-design', label: 'UX design' },
  { id: 'app-development', label: 'App development' },
  { id: 'Web-development', label: 'Web development' },
  { id: 'other', label: 'Other' },
];

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
  service: z.string(),
  countryCode: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
      service: services[0].id,
      countryCode: 'IN',
    },
  });

  const watchedData = watch();
  const primaryEmail = "arunsofttech8@gmail.com";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(primaryEmail)}&su=${encodeURIComponent("New project inquiry")}&body=${encodeURIComponent("Hi, I'd like to discuss a project with you.")}`;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitted(true);

    try {
      const GOOGLE_SHEET_WEBHOOK = process.env.NEXT_PUBLIC_GOOGLE_FORM_API;

      // Wait 400 seconds
      await new Promise((resolve) => setTimeout(resolve, 700));

      await fetch(GOOGLE_SHEET_WEBHOOK as string, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

    } catch (error) {
      console.error('Failed to save form data', error);
    }

    reset();
  };



  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-grid-pattern px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-md mx-auto text-center p-8 bg-transparent rounded-lg"
        >
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-20 h-20 text-green-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Message Sent!</h2>
          <p className="text-muted-foreground mb-6">
            Thank you for reaching out. We&apos;ve received your message and
            will get back to you as soon as possible.
          </p>
          <Button
            size="lg"
            className="rounded-full shadow-md text-primary-foreground bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Message
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-grid-pattern pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Contact our team
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Got any questions about the product or scaling on our platform?
            We&apos;re here to help. Chat to our friendly team 24/7 and get
            onboard in less than 5 minutes.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
            className="space-y-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    className='rounded-[3px]'
                    placeholder="First name"
                    {...register('firstName')}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    className='rounded-[3px]'
                    placeholder="Last name"
                    {...register('lastName')}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  className='rounded-[3px]'
                  type="email"
                  placeholder="you@company.com"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phoneNumber">Phone number</Label>
                <div className="flex gap-2">
                  <Select
                    value={watchedData.countryCode}
                    onValueChange={(value) => setValue('countryCode', value)}
                  >
                    <SelectTrigger className="w-[80px] rounded-[3px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">US</SelectItem>
                      <SelectItem value="CA">CA</SelectItem>
                      <SelectItem value="UK">UK</SelectItem>
                      <SelectItem value="IN">IN</SelectItem>
                      <SelectItem value="AM">AM</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="phoneNumber"
                    placeholder="+1 (555) 000-0000"
                    {...register('phoneNumber')}
                    className="flex-1 rounded-[3px]"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Leave us a message..."
                  className='rounded-[3px]'
                  rows={4}
                  {...register('message')}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="block text-sm font-medium mb-4">
                  Services
                </Label>
                <RadioGroup
                  value={watchedData.service}
                  onValueChange={(value) => setValue('service', value)}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-[3px]"
                >
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center gap-2"
                    >
                      <RadioGroupItem
                        value={service.id}
                        id={service.id}
                      />
                      <Label
                        htmlFor={service.id}
                        className="text-sm font-medium text-muted-foreground cursor-pointer"
                      >
                        {service.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Button
                type="submit"
                className="px-8 w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl"
                size="lg"
              >
                Send message
              </Button>
            </form>
          </motion.div>

          {/* Right Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
            className="hidden md:block space-y-12"
          >
            <div>
              <h3 className="text-lg font-semibold">Chat with us</h3>
              <p className="text-muted-foreground mt-1 mb-4">
                Speak to our friendly team via live chat.
              </p>
              <div className="space-y-3">
                <Link
                  href="#"
                  className="flex items-center gap-3 text-primary font-semibold hover:underline"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Start a live chat</span>
                </Link>
                <Link
                  href={gmailComposeUrl}
                  aria-label="Open Gmail compose window"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary font-semibold hover:underline"
                >
                  <Send className="w-5 h-5" />
                  <span>Shoot us an email</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 text-primary font-semibold hover:underline"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                  <span>Message us on X</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Call us</h3>
              <p className="text-muted-foreground mt-1 mb-4">
                Call our team Mon-Fri from 8am to 5pm.
              </p>
              <Link
                href="#"
                className="flex items-center gap-3 text-primary font-semibold hover:underline"
              >
                <Phone className="w-5 h-5" />
                <span>+8779182671</span>
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Visit us</h3>
              <p className="text-muted-foreground mt-1 mb-4">
                Chat to us in person at our Melbourne HQ.
              </p>
              <div
                className="flex items-center gap-3 text-primary font-semibold"
              >
                <MapPin className="w-5 h-5" />
                <span>Nallasopara (E), Near Station</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

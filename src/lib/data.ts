
import { Code, Smartphone, Palette, Cloud, Users, type LucideIcon, Rocket, Award, Building2, Shield, CheckCircle, BrainCircuit, FileText } from 'lucide-react';
import { getPlaceholderImage } from './palceholder-images';

export type Service = {
  id: number;
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  gradient: string;
  details: string[];
  longDescription: string;
  features: { title: string; description: string }[];
};

export const services: Service[] = [
  { 
    id: 1, 
    icon: Code, 
    title: "Web Development", 
    slug: "web-development",
    description: "Crafting high-performance, scalable web applications with modern architecture.", 
    gradient: "from-blue-500 to-cyan-500", 
    details: ["Custom web apps", "E-commerce platforms", "API development", "CMS solutions"],
    longDescription: "Our web development team builds fast, secure, and scalable applications tailored to your business needs. From complex enterprise platforms to dynamic single-page applications, we leverage the latest technologies to deliver robust solutions that drive growth and user engagement.",
    features: [
      { title: "Frontend Frameworks", description: "Expertise in React, Next.js, and Vue for building modern, interactive user interfaces." },
      { title: "Backend Development", description: "Proficient in Node.js, Python, and Go for creating powerful and efficient server-side logic." },
      { title: "Database Management", description: "Experience with SQL and NoSQL databases like PostgreSQL, MongoDB, and Firebase." }
    ]
  },
  { 
    id: 2, 
    icon: Smartphone, 
    title: "Mobile App Development", 
    slug: "mobile-app-development",
    description: "Building intuitive and engaging native and cross-platform mobile experiences.", 
    gradient: "from-purple-500 to-pink-500", 
    details: ["iOS & Android apps", "React Native development", "App maintenance", "UI/UX integration"],
    longDescription: "We create beautiful and performant mobile apps for iOS and Android. Whether you need a native app for maximum performance or a cross-platform solution for wider reach, our team delivers high-quality mobile experiences that delight users and achieve business goals.",
    features: [
      { title: "Native iOS & Android", description: "Developing high-performance, platform-specific apps using Swift, Kotlin, and Jetpack Compose." },
      { title: "Cross-Platform Dev", description: "Using React Native and Flutter to build apps for multiple platforms from a single codebase." },
      { title: "Push Notifications & In-App Purchases", description: "Integrating essential mobile features to enhance user engagement and monetization." }
    ]
  },
  { 
    id: 3, 
    icon: Palette, 
    title: "UI/UX Design", 
    slug: "ui-ux-design",
    description: "Designing beautiful, user-centric interfaces that drive engagement and conversion.", 
    gradient: "from-pink-500 to-rose-500", 
    details: ["User research", "Wireframing & Prototyping", "Interaction design", "Usability testing"],
    longDescription: "Our UI/UX design process is centered around your users. We conduct in-depth research to understand their needs and behaviors, creating intuitive and visually appealing designs that are not only beautiful but also highly functional and easy to use.",
    features: [
      { title: "User Research & Personas", description: "Understanding your audience to create designs that resonate." },
      { title: "Prototyping & Testing", description: "Iteratively designing and testing to ensure a flawless user experience." },
      { title: "Design Systems", description: "Creating comprehensive design systems for consistency and scalability." }
    ]
  },
  { 
    id: 4, 
    icon: Cloud, 
    title: "Cloud & DevOps", 
    slug: "cloud-devops",
    description: "Architecting robust cloud infrastructure and CI/CD pipelines for optimal performance.", 
    gradient: "from-green-500 to-emerald-500", 
    details: ["Cloud migration", "CI/CD pipelines", "Infrastructure as Code", "Containerization"],
    longDescription: "We help you leverage the power of the cloud to build, deploy, and manage applications with greater speed and reliability. Our DevOps experts automate your development pipeline, enabling faster releases and more stable infrastructure.",
    features: [
      { title: "AWS, GCP & Azure", description: "Expertise in all major cloud platforms to fit your specific needs." },
      { title: "CI/CD Automation", description: "Automating build, test, and deployment processes for faster delivery." },
      { title: "Kubernetes & Docker", description: "Containerizing applications for portability and scalability." }
    ]
  },
  { 
    id: 5, 
    icon: Shield, 
    title: "Security & Audits", 
    slug: "security-audits",
    description: "Ensuring your applications are secure, compliant, and resilient against threats.", 
    gradient: "from-red-500 to-pink-500", 
    details: ["Penetration testing", "Code reviews", "Compliance checks", "Threat modeling"],
    longDescription: "Protect your digital assets with our comprehensive security services. We identify vulnerabilities, assess risks, and implement robust security measures to safeguard your applications and data from evolving threats.",
    features: [
      { title: "Penetration Testing", description: "Simulating real-world attacks to identify and fix security weaknesses." },
      { title: "Security Audits", description: "Comprehensive reviews of your codebase and infrastructure for security flaws." },
      { title: "Compliance", description: "Ensuring your applications meet industry standards like GDPR, HIPAA, and SOC 2." }
    ]
  },
  { 
    id: 6, 
    icon: BrainCircuit, 
    title: "AI & Machine Learning", 
    slug: "ai-machine-learning",
    description: "Leveraging AI to build intelligent applications that automate and innovate.", 
    gradient: "from-amber-500 to-orange-500", 
    details: ["Custom ML models", "Natural Language Processing", "Computer Vision", "Data analysis"],
    longDescription: "Unlock the potential of your data with our AI and machine learning services. We build custom models and integrate intelligent features into your applications to automate processes, gain insights, and create innovative user experiences.",
    features: [
      { title: "Custom Model Development", description: "Building and training machine learning models tailored to your specific data and goals." },
      { title: "NLP & Computer Vision", description: "Implementing advanced AI for text, image, and video analysis." },
      { title: "Predictive Analytics", description: "Using data to forecast trends and inform business decisions." }
    ]
  },
];


export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint: string;
  link: string;
};

export const projects: Project[] = [
  {
    id: 'project-01',
    title: 'SaaS Analytics Platform',
    description: 'A comprehensive analytics dashboard for SaaS companies to track metrics and user engagement.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    imageUrl: getPlaceholderImage('portfolio-1')?.imageUrl || '',
    imageHint: getPlaceholderImage('portfolio-1')?.imageHint || '',
    link: '#',
  },
  {
    id: 'project-02',
    title: 'E-commerce Mobile App',
    description: 'A cross-platform mobile app for a fashion retailer, featuring a seamless shopping experience.',
    technologies: ['React Native', 'Firebase', 'Stripe'],
    imageUrl: getPlaceholderImage('portfolio-2')?.imageUrl || '',
    imageHint: getPlaceholderImage('portfolio-2')?.imageHint || '',
    link: '#',
  },
  {
    id: 'project-03',
    title: 'Corporate Website Redesign',
    description: 'A complete UI/UX overhaul and development for a major financial services firm.',
    technologies: ['Next.js', 'Figma', 'Vercel', 'Contentful'],
    imageUrl: getPlaceholderImage('portfolio-3')?.imageUrl || '',
    imageHint: getPlaceholderImage('portfolio-3')?.imageHint || '',
    link: '#',
  },
  {
    id: 'project-04',
    title: 'Cloud Migration for FinTech',
    description: 'Migrated a legacy FinTech platform to a scalable, serverless architecture on AWS.',
    technologies: ['AWS Lambda', 'DynamoDB', 'API Gateway'],
    imageUrl: getPlaceholderImage('portfolio-4')?.imageUrl || '',
    imageHint: getPlaceholderImage('portfolio-4')?.imageHint || '',
    link: '#',
  },
  {
    id: 'project-05',
    title: 'AI-Powered Recommendation Engine',
    description: 'Developed a recommendation engine for an e-learning platform to personalize content for users.',
    technologies: ['Python', 'TensorFlow', 'Kubernetes'],
    imageUrl: getPlaceholderImage('portfolio-5')?.imageUrl || '',
    imageHint: getPlaceholderImage('portfolio-5')?.imageHint || '',
    link: '#',
  },
    {
    id: 'project-06',
    title: 'Mobile Gaming App',
    description: 'A fun and interactive puzzle game for iOS and Android with social sharing features.',
    technologies: ['Unity', 'C#', 'Photon Engine'],
    imageUrl: getPlaceholderImage('portfolio-6')?.imageUrl || '',
    imageHint: getPlaceholderImage('portfolio-6')?.imageHint || '',
    link: '#',
  },
];


export type Client = {
  name: string;
  logoUrl: string;
  logoHint: string;
}

export const clients: Client[] = [
    { name: 'Quantum', logoUrl: 'https://placehold.co/150x75/000000/FFFFFF/png?text=Quantum', logoHint: 'tech logo' },
    { name: 'Apex', logoUrl: 'https://placehold.co/150x75/000000/FFFFFF/png?text=Apex', logoHint: 'finance logo' },
    { name: 'Nova', logoUrl: 'https://placehold.co/150x75/000000/FFFFFF/png?text=Nova', logoHint: 'health logo' },
    { name: 'Echo', logoUrl: 'https://placehold.co/150x75/000000/FFFFFF/png?text=Echo', logoHint: 'retail logo' },
    { name: 'Fusion', logoUrl: 'https://placehold.co/150x75/000000/FFFFFF/png?text=Fusion', logoHint: 'media logo' },
    { name: 'Odyssey', logoUrl: 'https://placehold.co/150x75/000000/FFFFFF/png?text=Odyssey', logoHint: 'travel logo' },
]


export const userInterestsOptions = ['E-commerce', 'SaaS', 'Mobile Apps', 'FinTech', 'AI/ML', 'Gaming'];


export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2020',
    title: 'Ignition',
    description: 'TechFlow is born from a shared passion for creating exceptional software.',
    icon: Rocket,
  },
  {
    year: '2021',
    title: 'Growth',
    description: 'Secured first major enterprise client and expanded our core engineering team.',
    icon: Award,
  },
  {
    year: '2022',
    title: 'Expansion',
    description: 'Launched our dedicated UI/UX design and mobile development divisions.',
    icon: Users,
  },
  {
    year: '2023',
    title: 'Excellence',
    description: 'Achieved cloud partner status and surpassed 100 successful projects.',
    icon: CheckCircle,
  },
  {
    year: '2024',
    title: 'Innovation',
    description: 'Pioneering new solutions in AI integration and scalable architectures.',
    icon: Building2,
  },
];


export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  imageHint: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    bio: 'Visionary leader with a passion for disruptive technology and user-centric design.',
    imageUrl: getPlaceholderImage('team-1')?.imageUrl || '',
    imageHint: getPlaceholderImage('team-1')?.imageHint || '',
  },
  {
    name: 'John Smith',
    role: 'CTO',
    bio: 'The architect of our technology stack, ensuring scalability, security, and performance.',
    imageUrl: getPlaceholderImage('team-2')?.imageUrl || '',
    imageHint: getPlaceholderImage('team-2')?.imageHint || '',
  },
  {
    name: 'Emily White',
    role: 'Head of Design',
    bio: 'Creative force behind our award-winning UI/UX, blending art with functionality.',
    imageUrl: getPlaceholderImage('team-3')?.imageUrl || '',
    imageHint: getPlaceholderImage('team-3')?.imageHint || '',
  },
  {
    name: 'Michael Brown',
    role: 'Lead Cloud Engineer',
    bio: 'Expert in building robust and efficient cloud infrastructures on AWS, Azure, and GCP.',
    imageUrl: getPlaceholderImage('team-4')?.imageUrl || '',
    imageHint: getPlaceholderImage('team-4')?.imageHint || '',
  },
];

export const team = [
  { name: 'Alex Rivera', role: 'Founder & CEO', bio: 'Visionary leader with 15+ years in tech innovation.', image: 'AR', color: 'from-blue-500 to-cyan-500' },
  { name: 'Sarah Chen', role: 'Chief Technology Officer', bio: 'Architect of scalable cloud solutions and modern web tech.', image: 'SC', color: 'from-purple-500 to-pink-500' },
  { name: 'Marcus Johnson', role: 'Head of Design', bio: 'Award-winning UI/UX designer creating intuitive experiences.', image: 'MJ', color: 'from-pink-500 to-rose-500' },
  { name: 'Emily Rodriguez', role: 'Mobile Lead', bio: 'Expert in cross-platform mobile development and optimization.', image: 'ER', color: 'from-green-500 to-emerald-500' },
];

type ServiceMenuItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export const servicesMenu: { title: string; items: ServiceMenuItem[] }[] = [
  {
    title: 'Business Tools',
    items: [
      {
        title: 'CRM Platform',
        description: 'Organize leads and client info.',
        href: '/services/crm',
        icon: FileText,
      },
      {
        title: 'Cloud Services',
        description: 'Reliable, secure cloud hosting.',
        href: '/services/cloud',
        icon: FileText,
      },
      {
        title: 'Automation',
        description: 'Automate tasks, boost efficiency.',
        href: '/services/automation',
        icon: FileText,
      },
    ],
  },
  {
    title: 'Development',
    items: [
      {
        title: 'Web Apps',
        description: 'Tailored web solutions for business.',
        href: '/services/web-apps',
        icon: FileText,
      },
      {
        title: 'Mobile Apps',
        description: 'Custom iOS and Android apps.',
        href: '/services/mobile-apps',
        icon: FileText,
      },
      {
        title: 'API Integration',
        description: 'Integrate systems with ease.',
        href: '/services/api-integration',
        icon: FileText,
      },
    ],
  },
  {
    title: 'Support',
    items: [
      {
        title: 'Consulting',
        description: 'Guidance for your tech needs.',
        href: '/services/consulting',
        icon: FileText,
      },
      {
        title: 'Training',
        description: 'Team workshops and upskilling.',
        href: '/services/training',
        icon: FileText,
      },
      {
        title: 'Help Center',
        description: 'Quick answers and support.',
        href: '/services/help-center',
        icon: FileText,
      },
    ],
  },
];

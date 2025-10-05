
import { Code, Smartphone, Palette, Cloud, Users, type LucideIcon, Rocket, Award, Building2, Shield, CheckCircle, BrainCircuit, FileText, Search, Brush, HardHat, Orbit, HeartHandshake, Puzzle, TrendingUp, BadgeDollarSign, Telescope, Lightbulb, PenTool, Wand2, Sparkles, SearchCode, Server } from 'lucide-react';
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
  process: { icon: LucideIcon, title: string; description: string }[];
  benefits: { icon: LucideIcon, title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedProjectIds: string[];
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
    ],
    process: [
      { icon: Telescope, title: "Discovery", description: "We start by understanding your vision, goals, and target audience to lay a solid foundation." },
      { icon: Brush, title: "Design", description: "Our team creates intuitive UI/UX designs and prototypes for a seamless user experience." },
      { icon: HardHat, title: "Development", description: "We write clean, efficient code to build a robust and scalable application." },
      { icon: Orbit, title: "Deployment", description: "We handle the launch process, ensuring a smooth and successful deployment." },
    ],
    benefits: [
      { icon: TrendingUp, title: "Scalable Architecture", description: "Our solutions are built to grow with your business, handling increased traffic and complexity." },
      { icon: BadgeDollarSign, title: "Transparent Pricing", description: "No hidden fees. We provide clear, upfront pricing for all our services." },
      { icon: HeartHandshake, title: "Expert Team", description: "Access a team of dedicated experts committed to your project's success." },
    ],
    faqs: [
      { question: "How long does it take to build a web app?", answer: "The timeline varies based on complexity, but a typical project takes 3-6 months from discovery to deployment." },
      { question: "What technologies do you use?", answer: "We specialize in modern stacks including React/Next.js for frontend, Node.js for backend, and a variety of databases and cloud providers." },
      { question: "Do you provide ongoing support?", answer: "Yes, we offer flexible support and maintenance packages to ensure your application remains up-to-date and secure." },
    ],
    relatedProjectIds: ['project-01', 'project-03'],
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
      { title: "App Store Optimization", description: "Maximizing visibility and downloads through strategic ASO techniques." }
    ],
    process: [
      { icon: Telescope, title: "Strategy", description: "We define your app's purpose, target users, and monetization strategy." },
      { icon: Brush, title: "Design", description: "We craft a beautiful and intuitive user interface that enhances the user experience." },
      { icon: HardHat, title: "Development", description: "Our developers build a high-quality app for iOS, Android, or both." },
      { icon: Orbit, title: "Launch", description: "We manage the app store submission process and support your launch marketing." },
    ],
    benefits: [
      { icon: TrendingUp, title: "Wider Reach", description: "Engage with your customers on the devices they use every day." },
      { icon: BadgeDollarSign, title: "Transparent Pricing", description: "Clear, upfront costs for development and maintenance." },
      { icon: HeartHandshake, title: "Experienced Team", description: "Our mobile developers are experts in the latest mobile technologies." },
    ],
    faqs: [
      { question: "Native or cross-platform?", answer: "The choice depends on your budget, timeline, and performance requirements. We can help you decide what's best for your project." },
      { question: "How much does an app cost?", answer: "App development costs vary widely. We provide a detailed quote after our initial discovery session." },
      { question: "Can you update an existing app?", answer: "Absolutely. We can take over existing projects to add new features, improve performance, or fix bugs." },
    ],
    relatedProjectIds: ['project-02', 'project-06'],
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
    ],
    process: [
      { icon: Search, title: "Research", description: "We analyze your audience and competitors to uncover key insights." },
      { icon: Brush, title: "Design", description: "From wireframes to high-fidelity mockups, we bring your vision to life." },
      { icon: Puzzle, title: "Testing", description: "We conduct usability tests to validate our designs and gather feedback." },
      { icon: HeartHandshake, title: "Handoff", description: "We provide developers with detailed specs and assets for a smooth implementation." },
    ],
    benefits: [
      { icon: TrendingUp, title: "Increased Engagement", description: "A great user experience keeps users coming back for more." },
      { icon: BadgeDollarSign, title: "Higher Conversion", description: "Intuitive design guides users towards your business goals." },
      { icon: HeartHandshake, title: "Stronger Brand", description: "A beautiful, consistent design strengthens your brand identity." },
    ],
    faqs: [
      { question: "What's the difference between UI and UX?", answer: "UX (User Experience) is about the overall feel of the experience, while UI (User Interface) is about the visual design and layout of the components." },
      { question: "What tools do you use?", answer: "Our team is proficient in Figma, Sketch, and Adobe XD, allowing us to create interactive prototypes and detailed design systems." },
      { question: "Can you redesign an existing product?", answer: "Yes, we love helping companies improve their products by redesigning them with a user-centered approach." },
    ],
    relatedProjectIds: ['project-03'],
  },
  {
    id: 7,
    icon: Wand2,
    title: "Logo Design",
    slug: "logo-design",
    description: "Creating a memorable and impactful visual identity for your brand.",
    gradient: "from-yellow-400 to-orange-500",
    details: ["Brand discovery", "Concept sketches", "Vector finalization", "Style guide"],
    longDescription: "A great logo is the cornerstone of your brand identity. Our design process focuses on creating a unique and timeless mark that effectively communicates your brand's values and resonates with your target audience. We deliver a complete logo package with guidelines for use across all media.",
    features: [
      { title: "Versatile Concepts", description: "Exploring a range of styles to find the perfect visual representation for your brand." },
      { title: "Vector Graphics", description: "Delivering scalable vector files that look sharp at any size, from a business card to a billboard." },
      { title: "Brand Guidelines", description: "Providing a comprehensive style guide to ensure consistent use of your new logo." }
    ],
    process: [
      { icon: Lightbulb, title: "Discovery", description: "We dive deep into your brand, audience, and industry to inform our design direction." },
      { icon: PenTool, title: "Conceptualization", description: "Our designers sketch and explore multiple concepts to find the most compelling ideas." },
      { icon: Brush, title: "Refinement", description: "We refine the chosen concepts based on your feedback, perfecting every curve and color." },
      { icon: Award, title: "Delivery", description: "You receive a full suite of logo files and a brand guide for successful implementation." },
    ],
    benefits: [
      { icon: Users, title: "Memorable First Impression", description: "A professional logo makes your brand stand out and captures attention." },
      { icon: Building2, title: "Strong Brand Identity", description: "Establish a consistent and recognizable brand presence across all platforms." },
      { icon: TrendingUp, title: "Builds Trust", description: "A well-designed logo signals professionalism and builds credibility with customers." },
    ],
    faqs: [
      { question: "How many logo concepts will I see?", answer: "Our standard package includes 3-5 initial concepts for you to review and provide feedback on." },
      { question: "What files will I receive?", answer: "You'll get a complete package including vector files (AI, EPS, SVG) and raster files (PNG, JPG) for both web and print." },
      { question: "How long does the logo design process take?", answer: "Typically, the process takes 2-4 weeks from initial discovery to final file delivery, depending on feedback rounds." },
    ],
    relatedProjectIds: [],
  },
  {
    id: 8,
    icon: Brush,
    title: "Graphic Design",
    slug: "graphic-design",
    description: "Producing stunning visual assets for marketing, branding, and digital products.",
    gradient: "from-teal-400 to-cyan-600",
    details: ["Marketing collateral", "Social media graphics", "Infographics", "Presentation design"],
    longDescription: "Our graphic design services help you communicate your message visually. From digital ad campaigns to print materials, we create compelling visuals that capture attention, tell your story, and drive action. We ensure all designs are consistent with your brand identity.",
    features: [
      { title: "Digital & Print", description: "Creating assets for everything from social media campaigns to trade show banners." },
      { title: "Marketing Materials", description: "Designing brochures, flyers, and digital ads that convert." },
      { title: "Brand Consistency", description: "Ensuring all visual communications are aligned with your brand's style and voice." }
    ],
    process: [
      { icon: Telescope, title: "Briefing", description: "We start by understanding your project goals, target audience, and key messaging." },
      { icon: Palette, title: "Design", description: "Our designers create initial concepts and mockups for your review." },
      { icon: Puzzle, title: "Feedback & Iteration", description: "We work with you to refine the designs until they are pixel-perfect." },
      { icon: Award, title: "Finalization", description: "We deliver all the final files in the required formats for web and print." },
    ],
    benefits: [
      { icon: TrendingUp, title: "Enhanced Engagement", description: "High-quality visuals are proven to increase engagement and interaction." },
      { icon: Users, title: "Clear Communication", description: "Effectively communicate complex information through infographics and visual storytelling." },
      { icon: Building2, title: "Professional Polish", description: "Elevate your brand with professional, high-quality design across all touchpoints." },
    ],
    faqs: [
      { question: "Can you create a full set of marketing materials?", answer: "Yes, we can design a complete package of digital and print materials to support your marketing campaigns." },
      { question: "What's your design style?", answer: "Our team is versatile and can adapt to your existing brand style or help you create a new one, from modern and minimalist to bold and illustrative." },
      { question: "Do you offer retainers for ongoing design needs?", answer: "Yes, we offer monthly retainer packages for businesses that need consistent, ongoing design support." },
    ],
    relatedProjectIds: [],
  },
  {
    id: 9,
    icon: Sparkles,
    title: "UI Redesign",
    slug: "ui-redesign",
    description: "Refreshing and modernizing your product's user interface for a better experience.",
    gradient: "from-indigo-500 to-purple-600",
    details: ["UI audit", "Modernization", "Component library update", "Usability improvements"],
    longDescription: "Is your app or website looking outdated? Our UI redesign service breathes new life into existing products. We conduct a thorough audit of your current interface, identify areas for improvement, and apply modern design principles to enhance usability, aesthetics, and overall user satisfaction.",
    features: [
      { title: "Interface Audit", description: "A detailed analysis of your current UI to identify pain points and opportunities." },
      { title: "Modern Design Trends", description: "Applying contemporary design patterns, typography, and color theory." },
      { title: "Design System Refresh", description: "Updating or creating a new component library for consistency and future scalability." }
    ],
    process: [
      { icon: Search, title: "Audit & Analysis", description: "We review your existing UI, user feedback, and analytics to pinpoint key issues." },
      { icon: Brush, title: "Redesign & Prototype", description: "We create new high-fidelity mockups and interactive prototypes of the improved interface." },
      { icon: Puzzle, title: "User Testing", description: "We validate the new design with real users to ensure it meets their needs and expectations." },
      { icon: HardHat, title: "Developer Handoff", description: "We provide a complete design system and clear specifications for seamless implementation." },
    ],
    benefits: [
      { icon: TrendingUp, title: "Improved User Satisfaction", description: "A modern, intuitive UI leads to happier users and higher retention." },
      { icon: BadgeDollarSign, title: "Increased Conversions", description: "By removing friction and improving clarity, we can boost conversion rates." },
      { icon: Rocket, title: "Competitive Edge", description: "Stay ahead of the competition with a fresh, modern look and feel." },
    ],
    faqs: [
      { question: "Will a redesign interrupt our service?", answer: "No, we work on the new design in parallel. Implementation can be phased to ensure a smooth transition with minimal disruption." },
      { question: "Is this a full UX overhaul or just a visual refresh?", answer: "It can be either. We can focus purely on visual modernization (a 'repaint') or a deeper redesign that also addresses underlying UX issues." },
      { question: "How do you ensure the new design is better?", answer: "We use a data-informed process, combining design principles with insights from your analytics and direct user feedback and testing." },
    ],
    relatedProjectIds: ['project-03'],
  },
  {
    id: 10,
    icon: SearchCode,
    title: "SEO Optimization",
    slug: "seo-optimization",
    description: "Improving your website's visibility on search engines to drive organic traffic.",
    gradient: "from-lime-500 to-green-600",
    details: ["Keyword research", "On-page SEO", "Technical SEO audit", "Link building"],
    longDescription: "Get discovered by more customers with our SEO optimization services. We use proven, white-hat techniques to improve your website's ranking on search engines like Google. Our comprehensive approach covers everything from technical optimization and content strategy to link building, all designed to increase your organic traffic and generate more leads.",
    features: [
      { title: "Technical SEO", description: "Optimizing your site's structure, speed, and mobile-friendliness for better crawling and indexing." },
      { title: "Content Strategy", description: "Identifying and targeting keywords your customers are searching for, and creating content that ranks." },
      { title: "Local SEO", description: "Putting your business on the map and helping local customers find you." }
    ],
    process: [
      { icon: Telescope, title: "SEO Audit", description: "We perform a comprehensive audit of your website to identify technical issues and opportunities." },
      { icon: Lightbulb, title: "Strategy & Planning", description: "We develop a customized SEO strategy based on keyword research and competitive analysis." },
      { icon: HardHat, title: "Implementation", description: "We execute on-page and technical optimizations to improve your site's health and relevance." },
      { icon: TrendingUp, title: "Reporting & Analysis", description: "We track your rankings, traffic, and conversions, providing regular reports on your progress." },
    ],
    benefits: [
      { icon: BadgeDollarSign, title: "Increased Organic Traffic", description: "Attract more qualified visitors to your website without paying for ads." },
      { icon: Building2, title: "Higher Quality Leads", description: "Reach customers who are actively searching for the products or services you offer." },
      { icon: Users, title: "Build Brand Authority", description: "Ranking high in search results builds trust and positions you as a leader in your industry." },
    ],
    faqs: [
      { question: "How long does it take to see results from SEO?", answer: "SEO is a long-term strategy. You can typically expect to see initial improvements within 3-6 months, with more significant results over time." },
      { question: "What is 'technical SEO'?", answer: "It refers to website and server optimizations that help search engine spiders crawl and index your site more effectively." },
      { question: "Is link building still important?", answer: "Yes, high-quality backlinks from reputable websites are still one of the most important ranking factors for search engines." },
    ],
    relatedProjectIds: [],
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
    ],
    process: [
      { icon: Search, title: "Assessment", description: "We evaluate your current infrastructure and define a cloud strategy." },
      { icon: HardHat, title: "Migration", description: "We seamlessly migrate your applications and data to the cloud with minimal downtime." },
      { icon: Orbit, title: "Automation", description: "We set up CI/CD pipelines and infrastructure as code for efficient management." },
      { icon: Telescope, title: "Optimization", description: "We continuously monitor and optimize your cloud environment for cost and performance." },
    ],
    benefits: [
      { icon: TrendingUp, title: "Scalability & Reliability", description: "Build on a foundation that can handle growth and ensure high availability." },
      { icon: BadgeDollarSign, title: "Cost Efficiency", description: "Optimize your cloud spend with our expert management and automation." },
      { icon: HeartHandshake, title: "Faster Releases", description: "Automated pipelines enable you to deploy new features more frequently and with more confidence." },
    ],
    faqs: [
      { question: "Which cloud provider is right for me?", answer: "The best provider depends on your specific needs. We have expertise in AWS, Google Cloud, and Azure and can recommend the best fit." },
      { question: "What is 'Infrastructure as Code'?", answer: "It's the practice of managing your cloud infrastructure using configuration files, which allows for automation, consistency, and version control." },
      { question: "Can you help reduce my cloud bill?", answer: "Yes, a major part of our service is cost optimization. We analyze your usage and implement strategies to reduce unnecessary spending." },
    ],
    relatedProjectIds: ['project-04'],
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
    ],
    process: [
      { icon: Search, title: "Threat Modeling", description: "We identify potential security threats and vulnerabilities in your system." },
      { icon: Puzzle, title: "Testing & Auditing", description: "Our experts conduct penetration tests and code audits to find weaknesses." },
      { icon: HardHat, title: "Remediation", description: "We provide actionable recommendations and help you fix the identified security issues." },
      { icon: Telescope, title: "Monitoring", description: "We offer ongoing monitoring to detect and respond to new threats as they emerge." },
    ],
    benefits: [
      { icon: TrendingUp, title: "Reduced Risk", description: "Protect your business from data breaches, financial loss, and reputational damage." },
      { icon: BadgeDollarSign, title: "Build Customer Trust", description: "Demonstrate your commitment to security and build trust with your users." },
      { icon: HeartHandshake, title: "Meet Compliance", description: "Ensure you meet the security requirements of regulations like GDPR, HIPAA, and SOC 2." },
    ],
    faqs: [
      { question: "How often should we conduct a security audit?", answer: "We recommend a full audit at least once a year, with more frequent penetration testing for critical systems, especially after major updates." },
      { question: "What's the outcome of a penetration test?", answer: "You'll receive a detailed report outlining the vulnerabilities we found, their potential impact, and clear recommendations for how to fix them." },
      { question: "Is our data safe with you during an audit?", answer: "Absolutely. We follow strict security protocols and sign non-disclosure agreements to ensure your data is always protected." },
    ],
    relatedProjectIds: [],
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
    ],
    process: [
      { icon: Lightbulb, title: "Feasibility Study", description: "We assess your data and goals to determine the best AI/ML approach." },
      { icon: HardHat, title: "Model Development", description: "Our data scientists build and train a custom model tailored to your needs." },
      { icon: Puzzle, title: "Integration", description: "We integrate the model into your existing applications and workflows via APIs." },
      { icon: Orbit, title: "Iteration", description: "We continuously monitor the model's performance and retrain it to improve accuracy over time." },
    ],
    benefits: [
      { icon: TrendingUp, title: "Process Automation", description: "Automate repetitive tasks and free up your team to focus on more strategic work." },
      { icon: BadgeDollarSign, title: "Data-Driven Insights", description: "Unlock valuable insights from your data to make smarter business decisions." },
      { icon: HeartHandshake, title: "Innovative Features", description: "Create unique, AI-powered features that give you a competitive edge." },
    ],
    faqs: [
      { question: "What kind of data do we need?", answer: "The more high-quality, relevant data you have, the better. We can help you with data collection and cleaning as part of our service." },
      { question: "Can you integrate with our existing software?", answer: "Yes, we typically deliver our ML models as APIs that can be easily integrated into any application." },
      { question: "How do we measure the ROI of an AI project?", answer: "We work with you to define key performance indicators (KPIs) upfront, such as cost savings from automation or revenue increases from personalization, to measure the project's success." },
    ],
    relatedProjectIds: ['project-05'],
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
  { name: 'Arun Charturvedi', role: 'Founder', bio: 'Visionary leader with 1+ years in tech innovation.', image: 'AC', color: 'from-blue-500 to-cyan-500' },
  { name: 'Aniket Debnath', role: 'Chief Technology Officer & CEO', bio: 'Architect of scalable cloud solutions and modern web tech.', image: 'AD', color: 'from-purple-500 to-pink-500' },
  { name: 'Ujjval Chaturvedi', role: 'Head of Design', bio: 'Award-winning UI/UX designer creating intuitive experiences.', image: 'MJ', color: 'from-pink-500 to-rose-500' },
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
    title: "Our Core Services",
    items: [
      { title: "Web Development", description: "High-performance, scalable web apps.", href: "/services/web-development", icon: Code },
      { title: "Mobile App Development", description: "Engaging native & cross-platform apps.", href: "/services/mobile-app-development", icon: Smartphone },
      { title: "UI/UX Design", description: "Beautiful, user-centric interfaces.", href: "/services/ui-ux-design", icon: Palette },
      { title: "Cloud & DevOps", description: "Robust cloud infrastructure and CI/CD.", href: "/services/cloud-devops", icon: Cloud },
      { title: "Security & Audits", description: "Secure your apps against threats.", href: "/services/security-audits", icon: Shield },
      { title: "AI & Machine Learning", description: "Build intelligent, automated apps.", href: "/services/ai-machine-learning", icon: BrainCircuit },
      { title: "Logo Design", description: "Create a memorable brand identity.", href: "/services/logo-design", icon: Wand2 },
      { title: "Graphic Design", description: "Stunning visuals for your brand.", href: "/services/graphic-design", icon: Brush },
      { title: "UI Redesign", description: "Modernize your existing UI.", href: "/services/ui-redesign", icon: Sparkles },
      { title: "SEO Optimization", description: "Improve your search ranking.", href: "/services/seo-optimization", icon: SearchCode },
      { title: "CRM Platform", description: "Organize leads and client info.", href: "/services/crm-platform", icon: Users },
      { title: "Cloud Services", description: "Reliable, secure cloud hosting.", href: "/services/cloud-hosting", icon: Server },
    ],
  },
];

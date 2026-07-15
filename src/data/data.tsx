import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/portfolio/portfolio-1.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import testimonialImage from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Waqas Awan - Software Engineer',
  description: "Helping startups and brands to craft expressive and engaging solutions for their software needs.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Waqas`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
         <strong className="text-stone-100">Elevate Your Vision: Where Design Meets Digital Brilliance</strong>
      </p>
       <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
       Helping startups and brands to 
          craft expressive and engaging solutions for their software needs.
      </p> 
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p> */}
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1f4IQVihUYkxUoIvM2A0bI3U7vfstedxG/view?usp=drive_link',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Senior Backend Infrastructure Engineer with 9+ years designing scalable, full-stack architectures deployed in
Docker/ Kubernetes on AWS and Azure. Proven track record building high-concurrency, event-driven services and
AI-driven automation workflows while leading CI/ CD, infrastructure-as-code, and observability initiatives. Adept at
delivering maintainable solutions across cloud platforms and cross-functional teams, with emphasis on
performance, security, scalability, and observability.`,
  aboutItems: [
    {label: 'Location', text: 'United Kingdom', Icon: MapIcon},
    // {label: 'Age', text: '32', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    // {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Gloucestershire', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  // {
  //   name: 'Spoken languages',
  //   skills: [
  //     {
  //       name: 'English',
  //       level: 10,
  //     },
  //     {
  //       name: 'Urdu',
  //       level: 4,
  //     },
  //     {
  //       name: 'Hindi',
  //       level: 3,
  //     },
  //   ],
  // },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Next.js',
        level: 6,
      },
{
        name: 'Vue.js',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Golang',
        level: 6,
      },
      {
        name: 'Nest',
        level: 8,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 7,
      },
      {
        name: 'Kotlin / Java (Android)',
        level: 8,
      },
      {
        name: 'Swift / Objective-C (iOS)',
        level: 6,
      },
    ],
  },
   {
    name: 'SaaS Development',
    skills: [
      {
        name: 'AWS/GCP/Azure',
        level: 8,
      },
      {
        name: 'Microservices',
        level: 7,
      },
      {
        name: 'Docker & Kubernetes',
        level: 6,
      },
      
      {
        name: 'CI/CD Pipelines',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Augest 2024',
    location: 'University of Gloucestershire',
    title: 'Masters in Data Science',
    content: <p className="text-sm text_color_dark">During my Master's studies at the University of Gloucestershire, I developed a strong foundation in data science, machine learning, and artificial intelligence through a combination of academic coursework, practical projects, and independent research.</p>,
  },
  {
    date: 'Sept 2013 - Feb 2018',
    location: 'IQRA University',
    title: 'Bachelor of Computer Science',
    content: <p className="text-sm text_color_dark">I developed a strong understanding of fundamental computing principles and software development practices. The programme provided comprehensive knowledge of programming, algorithms, database systems, computer networks, software engineering, operating systems, and system design.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2026 - Present',
    location: 'Micro1 Ltd',
    title: 'AI Evaluation Specialist | Prompt Engineer | LLM Reviewer',
    content: (
      <p className="text-sm text_color_dark">
        - Creating prompts, rubrics, and evaluation frameworks for LLMs.<br />
 - Skilled in assessing AI-generated content for accuracy, relevance, reasoning, safety, and instruction adherence.<br />
 - Experienced in response ranking, data annotation, hallucination detection, RLHF-style evaluation workflows, and prompt optimisation.<br />
Strong analytical skills backed by 9+ years of software engineering experience.
      </p>
    ),
  },
  {
    date: 'Oct 2022 - March 2026',
    location: 'Open Clouds Ltd',
    title: 'Full Stack AI Engineer',
    content: (
      <p className="text-sm text_color_dark">
        - Designed containerized microservices with NestJS and Docker, orchestrated via
Kubernetes on AWS EKS, achieving  99.9% uptime; improved availability by 15% YOY.<br />
- Implemented infrastructure-as-code using Terraform/ CloudFormation to provision
VPC, RDS, and SQS, reducing provisioning time by 70% and MTTR by 25%.<br />
- Developed high-concurrency APIs (10k RPS) with Node.js/ TypeScript, leveraging Redis
caching and AWS Lambda for burst traffic; sub-100 ms P99 latency under load.<br />
- Integrated OpenAI APIs to power AI-generated content pipelines; automated image
generation and text summarization, reducing manual content creation by 85%.<br />
- Built CI/ CD pipelines with GitHub Actions and Docker, delivering zero-downtime
releases and 30% faster deployment cycles; cut rollback incidents by 40%.
      </p>
    ),
  },
  {
    date: 'July 2020 - Sept 2022',
    location: 'I2Prod',
    title: 'Full Stack / System Engineer',
    content: (
      <p className="text-sm text_color_dark">
       - Architected event-driven data pipelines using AWS SNS/ SQS and Kinesis for real-time
processing of millions of events per day; end-to-end latency under 150 ms.<br />
- Migrated legacy services to serverless Node.js Lambda functions, cutting operational
costs by 40% while maintaining sub-100 ms latency for critical paths.<br />
- Authored Terraform modules for repeatable provisioning of VPC, RDS, and
ElasticCache, enabling multi-region failover and 99.95% regional resilience.<br />
- Implemented structured logging (Winston + CloudWatch) and metrics (Prometheus) for
end-to-end observability; reduced MTTD by 60%.<br />
- Led Git branching strategy (GitFlow) and automated testing (Cypress, Playwright)
integrated into GitLab CI; improved test coverage to 92%.<br />
      </p>
    ),
  },
  {
    date: 'March 2018 - June 2020',
    location: 'The Coding Machine',
    title: 'Web Developer',
    content: (
      <p className="text-sm text_color_dark">
      - Built full-stack web applications using React, Vue.js, and Node.js; improved
development speed by 15% through tooling and reusable components.<br />
- Developed REST and GraphQL APIs with optimized data handling; reduced
deployment time by 30% using Docker and CI/ CD pipelines.<br />
- Collaborated with product and QA teams to deliver stable production systems;
achieved 99.8% uptime across applications.<br />
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Sehr Noor - United Kingdom',
      text: 'Fantastic experience! Waqas Ahmad was professional, fast, and extremely easy to work with. The quality of his work was top-notch, and he made the whole process smooth and stress-free. Highly recommend him to anyone!',
      image:'',
    },
    {
      name: 'vitaliy123123 - Ukraine',
      text: 'Thank you! My project has been done perfectly! Very professional freelancer. I strongly recommend him to work with',
 image:''},
    {
      name: 'miguelalejan967 - Maxico',
      text: ' Excelente muy atento y rápido.',
 image:''},
   {
      name: 'bilal_sarwar - Pakistan',
      text: ' good experience.. i recommended all... He is most excellence developer.. i will again work with him',
 image:''},
   {
      name: 'lukaszadasik - Ireland',
      text: ' We had long conversations but once everything was discussed in detail i got exactly what I wanted :) I recommend this seller.',
 image:''},
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'waqas.appdev@gmail.com',
      href: 'mailto:waqas.appdev@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'London, UK',
      href: 'https://www.google.com/maps/place/London/@51.5251173,-0.0619449,13z/data=!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      type: ContactType.LinkedIn,
      text: '@waqas-ahmad-19a800305',
      href: 'https://www.linkedin.com/in/waqas-ahmad-19a800305/',
    },
    {
      type: ContactType.Github,
      text: 'webstar923',
      href: 'https://github.com/webstar923',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/webstar923'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/waqas-ahmad-19a800305/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];

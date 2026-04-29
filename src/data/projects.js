export const projects = [
  {
    id: 1,
    title: "TaskFlow",
    category: "fullstack",
    featured: true,
    image: "/project-images/TaskFlow.png",
    description:
      "A full-stack task management application built with the MERN stack that allows users to create, organize, and manage daily tasks through a modern and responsive interface. The application includes secure authentication, profile management, task categorization, and cloud-based profile image uploads, providing a practical real-world productivity solution.",
    shortDescription:
      "A MERN task management app with authentication, profile updates, and cloud image uploads.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Cloudinary"
    ],
    github: "https://github.com/BensonTochukwu/TaskFlow-MERN-Project",
    demo: "https://taskflow-ng.vercel.app",
    status: "Completed",
    year: "2026",
    duration: "2-4 weeks",
    team: "Solo Project",
    client: "Personal Project",
    rating: 4.9,
    features: [
      "User authentication and protected routes",
      "Create, update, and delete tasks",
      "Task completion tracking",
      "Profile editing with image upload",
      "Cloudinary profile image storage",
      "Redux state management",
      "Responsive dashboard UI",
      "Persistent MongoDB data storage"
    ],
    challenges: [
      "Handling secure user authentication",
      "Managing global state across multiple components",
      "Integrating image uploads with Cloudinary",
      "Fixing CORS and deployment-related issues",
      "Synchronizing frontend state with backend updates"
    ],
    results: [
      "Built a production-style full-stack application",
      "Improved understanding of MERN architecture",
      "Strengthened debugging and deployment skills",
      "Demonstrates practical backend integration experience"
    ],
    testimonial: {
      text: "A full-stack productivity application that demonstrates practical MERN development and real-world problem solving.",
      author: "Personal Project",
      role: "Full Stack Developer"
    }
  },
  {
    id: 2,
    title: "Vaulta",
    category: "frontend",
    featured: true,
    image: "/project-images/vaulta.png",
    description:
      "A modern digital agency website designed for Vaulta to showcase high-converting web design and paid advertising services. The platform was built with React and custom CSS to create a polished, responsive experience featuring animated hero particles, horizontal project sliders, video integration, floating WhatsApp contact, client testimonials, and a conversion-focused contact section tailored for lead generation.",

    shortDescription:
      "A premium React agency website built to convert visitors into leads through modern UI and responsive design.",

    technologies: [
      "React",
      "JavaScript",
      "CSS3",
      "Responsive Design",
      "Ionicons"
    ],

    github: "https://github.com/BensonTochukwu/vaulta",
    demo: "https://vaulta.ng",

    status: "Completed",
    year: "2026",
    duration: "1-2 weeks",
    team: "Solo Project",
    client: "Vaulta",

    rating: 4.9,

    features: [
      "Responsive mobile-first design",
      "Animated floating hero particles",
      "Auto-scrolling project showcase",
      "Video-enabled about section",
      "WhatsApp floating contact button",
      "Client testimonial slider",
      "Modern service cards",
      "Split contact layout",
      "Custom branding integration",
      "Smooth scrolling navigation"
    ],

    challenges: [
      "Creating a premium agency-style UI without using a framework",
      "Balancing animation with performance",
      "Building a responsive horizontal project slider",
      "Integrating floating UI elements cleanly",
      "Maintaining design consistency across all sections"
    ],

    results: [
      "Created a conversion-focused business website",
      "Improved frontend animation skills",
      "Strengthened responsive design techniques",
      "Demonstrates premium client-ready frontend work",
      "Built a professional lead-generation interface"
    ],

    testimonial: {
      text: "A polished digital agency website that combines branding, responsiveness, and conversion-focused design into a professional client-ready experience.",
      author: "Personal Project",
      role: "Frontend Developer"
    }
  },
  {
    id: 3,
    title: "Aku Group Engineering Services",
    category: "frontend",
    featured: true,
    image: "/project-images/aku-group.png",
    description:
      "A professional business website built for Aku Group Engineering Services, a company specializing in plumbing, construction, and home maintenance. The site was designed to present their services clearly, attract potential clients, and provide a clean, responsive user experience.",
    shortDescription:
      "Business website for an engineering services company with a clean and responsive UI.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BensonTochukwu/Aku-group",
    demo: "https://bensontochukwu.github.io/Aku-group/",
    status: "Completed",
    year: "2026",
    duration: "1-2 weeks",
    team: "Solo Project",
    client: "Aku Group Engineering Services",
    rating: 4.8,
    features: [
      "Clean and professional business layout",
      "Responsive design for all screen sizes",
      "Service showcase sections",
      "Contact and inquiry section",
      "Smooth navigation and scrolling",
      "Modern UI styling",
    ],
    challenges: [
      "Designing a layout suitable for a service-based business",
      "Presenting multiple services clearly",
      "Ensuring responsiveness across devices",
      "Balancing simplicity with professionalism",
    ],
    results: [
      "Delivered a professional online presence for the business",
      "Improved user accessibility and navigation",
      "Demonstrates real-world project experience",
      "Fully responsive and deployed website",
    ],
    testimonial: {
      text: "A clean and professional website that effectively represents a real-world business and its services.",
      author: "Client Project",
      role: "Frontend Developer",
    },
  },
  {
    id: 4,
    title: "Personal Portfolio",
    category: "frontend",
    featured: false,
    image: "/project-images/Portfolio.png",
    description:
      "A modern personal portfolio website built to showcase my projects, skills, and services. Designed with a focus on clean UI, responsiveness, and smooth user experience, it reflects my approach to frontend development and growing full stack capabilities.",
    shortDescription:
      "Personal portfolio showcasing projects, skills, and frontend development expertise.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    github: "https://github.com/BensonTochukwu/Bensons-Portfolio",
    demo: "https://bensons-portfolio.vercel.app/",
    status: "Completed",
    year: "2026",
    duration: "Ongoing",
    team: "Solo Project",
    client: "Personal Project",
    rating: 4.8,
    features: [
      "Modern and responsive design",
      "Project showcase section",
      "Dynamic UI components",
      "Smooth animations and transitions",
      "Contact form integration",
      "Optimized performance",
      "Clean and structured codebase",
    ],
    challenges: [
      "Designing a clean and unique personal brand",
      "Structuring content for clarity and impact",
      "Ensuring responsiveness across all devices",
      "Maintaining performance with animations",
    ],
    results: [
      "Professional online presence",
      "Showcases frontend and UI skills effectively",
      "Improved component structuring and design thinking",
      "Deployed and publicly accessible",
    ],
    testimonial: {
      text: "A well-crafted portfolio that clearly presents skills, projects, and development approach.",
      author: "Self Assessment",
      role: "Frontend Developer",
    },
  },
  {
    id: 5,
    title: "Growvia",
    category: "frontend",
    featured: false,
    image: "/project-images/growvia.png",
    description:
      "A modern SEO and business growth agency website built to help brands showcase search optimization, content strategy, and online visibility services. Developed with React and Tailwind CSS, the platform delivers a clean, responsive experience with engaging layouts, service highlights, trust sections, and conversion-focused call-to-actions designed to turn visitors into potential clients.",

    shortDescription:
      "A modern SEO agency website built with React and Tailwind CSS for lead generation and brand growth.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
      "Framer Motion"
    ],

    github: "https://github.com/BensonTochukwu/growvia",
    demo: "https://growvia.vercel.app",

    status: "Completed",
    year: "2026",
    duration: "1-2 weeks",
    team: "Solo Project",
    client: "Personal Project",

    rating: 4.9,

    features: [
      "Modern responsive layout",
      "SEO service showcase sections",
      "Animated hero section",
      "Trust-building statistics display",
      "Smooth scrolling navigation",
      "Conversion-focused CTA sections",
      "Mobile-first design",
      "Optimized performance"
    ],

    challenges: [
      "Creating a distinct agency identity separate from previous projects",
      "Balancing modern design with readability",
      "Maintaining consistent spacing across sections",
      "Improving responsiveness on smaller devices",
      "Structuring content for higher conversion"
    ],

    results: [
      "Built a professional SEO agency website",
      "Improved Tailwind CSS workflow",
      "Strengthened React component structure",
      "Enhanced responsive UI design skills",
      "Added another client-style project to portfolio"
    ],

    testimonial: {
      text: "A polished agency website that combines modern design, responsiveness, and conversion-driven structure for a professional business presence.",
      author: "Personal Project",
      role: "Frontend Developer"
    }
  },
  {
    id: 6,
    title: "CraveHub",
    category: "frontend",
    featured: false,
    image: "/project-images/cravehub.png",
    description:
      "A modern fast food website built with HTML, CSS, and JavaScript, designed to provide an engaging and responsive user experience. The platform showcases menu items, promotions, and smooth navigation tailored for food businesses.",
    shortDescription:
      "Fast food website with responsive design and interactive UI.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BensonTochukwu/crave-hub",
    demo: "https://bensontochukwu.github.io/crave-hub/",
    status: "Completed",
    year: "2025",
    duration: "2 weeks",
    team: "Solo Project",
    client: "Personal Project",
    rating: 4.5,
    features: [
      "Responsive design for all devices",
      "Interactive menu display",
      "Smooth scrolling navigation",
      "Modern UI layout",
      "Mobile-friendly interface",
      "Clean and structured code",
    ],
    challenges: [
      "Designing an engaging food-themed UI",
      "Ensuring responsiveness across devices",
      "Implementing smooth interactions with JavaScript",
    ],
    results: [
      "Fully responsive website",
      "Improved UI/UX design skills",
      "Demonstrates real-world business layout",
    ],
    testimonial: {
      text: "A clean and engaging fast food website showcasing strong frontend fundamentals.",
      author: "Self Assessment",
      role: "Frontend Developer",
    },
  },
  {
    id: 7,
    title: "Bookly",
    category: "frontend",
    featured: false,
    image: "/project-images/bookly.png",
    description:
      "A book platform interface built with HTML, CSS, and JavaScript, allowing users to explore books in a clean and structured layout. Focused on usability, responsiveness, and interactive elements.",
    shortDescription:
      "Book platform UI with responsive layout and clean design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BensonTochukwu/Bookly",
    demo: "https://bensontochukwu.github.io/Bookly/",
    status: "Completed",
    year: "2025",
    duration: "2 weeks",
    team: "Solo Project",
    client: "Personal Project",
    rating: 4.5,
    features: [
      "Clean book listing interface",
      "Responsive layout",
      "Interactive UI elements",
      "Organized content structure",
      "Smooth navigation",
    ],
    challenges: [
      "Structuring content for readability",
      "Designing a user-friendly layout",
      "Maintaining responsiveness",
    ],
    results: [
      "Improved UI structuring skills",
      "Demonstrates content-driven design",
      "Responsive and accessible interface",
    ],
    testimonial: {
      text: "A well-structured platform highlighting clean UI and frontend development skills.",
      author: "Self Assessment",
      role: "Frontend Developer",
    },
  },
  {
    id: 8,
    title: "Busway",
    category: "frontend",
    featured: false,
    image: "/project-images/busway.png",
    description:
      "A bus travel platform interface built with HTML, CSS, and JavaScript, designed to simulate a transportation booking experience with a focus on layout, responsiveness, and usability.",
    shortDescription:
      "Travel platform UI focused on booking experience and responsiveness.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BensonTochukwu/bus-way",
    demo: "https://bensontochukwu.github.io/bus-way/",
    status: "Completed",
    year: "2025",
    duration: "2 weeks",
    team: "Solo Project",
    client: "Personal Project",
    rating: 4.5,
    features: [
      "Travel booking interface design",
      "Responsive layout",
      "Interactive elements",
      "Clean navigation structure",
      "Mobile-friendly UI",
    ],
    challenges: [
      "Designing a realistic booking interface",
      "Handling layout complexity",
      "Ensuring smooth responsiveness",
    ],
    results: [
      "Demonstrates real-world application design",
      "Improved layout structuring",
      "Responsive and user-friendly interface",
    ],
    testimonial: {
      text: "A practical travel platform UI demonstrating strong layout and responsiveness skills.",
      author: "Self Assessment",
      role: "Frontend Developer",
    },
  },
  {
    id: 9,
    title: "Sofora",
    category: "frontend",
    featured: false,
    image: "/project-images/sofora.png",
    description:
      "An interior design store website built with HTML, CSS, and JavaScript, focusing on aesthetics, layout design, and a visually appealing user experience.",
    shortDescription:
      "Interior design store website with clean layout and modern UI.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BensonTochukwu/sofora",
    demo: "https://bensontochukwu.github.io/sofora/",
    status: "Completed",
    year: "2025",
    duration: "2 weeks",
    team: "Solo Project",
    client: "Personal Project",
    rating: 4.5,
    features: [
      "Modern interior design layout",
      "Responsive design",
      "Clean visual hierarchy",
      "Interactive UI elements",
      "Smooth user experience",
    ],
    challenges: [
      "Creating visually appealing layouts",
      "Balancing design and usability",
      "Maintaining responsiveness",
    ],
    results: [
      "Strong focus on UI/UX design",
      "Improved styling and layout skills",
      "Professional presentation",
    ],
    testimonial: {
      text: "A visually appealing project showcasing strong frontend design and layout skills.",
      author: "Self Assessment",
      role: "Frontend Developer",
    },
  }
];

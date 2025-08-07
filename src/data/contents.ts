import { Mail, Youtube, Linkedin, Github, Twitter, Code, Lightbulb, Users, Zap, 
  // ExternalLink, 
  // Play, 
  MapPin, Phone } from "lucide-react";

// Navigation items
export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Tutorials", href: "#tutorials" },
  { name: "Contact", href: "#contact" },
];

// Social links
export const socialLinks = [
  { icon: Mail, href: "mailto:abuathman83@gmail.com", label: "Email" },
  { icon: Youtube, href: "https://www.youtube.com/@programwithabu", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abubakar-athman/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/iAthman83", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/iathman83", label: "Twitter" },
];

// Hero section content
export const heroContent = {
  greeting: "Hello, I'm",
  name: "Abu Athman",
  title: "A dynamic full stack software developer with a talent for creating innovative solutions that drive business success.",
  profileImage: "https://programwithabu.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait-rounded-webp.a101dff7.webp&w=3840&q=75",
  badges: [
    { text: "Full Stack Dev", position: "top-right" },
    { text: "Content Creator", position: "bottom-left" }
  ]
};

// About section content
export const aboutContent = {
  title: "About Me",
  subtitle: "Who am I?",
  paragraphs: [
    "Welcome to my world! If you're reading this, chances are you're wondering who I am and what makes me tick. Well, I'm glad you asked!",
    "As a highly motivated and skilled software developer, I have a passion for creating efficient and effective solutions to complex problems. I am confident in my ability to deliver high-quality results on time and within budget.",
    "My love for technology and programming drives me to continuously learn and stay up to date with the latest industry trends and developments. I also like to share my knowledge through video tutorials on my YouTube channel."
  ],
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "100+" },
    { label: "Happy Clients", value: "50+" },
    { label: "Learning", value: "24/7" }
  ],
  skills: [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Expert in modern web technologies, from React to Node.js"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Innovative approach to complex technical challenges"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communication and leadership skills"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Building fast, scalable, and efficient applications"
    }
  ]
};

// Portfolio projects
export const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with Nextjs, Redux, and Zustand. Features include user authentication, cart management, and product listing.",
    image: "https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Vue", "Pinia", "API"],
    liveUrl: "https://coolabee.vercel.app/",
    githubUrl: "https://github.com/iAthman83/coolabee-ecommerce-website-vue",
    featured: true
  },
  {
    title: "Blog App",
    description: "I build this app to show my students on youtube on how to integrate Nextjs with Sanity CMS",
    image: "https://images.unsplash.com/photo-1638342863994-ae4eee256688?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["NextsJS", "Sanity CMS"],
    liveUrl: "https://myawesomeblog.vercel.app/",
    githubUrl: "https://github.com/iAthman83/program-with-abu-sanity-blog-backend",
    featured: true
  },
  // {
  //   title: "Weather Dashboard",
  //   description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
  //   image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
  //   technologies: ["Vue.js", "OpenWeather API", "Chart.js", "CSS3"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false
  // },
  // {
  //   title: "Portfolio Website",
  //   description: "Responsive portfolio website built with modern web technologies, featuring smooth animations and optimized performance.",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  //   technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false
  // }
];

// Contact information
export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "abuathman83@gmail.com",
    href: "mailto:abuathman83@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available Worldwide"
  }
];

// Footer content
export const footerContent = {
  brand: {
    name: "Abu Athman",
    description: "A passionate full stack software developer creating innovative solutions and sharing knowledge through video tutorials. Let's build something amazing together."
  },
  quickLinks: [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Tutorials", href: "#tutorials" },
    { name: "Contact", href: "#contact" },
  ],
  newsletter: {
    title: "Stay Updated",
    description: "Subscribe to my YouTube channel for the latest tutorials and tips.",
    buttonText: "Subscribe"
  }
};
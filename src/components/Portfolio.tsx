import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";
import { projects } from "@/data/contents";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  // const projects = [
  //   {
  //     title: "E-commerce Platform",
  //     description:
  //       "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and inventory management.",
  //     image:
  //       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  //     technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
  //     liveUrl: "#",
  //     githubUrl: "#",
  //     featured: true,
  //   },
  //   {
  //     title: "Task Management App",
  //     description:
  //       "Collaborative task management application with real-time updates, team collaboration features, and advanced filtering.",
  //     image:
  //       "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  //     technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
  //     liveUrl: "#",
  //     githubUrl: "#",
  //     featured: true,
  //   },
  //   {
  //     title: "Weather Dashboard",
  //     description:
  //       "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
  //     image:
  //       "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
  //     technologies: ["Vue.js", "OpenWeather API", "Chart.js", "CSS3"],
  //     liveUrl: "#",
  //     githubUrl: "#",
  //     featured: false,
  //   },
  //   {
  //     title: "Portfolio Website",
  //     description:
  //       "Responsive portfolio website built with modern web technologies, featuring smooth animations and optimized performance.",
  //     image:
  //       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  //     technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
  //     liveUrl: "#",
  //     githubUrl: "#",
  //     featured: false,
  //   },
  // ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My <span className="text-primary">Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              passion for creating innovative solutions.
            </p>
          </div>

          {/* Featured projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Featured Projects
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} featured />
              ))}
            </div>
          </div>

          {/* Other projects */}
          {/* <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div> */}

          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <Github className="mr-2 h-5 w-5" />
              <Link href={"https://github.com/iAthman83"}>
                View All Projects on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  featured = false,
}: {
  project: any;
  featured?: boolean;
}) => (
  <Card
    className={`group overflow-hidden bg-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-border/50 ${
      featured ? "lg:col-span-1" : ""
    }`}
  >
    <div className="relative overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={300}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
          <ExternalLink className="h-4 w-4" />
        </Button>
        <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
          <Github className="h-4 w-4" />
        </Button>
      </div>
    </div>

    <div className="p-6">
      <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h4>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech: string, index: number) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            {tech}
          </Badge>
        ))}
      </div>

      <div className="flex gap-3">
        <Button size="sm" className="flex-1 cursor-pointer">
          <Play className="mr-2 h-4 w-4" />
          Live Demo
        </Button>
        <Button size="sm" variant="outline" className="flex-1 cursor-pointer">
          <Github className="mr-2 h-4 w-4" />
          Code
        </Button>
      </div>
    </div>
  </Card>
);

export default Portfolio;

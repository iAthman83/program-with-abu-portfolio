"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Calendar, Clock } from "lucide-react";

const Tutorials = () => {
  const tutorials = [
    {
      title: "Securing Routes in Your React App with Firebase",
      description:
        "Learn how to secure protected routes in your app using Firebase authentication",
      thumbnail:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=340&fit=crop",
      duration: "1:07:00",
      views: "3K",
      publishedAt: "2 years ago",
      tags: ["React", "Firebase"],
      featured: true,
      link: "https://www.youtube.com/embed/b43uPnSM2Ow",
    },
    {
      title: "ReactJS Redux Crash Course: Build a Simple Todo List",
      description:
        "Learn how to build a simple todo list app using ReactJS and Redux",
      thumbnail:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=340&fit=crop",
      duration: "1:09:53",
      views: "2K",
      publishedAt: "2 years ago",
      tags: ["React.JS", "Redux"],
      featured: true,
      link: "https://www.youtube.com/embed/fEWzDX7BuwU",
    },
    {
      title: "Advanced TypeScript Patterns",
      description:
        "Dive deep into advanced TypeScript patterns and techniques for better code organization.",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=340&fit=crop",
      duration: "32:18",
      views: "18.7K",
      publishedAt: "3 weeks ago",
      tags: ["TypeScript", "Patterns", "Advanced"],
      featured: false,
    },
    {
      title: "Node.js REST API with Express & MongoDB",
      description:
        "Complete guide to building a RESTful API with authentication and database integration.",
      thumbnail:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=340&fit=crop",
      duration: "38:45",
      views: "22.1K",
      publishedAt: "1 month ago",
      tags: ["Node.js", "Express", "MongoDB"],
      featured: false,
    },
    {
      title: "React Performance Optimization",
      description:
        "Learn techniques to optimize React applications for better performance and user experience.",
      thumbnail:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=340&fit=crop",
      duration: "28:12",
      views: "15.9K",
      publishedAt: "2 months ago",
      tags: ["React", "Performance", "Optimization"],
      featured: false,
    },
    {
      title: "CSS Grid & Flexbox Mastery",
      description:
        "Master modern CSS layout techniques with practical examples and real-world projects.",
      thumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=340&fit=crop",
      duration: "41:30",
      views: "31.2K",
      publishedAt: "2 months ago",
      tags: ["CSS", "Layout", "Responsive"],
      featured: false,
    },
  ];

  const featuredTutorials = tutorials.filter((t) => t.featured);
  const otherTutorials = tutorials.filter((t) => !t.featured);

  return (
    <section id="tutorials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Video <span className="text-primary">Tutorials</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I share my knowledge through comprehensive video tutorials on my
              YouTube channel. Learn modern web development techniques and best
              practices.
            </p>
          </div>

          {/* Channel stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in">
            <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">700+</div>
              <div className="text-sm text-muted-foreground">Subscribers</div>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Tutorials</div>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">100K+</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
              <div className="text-3xl font-bold text-primary mb-2">Weekly</div>
              <div className="text-sm text-muted-foreground">New Content</div>
            </Card>
          </div>

          {/* Featured tutorial */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Featured Tutorial
            </h3>
            <div className="grid lg:grid-cols-2 gap-8 h-[40rem] lg:h-[25rem]">
              {featuredTutorials.map((tutorial, index) => (
                <FeaturedTutorialCard key={index} tutorial={tutorial} />
              ))}
            </div>
          </div>

          {/* Other tutorials */}
          {/* <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Latest Tutorials
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherTutorials.map((tutorial, index) => (
                <TutorialCard key={index} tutorial={tutorial} />
              ))}
            </div>
          </div> */}

          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <Button
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() =>
                window.open("https://youtube.com/@programwithabu", "_blank")
              }
            >
              <Play className="mr-2 h-5 w-5" />
              Subscribe to My Channel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedTutorialCard = ({ tutorial }: { tutorial: any }) => (
  <Card className="group overflow-hidden bg-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-border/50 h-full">
    <iframe
      src={tutorial.link}
      title={tutorial.title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </Card>
);

const TutorialCard = ({ tutorial }: { tutorial: any }) => (
  <Card className="group overflow-hidden bg-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-border/50">
    <div className="relative overflow-hidden">
      <img
        src={tutorial.thumbnail}
        alt={tutorial.title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <Button className="bg-primary hover:bg-primary/90 rounded-full h-12 w-12 p-0">
          <Play className="h-5 w-5" />
        </Button>
      </div>
      <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
        {tutorial.duration}
      </div>
    </div>

    <div className="p-4">
      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
        {tutorial.title}
      </h4>

      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
        <div className="flex items-center gap-1">
          <Users className="h-3 w-3" />
          {tutorial.views}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {tutorial.publishedAt}
        </div>
      </div>

      <div className="flex flex-wrap gap-1">
        {tutorial.tags.slice(0, 2).map((tag: string, index: number) => (
          <Badge
            key={index}
            variant="secondary"
            className="text-xs bg-primary/10 text-primary"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  </Card>
);

export default Tutorials;

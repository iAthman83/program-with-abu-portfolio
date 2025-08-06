"use client";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Youtube,
  Twitter,
  Heart,
  Code,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: "mailto:abuathman83@gmail.com", label: "Email" },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@programwithabu",
      label: "YouTube",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abubakar-athman/",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/iAthman83", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/iathman83", label: "Twitter" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Tutorials", href: "#tutorials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary rounded-lg">
                <Code className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Abu Athman</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              A passionate full stack software developer creating innovative
              solutions and sharing knowledge through video tutorials. Let's
              build something amazing together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-background hover:bg-primary rounded-xl transition-all duration-300 transform hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Stay Updated</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Subscribe to my YouTube channel for the latest tutorials and tips.
            </p>
            <Button
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
              onClick={() =>
                window.open("https://www.youtube.com/@programwithabu", "_blank")
              }
            >
              <Youtube className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border/50 mt-12 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Abu Athman. Made with</span>
              <Heart className="h-4 w-4 text-primary" />
              <span>and lots of coffee</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

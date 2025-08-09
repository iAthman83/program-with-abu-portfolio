import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Youtube, Twitter, Icon } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background opacity-50" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in">
              <p className="text-lg text-muted-foreground mb-4">
                Hello, I&apos;m
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Abu <span className="text-primary">Athman</span>
              </h1>
              <div className="relative mb-8">
                <h2 className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  A dynamic{" "}
                  <span className="text-primary font-semibold">
                    full stack software developer
                  </span>{" "}
                  with a talent for creating innovative solutions that drive
                  business success.
                </h2>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-right">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Youtube className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Watch Tutorials
              </Button>
            </div>

            {/* Social links */}
            <div
              className="flex gap-4 justify-center lg:justify-start mt-8 animate-fade-in-right"
              style={{ animationDelay: "0.3s" }}
            >
              <SocialLink
                href="mailto:abuathman83@gmail.com"
                icon={Mail}
                label="Email"
              />
              <SocialLink
                href="https://www.youtube.com/@programwithabu"
                icon={Youtube}
                label="YouTube"
              />
              <SocialLink
                href="https://www.linkedin.com/in/abubakar-athman/"
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialLink
                href="https://github.com/iAthman83"
                icon={Github}
                label="GitHub"
              />
              <SocialLink
                href="https://twitter.com/iathman83"
                icon={Twitter}
                label="Twitter"
              />
            </div>
          </div>

          {/* Right content - Profile image */}
          <div
            className="flex justify-center lg:justify-end animate-fade-in-right"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-1 animate-glow">
                <div className="w-full h-full rounded-3xl bg-card overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/33369425/pexels-photo-33369425.png"
                    width={500}
                    height={500}
                    alt="Abu Athman - Full Stack Developer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold animate-float">
                Full Stack Dev
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                Content Creator
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: any;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-3 bg-secondary hover:bg-primary rounded-xl transition-all duration-300 transform hover:scale-110"
    aria-label={label}
  >
    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      {label}
    </div>
  </a>
);

export default Hero;

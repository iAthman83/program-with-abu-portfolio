import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Expert in modern web technologies, from React to Node.js",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Innovative approach to complex technical challenges",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communication and leadership skills",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Building fast, scalable, and efficient applications",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Who am I?
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Welcome to my world! If you're reading this, chances are
                  you're wondering who I am and what makes me tick. Well, I'm
                  glad you asked!
                </p>
                <p>
                  As a highly motivated and skilled software developer, I have a
                  passion for creating efficient and effective solutions to
                  complex problems. I am confident in my ability to deliver
                  high-quality results on time and within budget.
                </p>
                <p>
                  My love for technology and programming drives me to
                  continuously learn and stay up to date with the latest
                  industry trends and developments. I also like to share my
                  knowledge through video tutorials on my YouTube channel.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary">
                  Contact Me
                </Button>
                <Button
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground"
                >
                  Subscribe to Channel
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <Card className="p-8 bg-gradient-to-br from-card to-secondary border-border/50">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm text-muted-foreground">
                      Currently available for projects
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">
                        5+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">
                        100+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Projects Completed
                      </div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">
                        50+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Happy Clients
                      </div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">
                        24/7
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Learning
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 bg-card hover:bg-secondary transition-all duration-300 group hover:scale-105 border-border/50"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <skill.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

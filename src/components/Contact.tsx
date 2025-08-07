import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
import {
  Mail,
  MapPin,
  Phone,
  // Send
} from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let's work together to create
              something amazing. I'm always excited to discuss new opportunities
              and challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-6 animate-fade-in">
              <Card className="p-6 bg-card border-border/50">
                <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>

                <div className="space-y-4">
                  <ContactItem
                    icon={Mail}
                    label="Email"
                    value="abuathman83@gmail.com"
                    href="mailto:abuathman83@gmail.com"
                  />
                  <ContactItem
                    icon={Phone}
                    label="Phone"
                    value="+256 783 373 764"
                    href="tel:+256783373764"
                  />
                  <ContactItem
                    icon={MapPin}
                    label="Location"
                    value="Available Worldwide"
                  />
                </div>
              </Card>

              {/* Availability card */}
              {/* <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold">
                    Available for New Projects
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm currently accepting new freelance projects and full-time
                  opportunities.
                </p>
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary">
                  Schedule a Call
                </Button>
              </Card> */}
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2 animate-fade-in-right">
              {/* Availability card */}
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold">
                    Available for New Projects
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm currently accepting new freelance projects and full-time
                  opportunities.
                </p>
                <Link href={"tel:+256783373764"}>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary cursor-pointer">
                    Schedule a Call
                  </Button>
                </Link>
              </Card>
              {/* <Card className="p-8 bg-card border-border/50">
                <h3 className="text-xl font-semibold mb-6">
                  Send Me a Message
                </h3>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Card> */}
            </div>
          </div>

          {/* CTA section */}
          <div className="text-center mt-16 animate-fade-in">
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you need a complete web application, consultation, or
                help with an existing project, I'm here to help bring your ideas
                to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={"mailto:abuathman83@gmail.com"}>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me Directly
                  </Button>
                </Link>
                {/* <Button
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground"
                >
                  View My Work
                </Button> */}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-300">
      <div className="p-2 bg-primary/10 rounded-lg">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <div className="text-sm text-muted-foreground">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block group">
        {content}
      </a>
    );
  }

  return content;
};

export default Contact;

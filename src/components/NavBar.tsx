"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code } from "lucide-react";
import { navItems } from "@/data/contents";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={"/"} className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-lg">
              <Code className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Abu Athman</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary cursor-pointer"
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 animate-fade-in">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-6 py-3 text-left text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-6 py-3">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

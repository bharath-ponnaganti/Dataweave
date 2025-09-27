import { Github, Twitter, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/20">
      <div className="container py-16">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-primary">
                <span className="font-bold text-accent-foreground">GW</span>
              </div>
              <span className="text-2xl font-bold text-foreground">GoodWire</span>
            </div>
            <p className="text-muted-foreground max-w-lg leading-relaxed">
              The complete wireframing and component library for building beautiful data 
              analytics applications. Open source, TypeScript-ready, and production-tested.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                className="hover:bg-accent/10 hover:text-accent transition-all duration-300"
                onClick={() => window.open('https://github.com', '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                onClick={() => window.open('https://twitter.com', '_blank')}
              >
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-semibold text-foreground text-lg">Quick Links</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#docs" className="hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                  Documentation <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a href="#components" className="hover:text-accent transition-colors duration-300">Components</a>
              </li>
              <li>
                <a href="#components" className="hover:text-accent transition-colors duration-300">Charts</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">Examples</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">Changelog</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-5">
            <h4 className="font-semibold text-foreground text-lg">Resources</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#docs" className="hover:text-accent transition-colors duration-300">Getting Started</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">Design System</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">Figma Kit</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">Community</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">Support</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © 2024 GoodWire. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-accent transition-colors duration-300">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
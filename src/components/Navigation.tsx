import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Github, Menu, Home } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent">
              <span className="font-bold text-accent-foreground">DW</span>
            </div>
            <span className="text-xl font-bold text-foreground">DataWeave</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            {isHomePage ? (
              <>
                <a href="#components" className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-105">
                  Components
                </a>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-105">
                  Features
                </a>
                <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-105">
                  Documentation
                </a>
              </>
            ) : (
              <>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-105 flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  Home
                </Link>
                <Link to="/#components" className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-105">
                  All Components
                </Link>
              </>
            )}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden sm:flex hover:bg-accent/10 transition-all duration-200 hover:scale-110"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="h-4 w-4" />
          </Button>
          <Button 
            variant="default" 
            size="sm"
            className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
            onClick={() => window.location.href = '#components'}
          >
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-accent/10 transition-all duration-200">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
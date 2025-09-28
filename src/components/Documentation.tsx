import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Code, 
  Download, 
  Github, 
  ExternalLink,
  FileText,
  PlayCircle,
  Users,
  MessageCircle
} from "lucide-react";

const Documentation = () => {
  const docSections = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Getting Started",
      description: "Quick setup guide and installation instructions",
      link: "#",
      badge: "Essential"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Component API",
      description: "Detailed props, methods, and customization options",
      link: "#",
      badge: "Reference"
    },
    {
      icon: <PlayCircle className="h-6 w-6" />,
      title: "Live Examples",
      description: "Interactive demos and code samples",
      link: "#",
      badge: "Interactive"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Design System",
      description: "Colors, typography, and design principles",
      link: "#",
      badge: "Design"
    }
  ];

  const resources = [
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub Repository",
      description: "Source code, issues, and contributions",
      link: "https://github.com"
    },
    {
      icon: <Download className="h-5 w-5" />,
      title: "Download Package",
      description: "Get the latest version via npm",
      link: "https://www.npmjs.com"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Community",
      description: "Join our Discord and get help",
      link: "#"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Support",
      description: "Get help and report issues",
      link: "#"
    }
  ];

  return (
    <section id="docs" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Documentation & Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to get started with GoodWire components. 
            From quick setup guides to advanced customization options.
          </p>
        </div>

        {/* Documentation Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {docSections.map((section, index) => (
            <Card 
              key={section.title}
              className="modern-card hover-lift hover-glow group cursor-pointer"
              onClick={() => window.open(section.link, '_blank')}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 text-accent group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300 hover-scale">
                    {section.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20">
                    {section.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-accent transition-colors duration-300">
                  {section.title}
                </CardTitle>
                <CardDescription className="group-hover:text-foreground/80 transition-colors duration-300">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full group-hover:text-accent transition-colors duration-300"
                >
                  Learn More
                  <ExternalLink className="h-3 w-3 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card 
              key={resource.title}
              className="modern-card hover-lift group cursor-pointer"
              onClick={() => window.open(resource.link, '_blank')}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 text-accent group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300 mb-1">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Start CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Button 
              size="lg"
              className="btn-primary"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="h-4 w-4 mr-2" />
              View on GitHub
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="btn-secondary"
              onClick={() => window.open('https://www.npmjs.com', '_blank')}
            >
              <Download className="h-4 w-4 mr-2" />
              Install via NPM
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Join thousands of developers building amazing data applications
          </p>
        </div>
      </div>
    </section>
  );
};

export default Documentation;



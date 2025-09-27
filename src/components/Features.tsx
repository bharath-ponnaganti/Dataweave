import { Card, CardContent } from "@/components/ui/card";
import { 
  Palette, 
  Zap, 
  Shield, 
  Code, 
  Puzzle, 
  Accessibility 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Beautiful Defaults",
      description: "Carefully crafted designs that work out of the box. Spend less time on styling, more time on data insights."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Optimized for performance with lazy loading, virtualization, and efficient rendering for large datasets."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Production Ready",
      description: "Battle-tested components used by thousands of developers. Reliable, stable, and enterprise-grade."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "TypeScript First",
      description: "Built with TypeScript for better development experience, autocompletion, and fewer runtime errors."
    },
    {
      icon: <Puzzle className="h-8 w-8" />,
      title: "Modular Design",
      description: "Mix and match components as needed. Tree-shakeable imports mean you only ship what you use."
    },
    {
      icon: <Accessibility className="h-8 w-8" />,
      title: "Accessible by Design",
      description: "WCAG compliant components with keyboard navigation, screen reader support, and focus management."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose GoodWire?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for developers who need to create data-rich applications quickly without 
            compromising on quality or user experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className={`modern-card hover-lift hover-glow animate-slide-up group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 text-accent flex-shrink-0 group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300 hover-scale">
                    {feature.icon}
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-semibold text-lg group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Components", value: "35+", color: "from-accent to-primary" },
            { label: "Chart Types", value: "12", color: "from-primary to-accent" },
            { label: "Downloads", value: "50K+", color: "from-accent to-primary" },
            { label: "GitHub Stars", value: "2.5K", color: "from-primary to-accent" }
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-lg bg-card/30 hover:bg-card/50 transition-colors duration-300 hover-scale">
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
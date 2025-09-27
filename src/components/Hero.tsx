import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BarChart3, GitBranch } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      
      <div className="container relative">
        {/* Start Here Badge */}
        <div className="mb-8 animate-bounce-in">
          <div className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-accent-foreground font-medium">
            Start here:
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-foreground">React components for</span>{" "}
                <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  data analytics
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Build beautiful, interactive dashboards and data visualizations with 35+ professionally designed components. 
                The complete wireframing library for data applications.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = '#components'}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105 font-semibold"
                onClick={() => window.location.href = '#components'}
              >
                View Components
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-success"></div>
                35+ Components
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent"></div>
                TypeScript Ready
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                Open Source
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <Card className="p-6 hover-lift hover-glow glass border-border/50 overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Portfolio Performance</h3>
                  <div className="flex items-center gap-1 text-success text-sm bg-success/10 px-2 py-1 rounded-full">
                    <ArrowRight className="h-3 w-3 rotate-[-45deg]" />
                    +12.5%
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Total Value</span>
                    <span className="font-mono text-lg font-bold text-foreground">$284,592.40</span>
                  </div>
                  
                  {/* Enhanced chart area */}
                  <div className="h-32 rounded-lg bg-gradient-to-br from-accent/10 via-primary/10 to-accent/20 flex items-end justify-center p-4 border border-accent/20">
                    <div className="flex items-end gap-1 h-20">
                      {[40, 65, 45, 80, 55, 75, 60, 85, 70, 90].map((height, i) => (
                        <div
                          key={i}
                          className="w-3 bg-gradient-to-t from-accent to-primary rounded-t-md opacity-80 hover:opacity-100 transition-opacity duration-300"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Jan</span>
                    <span>Dec</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
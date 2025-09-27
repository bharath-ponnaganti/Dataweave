import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Intro Header */}
          <div className="mb-12">
            <Badge variant="outline" className="mb-4 text-accent border-accent/20">
              Intro
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The GoodWire wireframing library
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The <strong>GoodWire wireframing library</strong> is a robust collection of UI components and chart types designed 
              specifically for creating data analytics applications on the <strong>GoodData platform</strong>. This library provides 
              everything you need to quickly prototype and iterate on designs, ensuring a smooth and efficient workflow. With 
              <strong> GoodWire</strong>, you can focus on crafting a solid information architecture and displaying data points 
              in a way that clearly supports your users' decision-making processes.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Easily create interactive dashboards that bring your data to life with the GoodData UI components and with the 
              same chart types available on the GoodData platform:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
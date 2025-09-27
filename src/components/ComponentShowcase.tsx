import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { componentData, getComponentsByCategory, getCategories, searchComponents } from "../data/components";

const ComponentShowcase = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get categories from data
  const categories = getCategories();

  // Filter components based on search and category
  const getFilteredComponents = () => {
    let filtered = componentData;

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = searchComponents(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(component => component.category === selectedCategory);
    }

    return filtered;
  };

  const filteredComponents = getFilteredComponents();
  
  return (
    <section className="py-16 md:py-24" id="components">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Component Library
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build powerful data analytics applications. Each component is 
            designed for flexibility, accessibility, and seamless integration.
          </p>
        </div>
        
        {/* Search and Filter Controls */}
        <div className="max-w-2xl mx-auto mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className="cursor-pointer hover:bg-accent/10 transition-colors"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Component Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredComponents.map((component, index) => (
            <Link key={component.id} to={`/components/${component.id}`}>
              <Card 
                className="h-full modern-card hover-lift hover-glow cursor-pointer group overflow-hidden"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 text-accent group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300 hover-scale">
                      {/* Icon placeholder - in a real app you'd map icon names to components */}
                      📊
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-accent transition-colors duration-300">
                        {component.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs mt-1 bg-accent/10 text-accent border-accent/20">
                        {component.category}
                      </Badge>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
                    {component.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                      {component.examples.length} example{component.examples.length !== 1 ? 's' : ''}
                    </span>
                    <Button variant="ghost" size="sm" className="h-auto p-0 text-xs group-hover:text-accent transition-colors duration-300">
                      View Details →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredComponents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              No components found matching your criteria.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to build something amazing?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default"
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              View Documentation
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105 font-semibold"
              onClick={() => window.location.href = '#components'}
            >
              Browse Examples
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentShowcase;
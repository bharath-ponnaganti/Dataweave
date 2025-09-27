import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="text-6xl font-bold text-muted-foreground mb-4">404</div>
            <h1 className="text-2xl font-bold mb-2">Component Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The component you're looking for doesn't exist or may have been moved.
            </p>
            
            <div className="space-y-3">
              <Link to="/" className="w-full">
                <Button className="w-full">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              
              <Link to="/#components" className="w-full">
                <Button variant="outline" className="w-full">
                  <Search className="mr-2 h-4 w-4" />
                  Browse Components
                </Button>
              </Link>
            </div>
            
            <p className="text-xs text-muted-foreground mt-6">
              Requested path: {location.pathname}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;

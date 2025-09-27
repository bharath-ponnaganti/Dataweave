import { useParams, Link, Navigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Copy, ExternalLink, Package } from "lucide-react";
import { getComponentById } from "../data/components";
import CodePreview from "../components/CodePreview";
import ComponentExamples from "../components/ComponentExamples";
import Navigation from "@/components/Navigation";
import { toast } from "sonner";

/**
 * Component detail page that displays comprehensive information about a specific component
 * Including preview, code, examples, props documentation, and installation guide
 */
const ComponentDetailPage = () => {
  const { componentId } = useParams<{ componentId: string }>();
  
  // Get component data by ID
  const component = componentId ? getComponentById(componentId) : undefined;

  // Redirect to 404 if component not found
  if (!component) {
    return <Navigate to="/404" replace />;
  }

  /**
   * Copy code to clipboard with user feedback
   */
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  /**
   * Copy installation command to clipboard
   */
  const copyInstallCommand = (dependencies: string[]) => {
    const command = `npm install ${dependencies.join(" ")}`;
    copyToClipboard(command);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Components
          </Link>
        </div>

        {/* Component Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
              {/* Dynamic icon rendering would go here */}
              <Package className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{component.title}</h1>
              <Badge variant="secondary" className="mt-1">
                {component.category}
              </Badge>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {component.description}
          </p>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="preview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
          </TabsList>

          {/* Preview Tab */}
          <TabsContent value="preview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
                <CardDescription>
                  Interactive preview of the {component.title} component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-6 bg-muted/50">
                  <ComponentExamples 
                    componentId={component.id} 
                    showPreviewOnly={true}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Quick Installation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Quick Install
                </CardTitle>
              </CardHeader>
              <CardContent>
                {component.installation.dependencies.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Dependencies:</p>
                    <div className="flex items-center gap-2 bg-muted p-3 rounded-lg font-mono text-sm">
                      <code className="flex-1">
                        npm install {component.installation.dependencies.join(" ")}
                      </code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyInstallCommand(component.installation.dependencies)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Code Tab */}
          <TabsContent value="code" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Usage</CardTitle>
                <CardDescription>
                  Get started with the basic implementation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodePreview code={component.basicCode} language="tsx" />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples" className="space-y-6">
            <ComponentExamples componentId={component.id} />
          </TabsContent>

          {/* API Documentation Tab */}
          <TabsContent value="api" className="space-y-6">
            {/* Props Documentation */}
            <Card>
              <CardHeader>
                <CardTitle>Props</CardTitle>
                <CardDescription>
                  Available props and their descriptions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-4">Prop</th>
                        <th className="text-left py-2 px-4">Type</th>
                        <th className="text-left py-2 px-4">Default</th>
                        <th className="text-left py-2 px-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {component.props.map((prop) => (
                        <tr key={prop.name} className="border-b">
                          <td className="py-2 px-4 font-mono text-sm">
                            {prop.name}
                            {prop.required && (
                              <Badge variant="destructive" className="ml-2 text-xs">
                                required
                              </Badge>
                            )}
                          </td>
                          <td className="py-2 px-4 font-mono text-sm text-muted-foreground">
                            {prop.type}
                          </td>
                          <td className="py-2 px-4 font-mono text-sm">
                            {prop.default || "-"}
                          </td>
                          <td className="py-2 px-4 text-sm">
                            {prop.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Installation Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Installation</CardTitle>
                <CardDescription>
                  Step-by-step installation guide
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {component.installation.dependencies.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">1. Install Dependencies</h4>
                    <div className="bg-muted p-3 rounded-lg font-mono text-sm mb-4">
                      <div className="flex items-center justify-between">
                        <code>npm install {component.installation.dependencies.join(" ")}</code>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyInstallCommand(component.installation.dependencies)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
                
                <div>
                  <h4 className="font-semibold mb-2">
                    {component.installation.dependencies.length > 0 ? "2. " : "1. "}
                    Setup Steps
                  </h4>
                  <ul className="space-y-2">
                    {component.installation.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Badge variant="outline" className="text-xs mt-1">
                          {index + 1}
                        </Badge>
                        <span className="text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>


          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ComponentDetailPage;
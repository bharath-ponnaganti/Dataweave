import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getComponentById } from "../data/components";
import CodePreview from "./CodePreview";
import LiveComponentPreview from "./LiveComponentPreview";

interface ComponentExamplesProps {
  componentId: string;
  showPreviewOnly?: boolean;
}

/**
 * ComponentExamples displays all examples for a specific component
 * Shows both live previews and code snippets for each example
 */
const ComponentExamples = ({ componentId, showPreviewOnly = false }: ComponentExamplesProps) => {
  const component = getComponentById(componentId);

  if (!component) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Component examples not found.</p>
      </div>
    );
  }

  // If showing preview only, render the first example's preview
  if (showPreviewOnly && component.examples.length > 0) {
    return (
      <LiveComponentPreview 
        componentId={componentId}
        exampleId={component.examples[0].id}
      />
    );
  }

  return (
    <div className="space-y-6">
      {component.examples.map((example) => (
        <Card key={example.id}>
          <CardHeader>
            <CardTitle className="text-xl">{example.title}</CardTitle>
            <CardDescription>{example.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              
              <TabsContent value="preview">
                <div className="border rounded-lg p-6 bg-muted/50 min-h-[200px] flex items-center justify-center">
                  <LiveComponentPreview 
                    componentId={componentId}
                    exampleId={example.id}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="code">
                <CodePreview code={example.code} language="tsx" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      ))}

      {component.examples.length === 0 && (
        <Card>
          <CardContent className="py-8">
            <div className="text-center">
              <p className="text-muted-foreground">
                No examples available for this component yet.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ComponentExamples;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface CodePreviewProps {
  code: string;
  language?: string;
  className?: string;
}

/**
 * CodePreview component for displaying syntax-highlighted code with copy functionality
 * Provides a clean interface for viewing and copying code snippets
 */
const CodePreview = ({ code, language = "tsx", className }: CodePreviewProps) => {
  const [copied, setCopied] = useState(false);

  /**
   * Copy code to clipboard with visual feedback
   */
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Code copied to clipboard!");
      
      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      toast.error("Failed to copy code");
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Copy Button */}
      <div className="absolute top-3 right-3 z-10">
        <Button
          size="sm"
          variant="ghost"
          className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Code Block */}
      <div className="bg-muted/50 border rounded-lg overflow-hidden">
        <div className="bg-muted/80 px-4 py-2 border-b">
          <span className="text-xs text-muted-foreground font-mono uppercase">
            {language}
          </span>
        </div>
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="font-mono whitespace-pre-wrap break-words">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodePreview;
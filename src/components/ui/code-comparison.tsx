"use client";
import { FileIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { ScrollShadow } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
interface CodeComparisonProps {
  code: string;
  language: string;
  filename: string;
  lightTheme: string;
  darkTheme: string;
}

export default function CodeComparison({
  code,
  language,
  filename,
  lightTheme,
  darkTheme,
}: CodeComparisonProps) {
  const { theme, systemTheme } = useTheme();
  const [highlightedBefore, setHighlightedBefore] = useState("");

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    const selectedTheme = currentTheme === "dark" ? darkTheme : lightTheme;

    async function highlightCode() {
      const after = await codeToHtml(code, {
        lang: language,
        theme: selectedTheme,
      });
      setHighlightedBefore(after);
    }

    highlightCode();
  }, [theme, systemTheme, code, language, lightTheme, darkTheme]);

  const renderCode = (code: string, highlighted: string) => {
    if (highlighted) {
      return (
        <div
          className="h-full overflow-auto bg-background text-sm [&>pre]:h-full font-serif [&>pre]:!bg-transparent [&>pre]:p-4 [&_code]:break-all"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      );
    } else {
      return (
        <pre className="h-full overflow-auto break-all bg-background p-4 font-serif text-foreground">
          {code}
        </pre>
      );
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        alert("Code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <ScrollShadow hideScrollBar className="mx-auto w-full max-w-5xl max-h-[36rem]">
      <div className="relative w-full overflow-hidden rounded-xl border border-border">
        <div className="relative grid md:grid-cols-1 md:divide-border">
          <div className="flex items-center bg-accent p-2 text-sm text-foreground">
            <FileIcon className="mr-2 h-4 w-4" />
            {filename}
            <Button
              onPress={copyToClipboard}
              size="sm"
              radius="sm"
              color="primary"
              variant="light"
              className="ml-auto"
            >
              Copy
            </Button>
          </div>
          {renderCode(code, highlightedBefore)}
        </div>
      </div>
    </ScrollShadow>
  );
}

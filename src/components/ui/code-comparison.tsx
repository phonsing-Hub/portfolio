"use client";

import { ScrollShadow, Button } from "@nextui-org/react";
import { FileIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbFiles } from "react-icons/tb";

interface CodeComparisonProps {
  code: string;
  language: string;
  filename: string;
  lightTheme: string;
  darkTheme: string;
}

export function CodeComparison({
  code,
  language,
  filename,
  lightTheme,
  darkTheme,
}: CodeComparisonProps) {
  const { theme, systemTheme } = useTheme();
  const [highlightedBefore, setHighlightedBefore] = useState("");

  useEffect(() => {
    // Ensure this code runs only in the client-side environment
    if (typeof window !== "undefined") {
      const currentTheme = theme === "system" ? systemTheme : theme;
      const selectedTheme = currentTheme === "dark" ? darkTheme : lightTheme;

      // Dynamically import `shiki` to ensure it only runs in the browser
      import("shiki").then(({ codeToHtml }) => {
        async function highlightCode() {
          const before = await codeToHtml(code, {
            lang: language,
            theme: selectedTheme,
          });
          setHighlightedBefore(before);
        }

        highlightCode();
      });
    }
  }, [theme, systemTheme, code, language, lightTheme, darkTheme]);

  const renderCode = (code: string, highlighted: string) => {
    if (highlighted) {
      return (
        <div
          className=" sm:w-full overflow-auto bg-background font-mono [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:p-4 [&_code]:break-all "
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      );
    } else {
      return (
        <pre className=" sm:w-full overflow-auto break-all bg-background p-4 font-mono text-xs text-foreground ">
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
    <ScrollShadow hideScrollBar size={0} className="mx-auto w-full max-w-5xl max-h-[36rem]">
      <div className="relative w-full overflow-hidden rounded-xl border border-border">
        <div className="relative grid md:grid-cols-1 md:divide-border">
          <div className="flex items-center bg-accent p-2 text-sm text-foreground">
            <span className="flex">
            <FileIcon className="mr-2 h-4 w-4 " />
            {filename}
            </span>
            <Button
              onPress={copyToClipboard}
              size="sm"
              radius="sm"
              color="primary"
              variant="light"
              className="ml-auto"
              endContent={<TbFiles size={16}/>}
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
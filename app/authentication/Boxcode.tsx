"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import themeLight from "react-syntax-highlighter/dist/esm/styles/prism/one-light";
import themeDark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const { theme, resolvedTheme } = useTheme(); // Use resolvedTheme to handle SSR.
  const [mounted, setMounted] = useState(false); // Ensure correct rendering only after mount.

  useEffect(() => {
    setMounted(true); // Indicate that the component has been mounted.
  }, []);

  const customStyle = {
    borderRadius: "0.75rem",
  };

  // Prevent rendering until mounted to avoid hydration mismatches.
  if (!mounted) return null;

  return (
    <SyntaxHighlighter
      language={language}
      style={resolvedTheme === "light" ? themeLight : themeDark}
      customStyle={customStyle}
      showLineNumbers
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

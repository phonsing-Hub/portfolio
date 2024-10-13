"use client";
import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import theme_light from "react-syntax-highlighter/dist/esm/styles/prism/one-light";
import theme_dark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const customStyle = {
    borderRadius: "0.75rem",
  };
  const { theme } = useTheme();
  return (
    <SyntaxHighlighter
      language={language}
      style={theme === "light" ? theme_light : theme_dark}
      customStyle={customStyle}
      showLineNumbers
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

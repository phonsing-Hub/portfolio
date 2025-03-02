"use client";
import { Button } from "@heroui/button";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { FaRegFileAlt } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbFiles } from "react-icons/tb";
import { message } from "antd";
import { codeToHtml } from "shiki";

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
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    const selectedTheme = currentTheme === "dark" ? darkTheme : lightTheme;

    async function highlightCode() {
      const before = await codeToHtml(code, {
        lang: language,
        theme: selectedTheme,
      });

      setHighlightedBefore(before);
    }

    highlightCode();
  }, [theme, systemTheme, code, language, lightTheme, darkTheme]);

  // font-mono
  const renderCode = (code: string, highlighted: string) => {
    if (highlighted) {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: highlighted }}
          className=" sm:w-full overflow-auto bg-background [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:p-4 [&_code]:break-all "
        />
      );
    } else {
      return (
        <pre className="sm:w-full overflow-auto break-all bg-background p-4 text-xs text-foreground ">
          {code}
        </pre>
      );
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        messageApi.open({
          type: "success",
          content: "Coppy success",
        });
      })
      .catch(() => {
        messageApi.open({
          type: "error",
          content: "Failed to copy",
        });
        //console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl border dark:border-zinc-800 border-border">
      <div className="relative grid md:grid-cols-1 md:divide-border">
        <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 p-2 text-sm text-foreground ">
          <span className="flex">
            <FaRegFileAlt className="mr-2 h-4 w-4" />
            {filename}
          </span>
          {contextHolder}
          <Button
            className="ml-auto"
            //color="primary"
            endContent={<TbFiles size={16} />}
            radius="sm"
            size="sm"
            variant="light"
            onPress={copyToClipboard}
          >
            Copy
          </Button>
        </div>
        <ScrollShadow
          className="mx-auto w-full max-w-5xl max-h-[36rem]"
          size={40}
        >
          {renderCode(code, highlightedBefore)}
        </ScrollShadow>
      </div>
    </div>
  );
}

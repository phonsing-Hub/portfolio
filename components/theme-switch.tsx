// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { FaCloudSun, FaCloudMoon } from "react-icons/fa";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const Light = (
    <Button isIconOnly variant="light" size="sm" color="warning" onPress={() => setTheme("light")}>
      <FaCloudSun size={22} />
    </Button>
  );

  const Dark = (
    <Button isIconOnly variant="light" size="sm" color="secondary" onPress={() => setTheme("dark")}>
      <FaCloudMoon size={22} />
    </Button>
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <div>{theme === "light" ? Dark : Light}</div>;
}
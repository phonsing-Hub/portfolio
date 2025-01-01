"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";

export function ParticlesBg() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <>
      <Particles
      className="absolute inset-0"
      quantity={100}
      ease={80}
      color={color}
      refresh
    />
    </>
  );
}
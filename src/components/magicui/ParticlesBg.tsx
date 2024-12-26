"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";
import Snowfall from 'react-snowfall'

export function ParticlesBg() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <>
      <Snowfall snowflakeCount={100} speed={[0.5, 1.0]} wind={[-0.5, 1.0]} opacity={[0, 1]}/>
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
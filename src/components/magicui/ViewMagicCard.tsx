"use client";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";

export function ViewMagicCard() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-wrap gap-4 relative w-full">
      <MagicCard
        className="cursor-pointer shadow-2xl whitespace-nowrap flex-[1_1_300px] h-96"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <div className=" relative h-full w-full">
        {/* <BorderBeam size={250} duration={12} delay={9} /> */}
        Card
        </div>
       
      </MagicCard>
      <MagicCard
        className="cursor-pointer shadow-2xl whitespace-nowrap flex-[1_1_300px] h-96"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Card
      </MagicCard>
      <MagicCard
        className="cursor-pointer shadow-2xl whitespace-nowrap flex-[1_1_300px] h-96"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Card
      </MagicCard>
      <MagicCard
        className="cursor-pointer shadow-2xl whitespace-nowrap flex-[1_1_300px] h-96"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Card
      </MagicCard>
    </div>
  );
}

import React from "react";
import { BiNetworkChart } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { PiSelectionBackgroundBold } from "react-icons/pi";
import { cn } from "@heroui/theme";

import { title, subtitle } from "../primitives";
import { DotPattern } from "../ui/dot-pattern";

import { MagicCard } from "@/components/ui/magic-card";

export default function FeaturesListSection() {
  return (
    <section
      className="features-list-section flex flex-col justify-center relative my-4"
      id="features-list-section"
    >
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="flex flex-col md:w-2/3 w-full ">
        <h2 className={title()}>My</h2>
        <h2 className={title({ color: "green" })}>Expertise & Achievements</h2>
        <p className={subtitle()}>
          Discover my portfolio highlights, professional background, and key
          skill sets that showcase my capabilities and expertise.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mt-4 gap-4 ">
        <div data-aos="zoom-in-up" data-aos-delay="50">
          <MagicCard
            className="cursor-pointer w-full lg:h-44 p-4"
            gradientColor={"#D9D9D955"}
          >
            <h2
              className={cn(title({ size: "xs" }), "flex gap-2 items-center")}
            >
              <BiNetworkChart /> Implemented a robust API
            </h2>
            <p className="text-sm text-default-500 mt-4">
              Developed a high-performance and secure API for social media
              platforms and enterprises using Go Fiber, Fast API, and
              PostgreSQL.
            </p>
          </MagicCard>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="150">
          <MagicCard
            className="cursor-pointer w-full lg:h-44 p-4"
            gradientColor={"#D9D9D955"}
          >
            <h2
              className={cn(title({ size: "xs" }), "flex gap-2 items-center")}
            >
              <GiSkills /> Skill Sets
            </h2>
            <p className="text-sm text-default-500 mt-4">
              Designing and developing cutting-edge web applications tailored to
              meet your business needs with modern frameworks and technologies.
            </p>
          </MagicCard>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="250">
          <MagicCard
            className="cursor-pointer w-full lg:h-44 p-4"
            gradientColor={"#D9D9D955"}
          >
            <h2
              className={cn(title({ size: "xs" }), "flex gap-2 items-center")}
            >
              <PiSelectionBackgroundBold /> Professional Background
            </h2>
            <p className="text-sm text-default-500 mt-4">
              3+ years of experience in full-stack development, focusing on
              delivering practical and scalable solutions.
            </p>
          </MagicCard>
        </div>
      </div>
    </section>
  );
}

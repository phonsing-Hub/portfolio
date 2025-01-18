// "use client"
// import { useEffect } from "react";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { TbFileCv } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";
import { cn } from "@heroui/theme";

import { InteractiveGridPattern } from "../ui/interactive-grid-pattern";
import { title } from "../primitives";

export default function HeaderSection() {
  return (
    <section
      className="header-section flex flex-wrap-reverse justify-between items-center relative"
      id="header-section"
    >
      <InteractiveGridPattern
        className={cn(
          "md:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "[mask-image:radial-gradient(150px_circle_at_center,white,transparent)]",
        )}
        // width={100}
        // height={20}
        squares={[80, 80]}
        squaresClassName="hover:fill-blue-300"
      />
      <div
        className="md:w-1/2 w-full relative flex flex-col"
        data-aos="fade-right"
        data-aos-delay="50"
      >
        <span className={title()}>Welcome to My&nbsp;</span>
        <span className={title({ color: "blue" })}>Portfolio</span>
        <span className="my-4 text-sm text-default-600 backdrop-blur-sm rounded-md">
          Hi there! I’m{" "}
          <Chip color="primary" radius="sm" size="sm" variant="flat">
            NOAH
          </Chip>
          , a Software Developer who loves learning and experimenting with new
          technologies. I enjoy designing and developing software that solves
          problems and makes life easier. My work focuses on creating practical
          solutions that truly meet users’ needs. If you’d like to chat or
          discuss anything tech-related, feel free to reach out. I’d be more
          than happy to connect!
        </span>
        <div className="flex gap-2 mb-4">
          <Button
            isDisabled
            color="primary"
            endContent={<TbFileCv size={22} />}
            radius="sm"
            variant="flat"
          >
            Download CV
          </Button>
          <Button
            as={Link}
            endContent={<CgNotes size={22} />}
            href={"/blog"}
            radius="sm"
            variant="flat"
          >
            Blog
          </Button>
        </div>
      </div>
      <div
        className="md:w-1/2 w-full relative flex justify-center"
        data-aos="fade-left"
        data-aos-delay="50"
      >
        <Image
          alt="reshot-icon-computer"
          className="md:size-80 size-60 inset-x-0 inset-y-[-10%] h-[200%] skew-y-6"
          src="/reshot-icon-computer.svg"
        />
      </div>
    </section>
  );
}

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
      className="header-section flex flex-wrap-reverse relative"
      id="header-section"
    >
      <InteractiveGridPattern
        className={cn(
          "md:[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "[mask-image:radial-gradient(150px_circle_at_center,white,transparent)]",
        )}
        squaresClassName="hover:fill-blue-300"
      />
      <div
        className="md:w-1/2 w-full flex flex-col justify-center"
        data-aos="fade-right"
        data-aos-delay="50"
      >
        <span className={title()}>Welcome to My&nbsp;</span>
        <span className={title({ color: "blue" })}>Portfolio</span>
        <span className="my-4 text-lg text-default-600 backdrop-blur-sm rounded-md lg:w-3/4">
          Hi there! I’m{" "}
          <Chip color="primary" radius="sm" size="sm" variant="flat">
            NOAH
          </Chip>
          , a Computer Engineering & Software Developer
        </span>
        <div className="flex gap-2 mb-4">
          {/* <Button
            isDisabled
            color="primary"
            endContent={<TbFileCv size={22} />}
            radius="sm"
            variant="flat"
          >
            Download CV
          </Button> */}
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
        className="md:w-1/2 w-full flex justify-center md:items-center items-end"
        data-aos="fade-left"
        data-aos-delay="50"
      >
        <Image
          alt="reshot-icon-computer"
          className="size-80 drop-shadow-2xl"
          src="/truffle.svg"
        />
      </div>
    </section>
  );
}

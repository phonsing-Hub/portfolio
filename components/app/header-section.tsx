import { Chip } from "@heroui/chip";

import { title } from "../primitives";

export default function HeaderSection() {
  return (
    <section className="" id="header-section">
      <div
        className="flex flex-col justify-center"
        data-aos="fade-right"
        data-aos-delay="50"
      >
        <span className={title()}>Welcome to My&nbsp;</span>
        <span className={title({ color: "blue" })}>Portfolio</span>
        <span className="my-4 text-lg text-default-600 backdrop-blur-sm rounded-md lg:w-3/4">
          Hi there! I’m
          <Chip color="primary" radius="sm" size="sm" variant="flat">
            NOAH
          </Chip>
          , a Computer Engineering & Software Developer
        </span>
      </div>
    </section>
  );
}

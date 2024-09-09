import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

import { siteConfig } from "@/config/site";

export default function section2() {
  let borderVariant:
    | "shadow"
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "ghost"
    | undefined = "faded";

  return (
    <section className="flex justify-center items-center display2">
      <div className="flex flex-wrap gap-10 w-full ">
        <div className="flex-[1_0_360px]" data-aos="fade-up" data-aos-delay="100">
          <Chip
            className="mb-5"
            color="primary"
            radius="sm"
            size="lg"
            variant="dot"
          >
            <p className=" font-bold text-2xl"> About Me</p>
          </Chip>
          <p className="text-lg indent-10 text-pretty">
            {siteConfig.aboutTitle}
          </p>
          <br />
          <Divider />
        </div>
        <div className="flex-[1_0_366px]" data-aos="fade-up" data-aos-delay="500">
          <Chip
            className="mb-5"
            color="primary"
            radius="sm"
            size="lg"
            variant="dot"
          >
            <p className=" font-bold text-2xl"> My Skill</p>
          </Chip>
          <ScrollShadow hideScrollBar className="h-[280px]">
            <div className=" flex flex-wrap gap-4 w-full justify-center">
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={<Image isBlurred src="./c:cpp.png" width={30} />}
                variant={borderVariant}
              >
                C/C++
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image
                    isBlurred
                    radius="none"
                    src="./javascript.png"
                    width={30}
                  />
                }
                variant={borderVariant}
              >
                JavaScript
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={<Image isBlurred src="./ts.png" width={50} />}
                variant={borderVariant}
              >
                TypeScript
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={<Image isBlurred src="./php.png" width={50} />}
                variant={borderVariant}
              >
                PHP
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={<Image isBlurred src="./go.png" width={50} />}
                variant={borderVariant}
              >
                Go
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={<Image isBlurred src="./py.png" width={30} />}
                variant={borderVariant}
              >
                Python
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={<Image isBlurred src="./react.png" width={30} />}
                variant={borderVariant}
              >
                React/Native
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image
                    isBlurred
                    radius="none"
                    src="./next-js.svg"
                    width={30}
                  />
                }
                variant={borderVariant}
              >
                Next
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={<Image isBlurred src="./tw.png" width={30} />}
                variant={borderVariant}
              >
                Tailwindcss
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image
                    isBlurred
                    radius="none"
                    src="./nextui.png"
                    width={30}
                  />
                }
                variant={borderVariant}
              >
                Next UI
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image isBlurred radius="none" src="./ant.png" width={30} />
                }
                variant={borderVariant}
              >
                Ant Design
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image isBlurred radius="none" src="./node.png" width={50} />
                }
                variant={borderVariant}
              >
                Node
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image
                    isBlurred
                    radius="none"
                    src="./express.png"
                    width={30}
                  />
                }
                variant={borderVariant}
              >
                Express
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image isBlurred radius="none" src="./bun.png" width={30} />
                }
                variant={borderVariant}
              >
                Bun
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image
                    isBlurred
                    radius="none"
                    src="./elysiajs.png"
                    width={50}
                  />
                }
                variant={borderVariant}
              >
                Elysia
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image isBlurred radius="none" src="./fiber.png" width={50} />
                }
                variant={borderVariant}
              >
                Fiber
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image isBlurred radius="none" src="./mysql.png" width={30} />
                }
                variant={borderVariant}
              >
                MySQL
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image
                    isBlurred
                    radius="none"
                    src="./postgresql.png"
                    width={30}
                  />
                }
                variant={borderVariant}
              >
                PostgreSQL
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image isBlurred radius="none" src="./mssql.png" width={30} />
                }
                variant={borderVariant}
              >
                MicrosoftSQL
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image
                    isBlurred
                    radius="none"
                    src="./mongodb.png"
                    width={30}
                  />
                }
                variant={borderVariant}
              >
                MongoDB
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image
                    isBlurred
                    radius="none"
                    src="./prisma.png"
                    width={30}
                  />
                }
                variant={borderVariant}
              >
                Prisma
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image isBlurred radius="none" src="./knex.png" width={30} />
                }
                variant={borderVariant}
              >
                Knex
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image
                    isBlurred
                    radius="none"
                    src="./arduino.png"
                    width={30}
                  />
                }
                variant={borderVariant}
              >
                Arduino
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image
                    isBlurred
                    radius="none"
                    src="./easyeda.png"
                    width={30}
                  />
                }
                variant={borderVariant}
              >
                Easy EDA
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image
                    isBlurred
                    radius="none"
                    src="./docker.png"
                    width={30}
                  />
                }
                variant={borderVariant}
              >
                Docker
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image
                    isBlurred
                    radius="none"
                    src="./ubuntu.png"
                    width={30}
                  />
                }
                variant={borderVariant}
              >
                Ubuntu
              </Button>
              <Button
                className="w-44 h-12"
                radius="sm"
                startContent={
                  <Image isBlurred radius="none" src="./cisco.png" width={50} />
                }
                variant={borderVariant}
              >
                Cisco
              </Button>
            </div>
          </ScrollShadow>
        </div>
      </div>
    </section>
  );
}

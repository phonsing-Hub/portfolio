import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

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
    <section className="flex justify-center items-center display">
      <div className="flex flex-wrap  gap-10 w-full ">
        <div className="flex-[1_0_500px]">
          <Chip
            className="mb-5"
            size="lg"
            variant="dot"
            radius="sm"
            color="primary"
          >
            <p className=" font-bold text-2xl"> About Me</p>
          </Chip>
          <p className="text-lg indent-10 text-pretty">
            สวัสดีครับ ผมชื่อ พลสิงห์ ตาเละมัน
            เป็นนักศึกษาที่มหาวิทยาลัยสรีปทุมสาขาวิศวกรรมคอมพิวเตอร์
            มีความสนใจและหลงใหลในการพัฒนาเทคโนโลยีและนวัตกรรมต่างๆ ภายในสาขานี้
            ความเชี่ยวชาญของผมอยู่ที่การพัฒนาซอฟต์แวร์และออกแบบฮาร์ดแวร์
            ผ่านประสบการณ์และความคุ้นเคยในการทำงานจริง
            ผมมีความกระตือรือร้นในการเรียนรู้และพัฒนาตนเองอยู่เสมอ
            และมุ่งมั่นที่จะสร้างสรรค์ผลงานที่มีคุณค่าและน่าสนใจในสาขานี้อย่างต่อเนื่องครับ
          </p>
          <br />
          <Divider />
        </div>
        <div className="flex-[1_0_500px]">
        <Chip
            className="mb-5"
            size="lg"
            variant="dot"
            radius="sm"
            color="primary"
          >
            <p className=" font-bold text-2xl"> My Skill</p>
          </Chip>
          <ScrollShadow className="h-[280px]" hideScrollBar>
            <div className=" flex flex-wrap gap-4 w-full">
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={<Image src="./c:cpp.png" width={30} isBlurred />}
              >
                C/C++
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image
                    src="./javascript.png"
                    width={30}
                    isBlurred
                    radius="none"
                  />
                }
              >
                JavaScript
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={<Image src="./ts.png" width={50} isBlurred />}
              >
                TypeScript
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={<Image src="./php.png" width={50} isBlurred />}
              >
                PHP
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={<Image src="./go.png" width={50} isBlurred />}
              >
                Go
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={<Image src="./py.png" width={30} isBlurred />}
              >
                Python
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={<Image src="./react.png" width={30} isBlurred />}
              >
                React/Native
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image
                    src="./nextjs.svg"
                    width={30}
                    isBlurred
                    radius="none"
                  />
                }
              >
                Next
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={<Image src="./tw.png" width={30} isBlurred />}
              >
                Tailwindcss
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image
                    src="./nextui.png"
                    width={30}
                    isBlurred
                    radius="none"
                  />
                }
              >
                Next UI
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image src="./ant.png" width={30} isBlurred radius="none" />
                }
              >
                Ant Design
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image src="./node.png" width={50} isBlurred radius="none" />
                }
              >
                Node
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image
                    src="./express.png"
                    width={30}
                    isBlurred
                    radius="none"
                  />
                }
              >
                Express
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image src="./bun.png" width={30} isBlurred radius="none" />
                }
              >
                Bun
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image
                    src="./elysiajs.png"
                    width={50}
                    isBlurred
                    radius="none"
                  />
                }
              >
                Elysia
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image src="./fiber.png" width={50} isBlurred radius="none" />
                }
              >
                Fiber
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image src="./mysql.png" width={30} isBlurred radius="none" />
                }
              >
                MySQL
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image
                    src="./postgresql.png"
                    width={30}
                    isBlurred
                    radius="none"
                  />
                }
              >
                PostgreSQL
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image src="./mssql.png" width={30} isBlurred radius="none" />
                }
              >
                MicrosoftSQL
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image
                    src="./mongodb.png"
                    width={30}
                    isBlurred
                    radius="none"
                  />
                }
              >
                MongoDB
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image
                    src="./prisma.png"
                    width={30}
                    isBlurred
                    radius="none"
                  />
                }
              >
                Prisma
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image src="./knex.png" width={30} isBlurred radius="none" />
                }
              >
                Knex
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image
                    src="./arduino.png"
                    width={30}
                    isBlurred
                    radius="none"
                  />
                }
              >
                Arduino
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image
                    src="./easyeda.png"
                    width={30}
                    isBlurred
                    radius="none"
                  />
                }
              >
                Easy EDA
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image
                    src="./docker.png"
                    width={30}
                    isBlurred
                    radius="none"
                  />
                }
              >
                Docker
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image
                    src="./ubuntu.png"
                    width={30}
                    isBlurred
                    radius="none"
                  />
                }
              >
                Ubuntu
              </Button>
              <Button
                variant={borderVariant}
                radius="sm"
                className="w-44 h-12"
                startContent={
                  <Image src="./cisco.png" width={50} isBlurred radius="none" />
                }
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

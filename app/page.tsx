import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Globe } from "@/components/background/Globe";
import NextLink from "next/link"
import WordAnimation from "@/components/background/WordAnimation";
import TechStack from "@/components/tech/techstack";

export default function Home() {
  return (
    <section className="mx-1">
      <div className=" relative flex size-full max-w-full justify-center items-center overflow-hidden rounded-lg px-40 pb-40 pt-8 md:pb-60">
        <div className="z-[10]">
          <WordAnimation />
        </div>
        <Globe className="top-20" />
      </div>
      <div className="">
        <Card shadow="none" radius="sm" className="bg-transparent">
          <CardBody>
            <div className="flex flex-wrap gap-4 ">
              <div className="flex-[1_0_300px] flex justify-center items-center">
                <div className=" relative -left-3 p-4">
                  <Image
                    width={220}
                    alt="NextUI hero Image"
                    src="./me.jpg"
                    isBlurred
                    className="m-5"
                  />
                </div>
              </div>
              <div className="flex-[3_0_300px] relative flex flex-col items-center sm:items-start">
                <h1 className="md:text-4xl text-2xl font-bold">Phonsing Taleman</h1>
                <span className="text-xs font-bold text-default-400 ">
                  or you can call me
                  <Chip
                    size="sm"
                    radius="sm"
                    variant="shadow"
                    color="primary"
                    className="ml-1 mt-1"
                  >
                    <span className="font-bold text-xs">NOAH</span>
                  </Chip>
                </span>

                <div className="flex gap-2 mt-4 font-bold">
                  <Chip radius="sm" variant="dot" color="primary" size="sm">
                    <p className="font-bold">Computer Engineering</p>
                  </Chip>
                  <Chip radius="sm" variant="dot" color="primary" size="sm">
                    <p className="font-bold">Software Developer</p>
                  </Chip>
                </div>
                <article className="text-pretty mt-5">
                  <span className="text-default-600 text-sm font-bold indent-5">
                    Hi..👋🏻 ผม พลสิงห์ ตาเละมัน หรือเรียกผมว่า โนอาร์ ก็ได้น้า
                    ผมเป็นนักศึกษามหาวิทยาลัยศรีปทุมสาขาวิศวกรรมคอมพิวเตอร์
                    มาดูกันว่าในนี้มีอะไรให้เพื่อนๆได้รับชมกันบ้าง  <NextLink href="/authentication" className="text-primary text-sm font-bold">Let's go</NextLink>
                  </span>
                 
                </article>
                <Divider className="mt-5" />
               <div className="md:w-[700px] w-[340px] mt-2 mx-auto">
               <TechStack />
               </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

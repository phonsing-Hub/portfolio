"use client";

import { TypeAnimation } from "react-type-animation";
import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";
import { Snippet } from "@nextui-org/snippet";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaLine } from "react-icons/fa6";

export default function Section1() {
  const iconSiize = 34;

  return (
    <section className="flex justify-center items-center display">
      <div className="flex flex-wrap gap-4 w-full lg:px-10 ">
        <div className="flex-[1_0_350px] flex justify-center items-center ">
          <div className="p-1 bdImg">
            <div className="image lg:w-[380px] lg:h-[380px] w-[250px] h-[250px]">
              <img
                alt="avatar"
                className="lg:w-[380px] lg:h-[380px] w-[250px] h-[250px]"
                src="./phonsing.jpg"
              />
            </div>
          </div>
        </div>
        <div className="flex-[1_0_350px] flex flex-col justify-center lg:items-start items-center z-10">
          <p className="font-bold text-3xl lg:text-5xl">Phonsing Taleman</p>
          <TypeAnimation
            className="lg:text-3xl text-2xl"
            repeat={Infinity}
            sequence={[
              "Computer Engineering",
              1000,
              "Front-end Developer",
              1000,
              "Back-end Developer",
              1000,
            ]}
            speed={50}
            style={{ display: "inline-block" }}
            wrapper="span"
          />
          <h1>
            You can call me{" "}
            <Chip color="primary" radius="sm" variant="shadow">
              <p className="font-bold"> NOAH</p>
            </Chip>
          </h1>
          <br />
          <Divider className="w-72" />
          <div className="flex mt-2 gap-6">
            <Popover placement="bottom">
              <PopoverTrigger>
                <Button isIconOnly color="warning" variant="light">
                  <MdOutlineAttachEmail size={iconSiize} />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Email</div>
                  <Snippet symbol className="bg-transparent" size="sm">
                    <p className="text-tiny">polsing.ap@gmail.com</p>
                  </Snippet>
                </div>
              </PopoverContent>
            </Popover>

            <Popover placement="bottom">
              <PopoverTrigger>
                <Button isIconOnly color="secondary" variant="light">
                  <FaPhoneVolume size={iconSiize} />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Phone</div>
                  <Snippet symbol className="bg-transparent" size="sm">
                    <p className="text-tiny">0647633547</p>
                  </Snippet>
                </div>
              </PopoverContent>
            </Popover>

            <Popover placement="bottom">
              <PopoverTrigger>
                <Button isIconOnly color="primary" variant="light">
                  <SiFacebook size={iconSiize} />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Facebook</div>
                  <Link
                    isExternal
                    showAnchorIcon
                    className="cursor-pointer"
                    href="https://www.facebook.com/noar.ps.3?mibextid=ZbWKwL"
                    size="sm"
                  >
                    Polsing PS
                  </Link>
                </div>
              </PopoverContent>
            </Popover>

            <Popover placement="bottom">
              <PopoverTrigger>
                <Button isIconOnly color="danger" variant="light">
                  <SiInstagram size={iconSiize} />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Instagram</div>
                  <Link
                    isExternal
                    showAnchorIcon
                    className="cursor-pointer"
                    href="https://www.instagram.com/p.phonsing_/profilecard/?igsh=aGY5OXAxYnd5YmF0"
                    size="sm"
                  >
                    p.phonsing_
                  </Link>
                </div>
              </PopoverContent>
            </Popover>

            <Popover placement="bottom">
              <PopoverTrigger>
                <Button isIconOnly color="success" variant="light">
                  <FaLine size={iconSiize} />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Line</div>
                  <Snippet symbol className="bg-transparent" size="sm">
                    <p className="text-tiny">0647633547</p>
                  </Snippet>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </section>
  );
}

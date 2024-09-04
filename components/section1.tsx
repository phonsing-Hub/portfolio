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
    <section className="flex justify-center items-start pt-32 display bg1 ">
      <div className="flex flex-wrap gap-10 w-full px-10 ">
        <div className="flex-[1_0_400px] flex justify-center items-center">
          <div className="p-1 bdImg">
            <div className="image">
              <img src="./phonsing.jpg" alt="avatar" />
            </div>
          </div>
        </div>
        <div className="flex-[1_0_400px] flex flex-col justify-center lg:items-start items-center ">
          <p className="font-bold text-5xl">Phonsing Taleman</p>
          <TypeAnimation
            sequence={[
              "Computer Engineering",
              1000,
              "Front-end Developer",
              1000,
              "Back-end Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <h1>
            You can call me{" "}
            <Chip radius="sm" color="primary" variant="shadow">
              <p className="font-bold"> NOAH</p>
            </Chip>
          </h1>
          <br />
          <Divider className="w-72" />
          <div className="flex mt-2 gap-6">
            <Popover placement="bottom">
              <PopoverTrigger>
                <Button isIconOnly variant="light" color="warning">
                  <MdOutlineAttachEmail size={iconSiize} />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Email</div>
                  <Snippet className="bg-transparent" symbol size="sm">
                    <p className="text-tiny">polsing.ap@gmail.com</p>
                  </Snippet>
                </div>
              </PopoverContent>
            </Popover>

            <Popover placement="bottom">
              <PopoverTrigger>
                <Button isIconOnly variant="light" color="secondary">
                  <FaPhoneVolume size={iconSiize} />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Phone</div>
                  <Snippet className="bg-transparent" symbol size="sm">
                    <p className="text-tiny">0647633547</p>
                  </Snippet>
                </div>
              </PopoverContent>
            </Popover>

            <Popover placement="bottom">
              <PopoverTrigger>
                <Button isIconOnly variant="light" color="primary">
                  <SiFacebook size={iconSiize} />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Facebook</div>
                  <Link
                    isExternal
                    className="cursor-pointer"
                    size="sm"
                    showAnchorIcon
                    href="https://www.facebook.com/noar.ps.3?mibextid=ZbWKwL"
                  >
                    Polsing PS
                  </Link>
                </div>
              </PopoverContent>
            </Popover>

            <Popover placement="bottom">
              <PopoverTrigger>
                <Button isIconOnly variant="light" color="danger">
                  <SiInstagram size={iconSiize} />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Instagram</div>
                  <Link
                    isExternal
                    className="cursor-pointer"
                    size="sm"
                    showAnchorIcon
                    href="https://www.instagram.com/p.phonsing_/profilecard/?igsh=aGY5OXAxYnd5YmF0"
                  >
                    p.phonsing_
                  </Link>
                </div>
              </PopoverContent>
            </Popover>

            <Popover placement="bottom">
              <PopoverTrigger>
                <Button isIconOnly variant="light" color="success">
                  <FaLine size={iconSiize} />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Line</div>
                  <Snippet className="bg-transparent" symbol size="sm">
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

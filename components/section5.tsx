import React from "react";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";

import ImageGroup from "./imageGroup";

export default function section4() {
  const src = [
    "https://raw.githubusercontent.com/phonsing-Hub/Images/main/e1.png",
    "https://raw.githubusercontent.com/phonsing-Hub/Images/main/e2.png",
    "https://raw.githubusercontent.com/phonsing-Hub/Images/main/e3.png",
  ];

  return (
    <section className="display2 relative pt-4">
      <div className="w-full h-full flex flex-wrap gap-10 mt-24 ">
        <div className=" flex-[1_0_300px] flex flex-col justify-center">
          <h1 className="font-bold text-4xl">Authentication</h1>
          <br />
          <p className="indent-10 text-xl">
            ลองทำ Login ด้วย Authentication JSON Web Token เก็บผ่าน Cookie
            แล้วให้ server อ่าน cookie (ที่แนบมาคู่กับ HTTP request)
            เพื่อทำการเช็คว่า token ถูกต้องหรือไม่
          </p>
          <br />
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/phonsing-Hub/E-commerce"
          >
            Github repo
          </Link>
          <br />
          <Divider />
          <p className="text-sm mt-2">
            ยังมี project อีกมากมายสามารถดูผลงานทั้งหมดได้ที่{" "}
            <Link
              isExternal
              showAnchorIcon
              className="cursor-pointer font-bold"
              href="https://github.com/phonsing-Hub"
            >
              My Github
            </Link>
          </p>
        </div>
        <div className=" flex-[1_0_300px] flex justify-center ">
          <ImageGroup src={src} />
        </div>
      </div>
    </section>
  );
}

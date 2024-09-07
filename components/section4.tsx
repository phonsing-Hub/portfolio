import React from "react";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";

import ImageGroup from "./imageGroup";

export default function section4() {
  const src = [
    "https://raw.githubusercontent.com/phonsing-Hub/NetworkMonitoring/main/Img1.png",
    "https://raw.githubusercontent.com/phonsing-Hub/NetworkMonitoring/main/Img2.png",
  ];

  return (
    <section className="display2 relative pt-4">
      <div className="w-full h-full flex flex-wrap gap-10 mt-24 ">
        <div className=" flex-[1_0_300px] flex justify-center ">
          <ImageGroup src={src} />
        </div>
        <div className=" flex-[1_0_300px] flex flex-col justify-center">
          <h1 className="font-bold text-4xl">Network Monitoring</h1>
          <br />
          <p className="indent-10 text-xl">
            ทดสอบทำระบบ Network Monitor เพื่อตรวจสอบดูว่า service หรือ devices
            ของเราว่า status เป็นอย่างไร เเล้วใช้ Google Map API เพื่อดู
            location service หรือ devices ของเรา
          </p>
          <br />
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/phonsing-Hub/NetworkMonitoring"
          >
            Github repo
          </Link>
          <br />
          <Divider />
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Image } from "antd";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";

export default function section3() {
  return (
    <section className="display2 relative pt-4">
      <p className="title text-5xl text-center font-bold">
        <span className="title-word title-word-1 Shimg">THIS</span>
        <span> </span>
        <span className="title-word title-word-2 Shimg">IS</span>
        <span> </span>
        <span className="title-word title-word-3 Shimg">MY</span>
        <span className="title-word title-word-4 Shimg">PROJECT</span>
      </p>
      <div className="w-full h-full flex flex-wrap gap-4 mt-24">
        <div className=" flex-[1_0_300px] flex flex-col justify-center" data-aos="fade-up-right" data-aos-delay="100">
          <h1 className="font-bold text-4xl">Embedded System</h1>
          <br />
          <p className="indent-10 text-xl">
            ออกแบบวงจรดิจิทัล รถเดินตามแสงโดยใช้ IC logic gate
            มาสร้างเป็นวงจรดิจิทัล ตามที่คำณวนไว้ (K-Map)
            โดยถ้าเจอเเสงตรงไหนให้เดินไปทางนั้น เเต่ถ้าไม่มีเเสงให้เดินวนหาเเสง
          </p>
          <br />
          <p className="font-bold">
            สามารถทดลองเล่นได้ที่{" "}
            <Link
              isExternal
              showAnchorIcon
              className="font-bold"
              href="https://www.tinkercad.com/things/a9ByuVDriVn-phonsing-taleman"
            >
              My tinkercad
            </Link>
          </p>
          <br />
          <Divider />
        </div>
        <div className=" flex-[1_0_300px] flex flex-col items-center" data-aos="fade-up-left" data-aos-delay="500">
          <Image
            className="Shimg"
            src="https://raw.githubusercontent.com/phonsing-Hub/Images/main/p1.png"
            width={360}
          />
          <div className="grid grid-cols-3 gap-2">
            <Image
              className="Shimg"
              src="https://raw.githubusercontent.com/phonsing-Hub/Images/main/p2.png"
              width={115}
            />
            <Image
              className="Bximg"
              src="https://raw.githubusercontent.com/phonsing-Hub/Images/main/p3.png"
              width={115}
            />
            <Image
              className="Bximg"
              src="https://raw.githubusercontent.com/phonsing-Hub/Images/main/p4.png"
              width={115}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

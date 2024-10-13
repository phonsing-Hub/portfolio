import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { details } from "./data";
import Display from "./display";

export default function Authentication() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">Authentication</h1>
      <Divider className="my-2" />
      <p className="indent-10 text-pretty">{details.title}</p>
      <br />
      <h3>
        การนำ Authentication มาใช้ในระบบสามารถพบได้ในหลากหลายบริบท ตัวอย่างเช่น
      </h3>
      <div className="pl-4 flex flex-col gap-2 mt-2">
        <span className="flex gap-2">
          <p className="font-bold">ระบบล็อกอินเว็บไซต์</p>
          เมื่อผู้ใช้พยายามเข้าสู่ระบบของเว็บไซต์ เช่น Facebook หรือ Gmail
          ผู้ใช้ต้องใส่ชื่อผู้ใช้และรหัสผ่านเพื่อยืนยันตัวตน
        </span>
        <span className="flex gap-2">
          <p className="font-bold">แอปพลิเคชันธนาคาร</p>
          ผู้ใช้ต้องใส่รหัสผ่านหรือใช้การสแกนใบหน้า/ลายนิ้วมือเพื่อยืนยันตัวตนในการเข้าถึงบัญชีธนาคารของตน
        </span>
        <span className="flex gap-2">
          <p className="font-bold">การเข้าถึงเครือข่ายองค์กร</p>
          พนักงานที่ต้องการเข้าถึงข้อมูลในเครือข่ายภายในขององค์กรต้องยืนยันตัวตนผ่านการกรอกชื่อผู้ใช้และรหัสผ่านหรือใช้การยืนยันตัวตนแบบสองขั้นตอน
          (Two-Factor Authentication)
        </span>
        <span className="flex gap-2">
          <p className="font-bold">การยืนยันตัวตนผ่าน OTP</p>
          ในกรณีที่มีการทำธุรกรรมออนไลน์ ผู้ใช้จะได้รับรหัส OTP ทาง SMS
          หรืออีเมล และต้องกรอกรหัสนี้เพื่อยืนยันตัวตน
        </span>
        <span className="flex gap-2">
          <p className="font-bold">การใช้บัตรพนักงาน</p>
          การใช้บัตรพนักงานหรือบัตรประจำตัวประชาชนเพื่อนำไปสแกนผ่านเครื่องอ่านบัตรเพื่อเข้าอาคารหรือพื้นที่ที่ต้องการความปลอดภัยสูง
        </span>
      </div>
      <br />
      <h3>ยกตัวอย่างการทำระบบล็อกอินเว็บไซต์</h3>
      <p className="indent-10 text-pretty">
        การทำระบบล็อกอินเว็บไซต์นั้นมีหลากหลายวิธีมาก ในที่นี้เราจะลองทำ Login
        ด้วย Authentication JSON Web Token เก็บผ่าน Cookie แล้วให้ server อ่าน
        cookie (ที่แนบมาคู่กับ HTTP request) เพื่อทำการเช็คว่า token
        ถูกต้องหรือไม่
      </p>
      <Image
        isZoomed
        alt="Flowchart"
        src="Flowchart.jpg"
        className="size-4/6 mx-auto my-4"
      />
      <h3 className="font-bold text-xl">JSON Web Token คืออะไร ?</h3>
      <span className="indent-10 text-pretty">
        <Link className=" cursor-pointer" href="https://jwt.io/" isExternal>
          JSON Web Token (JWT)
        </Link>
        คือมาตรฐานเปิดที่ใช้ในการแลกเปลี่ยนข้อมูลที่ถูกเข้ารหัสระหว่างฝ่ายต่างๆ
        (เช่น ระหว่างเซิร์ฟเวอร์กับไคลเอนต์) ในรูปแบบของ JSON โดยข้อมูลภายใน JWT
        จะถูกเซ็นด้วยวิธีการเข้ารหัสเพื่อยืนยันความถูกต้องและความสมบูรณ์ของข้อมูล
      </span>

      <h3 className="mt-4">JWT ประกอบด้วยสามส่วนหลัก ๆ ดังนี้</h3>
      <div className="pl-4 flex flex-col gap-2 mt-2">
        <span className="flex gap-2 text-pretty">
          <p className="font-bold">Header</p>
          ประกอบด้วยข้อมูลประเภทของโทเค็น (มักจะเป็น JWT)
          และอัลกอริทึมที่ใช้เซ็น เช่น HS256 หรือ RS256
        </span>
        <span className="flex gap-2 text-pretty">
          <p className="font-bold">Payload</p>
          ข้อมูลที่ต้องการส่ง เช่น ข้อมูลผู้ใช้ สิทธิ์การเข้าถึง หรือข้อมูลอื่น
          ๆ โดยข้อมูลในส่วนนี้ไม่ถูกเข้ารหัสลับ (encryption)
          แต่จะถูกเข้ารหัสเซ็นชื่อ (signing) เพื่อให้แน่ใจว่าไม่ถูกเปลี่ยนแปลง
        </span>
        <span className="flex gap-2 text-pretty">
          <p className="font-bold">Signature</p>
          เป็นการเข้ารหัสข้อมูลของส่วนหัวและส่วนข้อมูลโดยใช้อัลกอริทึมและกุญแจลับที่กำหนดขึ้น
          เพื่อรับรองว่าข้อมูลไม่ถูกดัดแปลง
        </span>
      </div>
      <br />
      <p className="text-pretty indent-10">
        อย่างไรก็ตาม การเข้ารหัสด้วย JWT สามารถ decode กลับมาได้ ดังนั้น
        ไม่ควรเก็บข้อมูลที่ sensitive เช่น password ข้อมูลบัตรเครดิต
        ข้อมูลส่วนตัวที่ละเอียดอ่อน (เลขประจำตัวประชาชน) เพราะ Payload ของ JWT
        ไม่ได้ถูกเข้ารหัสแบบปกปิด (encryption) แต่เพียงแค่ถูกเข้ารหัสเซ็นชื่อ
        (signing) ซึ่งหมายความว่าใครก็ตามที่มีโทเค็น JWT สามารถทำการ decode
        ข้อมูลใน Payload กลับมาได้ง่าย ๆ โดยใช้เครื่องมือที่หาได้ทั่วไป เช่น
        jwt.io
      </p>
      <br />
      <span className="text-pretty">
        <p className="font-bold text-[#F31260]">
          *ถ้าเเบบนี้เราก็สามารถสร้าง jwt token ผ่านเครื่องมือทั่วไปอย่าง jwt.io
          เพื่อปลอมเป็นคนอื่นได้ใช่ไหม ?{" "}
        </p>
        ต้องบอกว่า jwt จะมีส่วนที่เป็น Signature ส่วนนี้จะเก็บกุญเเจในการสร้าง
        token ขึ้นมา ถ้ากุญเเจไม่ตรงกันก็จะไม่ทำการ decode (false) Signature
        นี้จะถูกเก็บอยู่กับฝั่ง server ซึ่งต้องรักษาไว้ให้ดี
      </span>

      <div className="mt-4">
        <p className="text-pretty">
          เรามาลองสร้างระบบ Employee System ด้วยภาษา Go กันนะครับ
          โดยเราจะมีการทำ Authentication การทำ Middleware ให้ทำการ Login
          ก่อนที่จะเข้ามาที่ API เส้นนี้ได้
        </p>
      </div>
      <Display />
      <br />
      <span className=" font-bold">
        Git Repositories:{" "}
        <Link
          href="https://github.com/phonsing-Hub/EmployeeSystem"
          isExternal
          showAnchorIcon
          className="cursor-pointer"
        >
          github.com/phonsing-Hub/EmployeeSystem
        </Link>{" "}
      </span>
    </div>
  );
}

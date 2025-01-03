import { Icons } from "@/components/magicui/icons";

export const BLOG_TITLE = [
  {
    title: "Authentication & JWT",
    href: "/blog/authentication",
    dates: "Sep 2024",
    active: true,
    description:
      "การยืนยันตัวตน (Authentication) เป็นกระบวนการตรวจสอบว่าใครเป็นผู้ใช้งานระบบ โดยในระบบสมัยใหม่มักใช้วิธีที่เรียกว่า JWT (JSON Web Token) เพื่อจัดการการยืนยันตัวตนของผู้ใช้ในระบบที่มีการเชื่อมต่อระหว่างเซิร์ฟเวอร์และไคลเอนต์ เช่น เว็บแอปพลิเคชัน และแอปพลิเคชันมือถือ",
    technologies: ["Go", "Go Fiber", "JWT"],
    links: [
      {
        type: "Website",
        href: "/blog/authentication",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/auth.png",
    video: "",
  },
  {
    title: "What Is Docker?",
    href: "/blog/docker",
    dates: "Sep 2024",
    active: true,
    description:
    "Docker เป็นแพลตฟอร์มที่พัฒนาขึ้นเพื่อช่วยจัดการและปรับปรุงการทำงานของแอปพลิเคชันด้วยการใช้งาน คอนเทนเนอร์ (Containers) ซึ่งช่วยให้การพัฒนาและทดสอบแอปพลิเคชันเป็นไปอย่างมีประสิทธิภาพมากขึ้น",
    technologies: ["Docker"],
    links: [
      {
        type: "Website",
        href: "/blog/docker",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/docker.png",
    video: "",
  },
  {
    title: "Hardware Controlled System",
    href: "https://www.tinkercad.com/things/a9ByuVDriVn-phonsing-taleman",
    dates: "Sep 2024",
    active: true,
    description:
    "Hardware-Controlled System ระบบควบคุมที่ใช้ฮาร์ดแวร์เป็นหลักในการทำงาน โดยการทำงานทั้งหมดของระบบขึ้นอยู่กับการออกแบบวงจร เช่น การใช้ลอจิกเกต (AND, OR, NOT)",
    technologies: ["Hardware"],
    links: [
      {
        type: "Website",
        href: "https://www.tinkercad.com/things/a9ByuVDriVn-phonsing-taleman",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/hardwae.png",
    video: "",
  },
  {
    title: "Face Recognition",
    href: "https://github.com/phonsing-Hub/ImageProcessing",
    dates: "Oct 2024",
    active: true,
    description:
    "เทคโนโลยีการจดจำใบหน้า (Face Recognition) เป็นเทคโนโลยีที่ถูกสร้างขึ้นมาเพื่อวิเคราะห์โครงสร้างของใบหน้ามนุษย์ จากนั้นจะส่งข้อมูลใบหน้าที่ตรวจจับได้ไปยังระบบเพื่อประมวลผลและใช้งานตามวัตถุประสงค์ที่กำหนดไว้",
    technologies: ["Python", "OpenCV", "Dlib"],
    links: [
      {
        type: "Source",
        href: "https://github.com/phonsing-Hub/ImageProcessing",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/face.png",
    video: "",
  },
];

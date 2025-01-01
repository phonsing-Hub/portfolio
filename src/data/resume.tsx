import { Icons } from "@/components/magicui/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "p.phonsing_",
  initials: "APL-PS",
  url: "https://www.phonsinghub.com",
  location: "Bangbuathong, Nonthaburi",
  locationLink: "https://maps.app.goo.gl/cUXxfMgTgEvttuxH7",
  description:
    "Hii My name is NOAH I'm Software Developer and Computer Engineering Welcome To My Portfolio",
  summary:
    "สวัสดีครับ ผม NOAH เป็น Software Developer ที่ชอบเรียนรู้และลองใช้เทคโนโลยีใหม่ๆ อยู่เสมอ ผมสนุกกับการออกแบบและพัฒนาซอฟต์แวร์ที่ช่วยแก้ปัญหาและทำให้ชีวิตง่ายขึ้น งานของผมเน้นที่การสร้างโซลูชันที่ใช้งานได้จริงและตอบโจทย์ความต้องการของผู้ใช้งานครับ ถ้ามีอะไรอยากพูดคุยหรือปรึกษาเรื่องเทคโนโลยี ยินดีมากๆ ครับ!",
  avatarUrl: "/me.png",
  skills: [
    "C/C++",
    "Go",
    "JavaScript",
    "TypeScript",
    "Python",
    "PHP",
    "Bun",
    "Node.js",
    "React.js",
    "Tailwindcss",
    "Ant Design",
    "Next.js",
    "Next UI",
    "Magic UI",
    "Express.js",
    "Elysia.js",
    "Go Fiber",
    "My SQL",
    "MS SQL",
    "Pg SQL",
    "Mongo DB",
    "Prisma",
    "Go Grom",
    "Arduino",
    "Easy EDA",
    "Ubuntu",
    "Google Cloud",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "polsing.ap@gmail.com",
    tel: "+66 064 763 3547",
    location: "Bangbuathong, Nonthaburi",
    time: "Mon - Fri, 10:00 - 22:00",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/phonsing-Hub/portfolio",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/polsing-ps",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/phonsing_",
        icon: Icons.x,

        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "มหาวิทยาลัยศรีปทุม",
      href: "https://www.spu.ac.th/",
      degree: "สาขา วิศวกรรมคอมพิวเตอร์",
      logoUrl: "spu07.gif",
      start: "2021",
      end: "Present",
    },
  ],
  hackathons: [
    {
      title: "มหาวิทยาลัยศรีปทุม",
      dates: "2021 - 2022",
      group: "คณะวิศวกรรมศาสตร์",
      description:
        "สาขาวิศวกรรมยายนต์สมัยใหม่",
      image:
        "spu07.gif",
      links: [],
    },
    {
      title: "มหาวิทยาลัยศรีปทุม",
      dates: "2022 - present",
      group: "คณะเทคโนโลยีสารสนเทศ",
      description:
        "สาขาวิศวกรรมคอมพิวเตอร์",
      image:
        "spu07.gif",
      links: [],
    }
    
  ],
} as const;



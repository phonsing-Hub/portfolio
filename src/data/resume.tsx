import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "p.phonsing_",
  initials: "APL-PS",
  url: "https://www.phonsinghub.com",
  location: "Bangbuathong, Nonthaburi",
  locationLink: "https://maps.app.goo.gl/cUXxfMgTgEvttuxH7",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "สวัสดีครับ ผมชื่อ NOAH เป็น Software Developer ที่เชี่ยวชาญด้านการพัฒนาซอฟต์แวร์และออกแบบระบบ ผมหลงใหลในเทคโนโลยีใหม่ๆ และมุ่งมั่นสร้างสรรค์โซลูชันที่มีประสิทธิภาพและตอบโจทย์ความต้องการของผู้ใช้งานครับ",
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
    tel: "+66 64 763 3547",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/phonsing-Hub/blog",
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
      school: "Sripatum University",
      href: "https://www.spu.ac.th/",
      degree: "Computer Engineering",
      logoUrl: "spu07.gif",
      start: "2021",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Employee System",
      href: "https://github.com/phonsing-Hub/EmployeeSystem",
      dates: "Sep 2024",
      active: true,
      description:
        "technology designed to streamline core HR services and improve workforce productivity.",
      technologies: ["React", "Go Fiber", "Gorm DB", "TailwindCSS", "Next UI"],
      links: [
        {
          type: "Website",
          href: "https://github.com/phonsing-Hub/EmployeeSystem",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/",
      video: "",
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

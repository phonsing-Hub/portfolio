import React from "react";
import { Chip } from "@heroui/chip";

import { HackathonCard } from "../hackathon-card";

const educational = [
  {
    title: "Modern Automotive Engineering",
    dates: "2021 - 2022",
    location: "Sripatum University",
    description:
      "Learn to design, analyze, and test vehicles, manage production systems, and operate automotive-related equipment like engines.",
    image: "/reshot-icon-engineering-trophy.svg",
    mlh: "https://www.spu.ac.th/fac/engineer/programs/next-generation-automotive-engineering-1",
    links: [],
  },
  {
    title: "Computer Engineering",
    dates: "2022 - 2025",
    location: "Sripatum University",
    description:
      "Learn to design computer systems, including both hardware and software, for use in various information processing operations.",
    image: "/reshot-icon-electronics.svg",
    mlh: "https://www.spu.ac.th/fac/informatics/programs/computer-engineering",
    links: [],
  },
];

const work = [
  {
    title: "Network Monitoring",
    dates: "2021 - 2024",
    location: "Somsin Service Limited Partnership",
    description:
      "Management and Maintenance of Electronic Server Networks (ATM)",
    image: "/reshot-icon-network.svg",
    mlh: "#",
    links: [],
  },
  {
    title: "Back End Developer",
    dates: "2025",
    location: "T.A.I. Solution Service Co., Ltd.",
    description:
      "Design system architecture, create flowcharts for each workflow, develop and test APIs, and manage databases.",
    image: "https://taisolution.tech/assets/pictures/logo_normal-1.png",
    mlh: "https://taisolution.tech/",
    links: [],
  },
];

export default function AboutSection() {
  return (
    <section className="my-10" id="about-section">
      <div
        className="grid md:grid-cols-2 gap-10 pl-2 backdrop-blur-[4px] rounded-md"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="flex flex-col gap-4">
          <Chip color="secondary" radius="sm" size="sm" variant="dot">
            Educational
          </Chip>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {educational.map((project, id) => (
              <HackathonCard
                key={id}
                dates={project.dates}
                description={project.description}
                image={project.image}
                links={project.links}
                location={project.location}
                title={project.title}
              />
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <Chip color="secondary" radius="sm" size="sm" variant="dot">
            Work
          </Chip>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {work.map((project, id) => (
              <HackathonCard
                key={id}
                dates={project.dates}
                description={project.description}
                image={project.image}
                links={project.links}
                location={project.location}
                title={project.title}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

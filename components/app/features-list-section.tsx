import { Network, BicepsFlexed, GalleryVerticalEnd } from "lucide-react";
import { title, subtitle } from "../primitives";
import { DotPattern } from "../ui/dot-pattern";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { cn } from "@heroui/theme";

export default function FeaturesListSection() {
  const data = [
    {
      icon: <Network />,
      title: "Implemented a robust API",
      description:
        "Developed a high-performance and secure API for social media platforms and enterprises using Go Fiber, Fast API, andPostgreSQL.",
    },
    {
      icon: <BicepsFlexed />,
      title: "Skill Sets",
      description:
        "Designing and developing cutting-edge web applications tailored to meet your business needs with modern frameworks and technologies.",
    },
    {
      icon: <GalleryVerticalEnd />,
      title: "Professional Background",
      description:
        "3+ years of experience in full-stack development, focusing on delivering practical and scalable solutions.",
    },
  ];
  return (
    <section
      className="features-list-section flex flex-col justify-center relative my-4"
      id="features-list-section"
    >
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="flex flex-col md:w-2/3 w-full ">
        <h2 className={title()}>My</h2>
        <h2 className={title({ color: "green" })}>Expertise & Achievements</h2>
        <p className={subtitle()}>
          Discover my portfolio highlights, professional background, and key
          skill sets that showcase my capabilities and expertise.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {data.map((item, index) => (
          <Card key={index} className="s" radius="sm">
            <CardHeader
              className={cn(title({ size: "xs" }), "flex gap-2 items-center")}
            >
              {item.icon}
              {item.title}
            </CardHeader>
            <CardBody>
              <p className="text-sm text-default-500">{item.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}

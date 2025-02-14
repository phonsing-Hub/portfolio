"use client";
import { Chip } from "@heroui/chip";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { BlogTitle } from "../../components/blogTitle";
import BlurFade from "@/components/ui/blur-fade";

export default function BlogPage() {

  return (
    <>
      <div className="gap-4 grid grid-cols-2 md:grid-cols-3 ">
        {BlogTitle.map((item, index) => (
          <BlurFade key={index} inView delay={0.25 + index * 0.05}>
            <Card className="shadow-none rounded-lg s" isDisabled={item.isDisabled}>
              <CardHeader className="aspect-video" as={Link} href={item.href} isDisabled={item.isDisabled}>
                <Image
                  alt={item.img}
                  src={item.img}
                  className="rounded-md"
                />
              </CardHeader>
              <CardBody>
                <p className="text-lg font-bold multiline-truncate-header">
                  {item.title.toUpperCase()}
                </p>
                <p className="text-xs text-default-600 multiline-truncate h-8">
                  {item.description}
                </p>
                <Chip
                  as={Link}
                  href={item.href}
                  showAnchorIcon
                  size="sm"
                  radius="sm"
                  variant="flat"
                  className="max-w-max mt-2"
                >
                  more
                </Chip>
              </CardBody>
            </Card>
          </BlurFade>
        ))}
      </div>
    </>
  );
}

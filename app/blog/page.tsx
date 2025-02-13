"use client";
import { useState } from "react";
import { Form } from "@heroui/form";
import { Chip } from "@heroui/chip";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import { TbListSearch } from "react-icons/tb";

import { BlogTitle } from "./blogTitle";

import { MagicCard } from "@/components/ui/magic-card";
import BlurFade from "@/components/ui/blur-fade";

type FormData = {
  search: string;
};

export default function BlogPage() {
  const [submitted, setSubmitted] = useState<FormData | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data as FormData);
  };

  return (
    <>
      {/* <Form className="max-w-xs mb-8" onSubmit={onSubmit}>
        <Input
          isDisabled
          name="search"
          placeholder="Search ..."
          radius="sm"
          startContent={
            <TbListSearch className=" text-default-600" size={22} />
          }
          type="search"
        />
      </Form>
      {submitted && (
        <div className="text-small text-default-500">
          You submitted: {submitted.search}
        </div>
      )} */}
      <div className="gap-4 grid grid-cols-2 ">
        {BlogTitle.map((item, index) => (
          <BlurFade key={index} inView delay={0.25 + index * 0.05}>
            {/* <MagicCard gradientColor={"#93c5fd"}> */}
            <Card className="shadow-none rounded-md s dark:shadow-sm dark:shadow-zinc-700">
              <CardHeader className="aspect-video" as={Link} href={item.href}>
                <Image
                  alt={item.img}
                  src={item.img}
                 // className="rounded-md s dark:shadow-sm dark:shadow-zinc-700"
                />
              </CardHeader>
              <CardBody>
                <p className=" text-xl font-bold multiline-truncate-header">
                  {item.title.toUpperCase()}
                </p>
                <p className="text-sm text-default-600 multiline-truncate h-10">
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
            {/* </MagicCard> */}
          </BlurFade>
        ))}
      </div>
    </>
  );
}

"use client";
import { useState } from "react";
import { Form } from "@heroui/form";
import { Chip } from "@heroui/chip";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
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
      <Form className="max-w-xs mb-8" onSubmit={onSubmit}>
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
      )}
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {BlogTitle.map((item, index) => (
          <BlurFade key={index} inView delay={0.25 + index * 0.05}>
            <MagicCard key={index} gradientColor={"#93c5fd"}>
              <Card
                isPressable
                as={Link}
                className="border-zinc-200 border dark:border-zinc-700"
                href={item.href}
                isDisabled={item.title === "Face Recognition" ? true : false}
                shadow="none"
              >
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large text-start">
                    {item.title}
                  </h4>
                  <small className="text-default-500">{item.dates}</small>
                  <p className="text-tiny text-start mt-2 multiline-truncate min-h-8">
                    {item.description}
                  </p>
                </CardHeader>
                <CardBody className="overflow-visible p-4 ">
                  <Image
                    alt={item.title}
                    className="object-cover rounded-xl "
                    src={item.img}
                    // width={270}
                  />
                </CardBody>
                <CardFooter className="gap-1">
                  {item.tag.map((item, index) => (
                    <Chip
                      key={index}
                      className=" text-xs font-bold"
                      color="primary"
                      radius="sm"
                      size="sm"
                      variant="flat"
                    >
                      {item}
                    </Chip>
                  ))}
                </CardFooter>
              </Card>
            </MagicCard>
          </BlurFade>
        ))}
      </div>
    </>
  );
}

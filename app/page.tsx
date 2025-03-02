"use client";
import { useEffect } from "react";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ScrollText, Github } from "lucide-react";
import AOS from "aos";

import { siteConfig } from "@/config/site";
import ContentSection from "@/components/app/content-section";
import DropdownBlog from "@/components/app/dropdown-blog";
// const reviews = [
//   "/bg/1.png",
//   "/bg/2.png",
//   "/bg/3.png",
//   "/bg/4.png",
//   "/bg/5.png",
//   "/bg/6.png",
// ];

const blog = (
  <div className="hidden sm:flex gap-2 absolute right-0">
    {/* <ThemeSwitch /> */}
    <Button
      as={Link}
      href="/blog"
      radius="sm"
      size="sm"
      startContent={<ScrollText className="text-default-600" />}
      variant="flat"
    >
      Blog
    </Button>
    <Button
      as={Link}
      href={siteConfig.links.github}
      radius="sm"
      size="sm"
      startContent={<Github className="text-default-600"/>}
      variant="flat"
    >
      Github
    </Button>
  </div>
);


export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container max-w-full mx-auto">
      <section className="h-96 relative overflow-hidden" id="">
        {/* <GridMotion items={reviews} gradientColor="" /> */}
        <img
          alt="11.png"
          className="w-full h-full object-cover"
          src="bg/11.png"
        />
      </section>
      <header className="bg-zinc-50 dark:bg-zinc-900">
        <section className="max-w-6xl mx-auto px-4">
          <div className="h-20 flex items-center gap-8 relative">
            <div className=" relative top-[-30px]">
              <Avatar
                isBordered
                className="w-28 h-28 text-large"
                src="174466.jpg"
              />
            </div>
            <div id="name">
              <h1 className="font-bold">{siteConfig.name}</h1>
              <h2 className="hidden sm:flex text-xs font-bold text-default-500">
                {siteConfig.nickname}
              </h2>
              <DropdownBlog/>
            </div>
            {blog}
          </div>
        </section>
      </header>
      <main className="max-w-7xl mx-auto px-6" id="content">
        <ContentSection />
      </main>
    </div>
  );
}

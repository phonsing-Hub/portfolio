"use client";
import { ScrollShadow } from "@nextui-org/react";
import { LuArrowRight } from "react-icons/lu";

import BlurFade from "@/components/magicui/blur-fade";
import BoxContect from "@/components/magicui/BoxContect";
import ShinyButton from "@/components/ui/shiny-button";
import Link from "next/link";
import Auth from "@/markdown/auth/auth.mdx";
const BLUR_FADE_DELAY = 0.04;

function page() {
  return (
    <ScrollShadow hideScrollBar className="h-screen py-12 sm:py-16 ">
      <main className="max-w-4xl mx-auto px-2">
        <section id="content">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <article className="prose dark:prose-invert max-w-4xl">
            <Auth/>
            </article>
          </BlurFade>
        </section>
        <section className="flex w-full justify-end my-4">
        <Link href="/blog/docker" className="flex items-center ">
          <ShinyButton >
              <span className="flex items-center ">WHAT IS A DOCKER ?
              <LuArrowRight size={16} className="mb-[1px]" /></span>
          </ShinyButton>
          </Link>
        </section>
        <section id="contact">
          <div className="py-10 border-t">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <BoxContect />
            </BlurFade>
          </div>
        </section>
      </main>
    </ScrollShadow>
  );
}

export default page;

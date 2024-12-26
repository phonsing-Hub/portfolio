"use client"
import { ScrollShadow } from "@nextui-org/react";
import BlurFade from "@/components/magicui/blur-fade";
import BoxContect from "@/components/magicui/BoxContect";


const BLUR_FADE_DELAY = 0.04;

function page() {
  return (
    <ScrollShadow hideScrollBar className="h-screen py-12 sm:py-16 ">
      <main className="max-w-4xl mx-auto" >
        <section id="content">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-2xl font-bold">Docker</h2>
            
          </BlurFade>
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

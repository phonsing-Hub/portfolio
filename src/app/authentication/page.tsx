import { ScrollShadow } from "@nextui-org/react";
import BlurFade from "@/components/magicui/blur-fade";
import BoxContect from "@/components/magicui/BoxContect";
import Auth from "@/markdown/auth/auth.mdx";
export const metadata = {
  title: "Authentication & JWT",
  description:
    "Learn the basics of authentication and its implementation in modern web applications.",
};

const BLUR_FADE_DELAY = 0.04;

function page() {
  return (
    <ScrollShadow hideScrollBar className="h-screen py-12 sm:py-16 ">
      <main className="max-w-4xl mx-auto px-4">
        <section id="content">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <article className="prose dark:prose-invert max-w-4xl">
              <Auth />
            </article>
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

import { DATA } from "@/data/resume";
import { BLOG_TITLE } from "@/data/blog-title";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { ParticlesBg } from "@/components/magicui/ParticlesBg";
import { OrbitingCircle } from "@/components/magicui/OrbitingCircle";
import { ScrollShadow } from "@nextui-org/react";
import { MagicCard } from "@/components/ui/magic-card";
import BoxContect from "@/components/magicui/BoxContect";
import Markdown from "react-markdown";
import ShinyButton from "@/components/ui/shiny-button";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <>
      <ParticlesBg />
      <ScrollShadow
        hideScrollBar
        className="flex flex-col h-screen pb-12 sm:pb-24 "
      >
        <section id="hero">
          <OrbitingCircle />
        </section>
        <br />
        <div className="px-4">
          <section id="about">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-2xl font-bold">About</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Markdown className="prose max-w-full text-pretty font-sans text-md text-muted-foreground dark:prose-invert">
                {DATA.summary}
              </Markdown>
            </BlurFade>
          </section>
          <br />
          <section id="education">
            <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <h2 className="text-2xl font-bold">Education</h2>
              </BlurFade>
              {DATA.education.map((education, id) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <ResumeCard
                    key={education.school}
                    href={education.href}
                    logoUrl={education.logoUrl}
                    altText={education.school}
                    title={education.school}
                    subtitle={education.degree}
                    period={`${education.start} - ${education.end}`}
                  />
                </BlurFade>
              ))}
            </div>
          </section>
          <br />
          <section id="skills">
            <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <h2 className="text-2xl font-bold">Skills</h2>
              </BlurFade>
              <div className="flex flex-wrap gap-1">
                {DATA.skills.map((skill, id) => (
                  <BlurFade key={skill} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                    <Badge key={skill}>{skill}</Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>
          <br />
          <section id="projects">
            <div className="space-y-12 w-full py-12">
              <BlurFade delay={BLUR_FADE_DELAY * 11}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <ShinyButton>
                      <p className="font-bold">Projects and Articles</p>
                    </ShinyButton>
                  </div>
                </div>
              </BlurFade>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                {BLOG_TITLE.map((project, id) => (
                  <BlurFade
                    key={project.title}
                    delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                  >
                    <MagicCard
                      className="cursor-pointer shadow-md"
                      gradientColor={"rgb(30, 64, 175, 0.4)"}
                    >
                      <ProjectCard
                        href={project.href}
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        dates={project.dates}
                        tags={project.technologies}
                        image={project.image}
                        video={project.video}
                        links={project.links}
                      />
                    </MagicCard>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>
          <br />
          <section id="contact">
            <div className="py-10 border-t">
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <BoxContect />
              </BlurFade>
            </div>
          </section>
        </div>
      </ScrollShadow>
    </>
  );
}

import { DATA } from "@/data/resume";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { ParticlesBg } from "@/components/magicui/ParticlesBg";
import { OrbitingCircle } from "@/components/magicui/OrbitingCircle";
import { ScrollShadow } from "@nextui-org/react";
import { MagicCard } from "@/components/ui/magic-card";
import {HackathonCard} from "@/components/hackathon-card";
import Link from "next/link";
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
       <section id="about" >
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
        <section id="education" >
          <div className="flex min-h-0 flex-col gap-y-3 pl-4">
            {/* <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-2xl font-bold">Education</h2>
            </BlurFade> */}
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    group={project.group}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </div>
        </section>
        <br />
        <section id="skills" >
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
        <section id="projects" >
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
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <MagicCard
                    className="cursor-pointer shadow-2xl"
                    gradientColor={"#1e40af"}
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
        <section id="contact" >
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just shoot me a dm{" "}
                  <Link
                    href={DATA.contact.social.X.url}
                    className="text-blue-500 hover:underline"
                  >
                    with a direct question on twitter
                  </Link>{" "}
                  and I&apos;ll respond whenever I can. I will ignore all
                  soliciting.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
       </div>
      </ScrollShadow>
    </>
  );
}

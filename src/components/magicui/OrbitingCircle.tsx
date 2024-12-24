import Globe from "@/components/ui/globe";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export function OrbitingCircle() {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 2}>
      <div className="relative flex size-full items-center justify-center overflow-hidden border-b bg-transparent pb-40 pt-8 md:pb-60 ">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center sm:text-8xl text-6xl min-h-32 font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          WELCOME !
        </span>
        <Globe className="top-28" />
      </div>
    </BlurFade>
  );
}

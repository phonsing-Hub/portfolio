import { Image } from "@heroui/image";

import { Marquee } from "./ui/marquee";

export function MarqueeDemo({ reviews }: { reviews: string[] }) {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mq top-[-200px]">
      <Marquee pauseOnHover>
        {firstRow.map((review, index) => (
          <Image
            key={index}
            isZoomed
            alt={review}
            className="w-80 aspect-video border cursor-pointer"
            src={review}
          />
        ))}
      </Marquee>
      <Marquee pauseOnHover reverse>
        {secondRow.map((review, index) => (
          <Image
            key={index}
            isZoomed
            alt={review}
            className="w-80 aspect-video border cursor-pointer"
            src={review}
          />
        ))}
      </Marquee>
      <Marquee pauseOnHover>
        {firstRow.map((review, index) => (
          <Image
            key={index}
            isZoomed
            alt={review}
            className="w-80 aspect-video border cursor-pointer"
            src={review}
          />
        ))}
      </Marquee>
      <Marquee pauseOnHover reverse>
        {secondRow.map((review, index) => (
          <Image
            key={index}
            isZoomed
            alt={review}
            className="w-80 aspect-video border cursor-pointer"
            src={review}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </div>
  );
}

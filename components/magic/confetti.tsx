"use client";

import confetti from "canvas-confetti";
import { Button } from "@nextui-org/button";
import { HeartFilledIcon } from "../icons";

export function ConfettiSideCannons() {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div className="relative">
      <Button
        onPress={handleClick}
        className="text-sm font-normal text-default-600 bg-default-100"
        startContent={<HeartFilledIcon className="text-danger" />}
      >
        Sponsor
      </Button>
    </div>
  );
}

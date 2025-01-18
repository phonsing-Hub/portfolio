"use client";

import { cn } from "@heroui/theme";
import { forwardRef, useRef } from "react";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { FaUser, FaServer } from "react-icons/fa";

import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full max-w-xl mx-auto items-center justify-center overflow-hidden p-8"
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <Circle ref={div1Ref}>
            <FaUser size={22} />
          </Circle>
          <Circle ref={div2Ref}>
            <FaServer size={22} />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        curvature={20}
        endYOffset={-10}
        fromRef={div1Ref}
        startYOffset={-10}
        toRef={div2Ref}
      />
      <AnimatedBeam
        reverse
        containerRef={containerRef}
        curvature={-20}
        endYOffset={10}
        fromRef={div1Ref}
        startYOffset={10}
        toRef={div2Ref}
      />
    </div>
  );
}

export function Diagram() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Image
        isZoomed
        alt="auth"
        className="size-5/6 mx-auto"
        src="https://success.outsystems.com/TK_Resource/b449fa16-f1aa-451b-bbc4-4bb6aa05a945"
      />
      <Link
        isExternal
        showAnchorIcon
        className="text-xs"
        href="https://success.outsystems.com/documentation/outsystems_developer_cloud/managing_outsystems_platform_and_apps/cloud_native_architecture_of_outsystems_developer_cloud/architecture_of_authentication_and_authorization_mechanism/"
      >
        Diagram Outsystems
      </Link>
    </div>
  );
}

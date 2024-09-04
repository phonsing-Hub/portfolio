"use client";
import React, { useState } from "react";
import { HiRocketLaunch } from "react-icons/hi2";
import {
  Watermark,
} from "antd";
import type { ColorPickerProps, GetProp, WatermarkProps } from "antd";

type Color = Extract<
  GetProp<ColorPickerProps, "value">,
  string | { cleared: any }
>;

interface WatermarkConfig {
  content: string;
  color: string | Color;
  fontSize: number;
  zIndex: number;
  rotate: number;
  gap: [number, number];
  offset?: [number, number];
}

export default function WatermarkBG({
  children,
}: {
  children: React.ReactNode;
}) {
  const [config, setConfig] = useState<WatermarkConfig>({
    content: "APL",
    color: "rgba(0, 0, 0, 0.05)",
    fontSize: 100,
    zIndex: 0,
    rotate: 0,
    gap: [100, 300],
    offset: undefined,
  });
  const { content, color, fontSize, zIndex, rotate, gap, offset } = config;
  const watermarkProps: WatermarkProps = {
    content,
    zIndex,
    rotate,
    gap,
    offset,
    font: { color: typeof color === 'string' ? color : color.toRgbString(), fontSize },
  };

  return <Watermark {...watermarkProps}>
    {children}
  </Watermark>

}

"use client";
import React from "react";
import { Image } from "antd";

interface ImageGroupProps {
  src: string[];
}
const ImageGroup: React.FC<ImageGroupProps> = ({ src }) => {
  return (
    <Image.PreviewGroup items={src}>
      <Image
        //width={360}
        className="rounded-md Bximg2"
        src={src[0]}
      />
    </Image.PreviewGroup>
  );
};

export default ImageGroup;

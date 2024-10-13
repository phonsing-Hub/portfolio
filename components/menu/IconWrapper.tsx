"use client"
import React from "react";
import { cn } from "@/lib/utils";
interface IconWrapperType {
    className?: string;
    children : React.ReactNode
}
export const IconWrapper = ({children, className}:IconWrapperType) => (
  <div className={cn(className, "flex items-center rounded-small justify-center p-2")}>
    {children}
  </div>
);
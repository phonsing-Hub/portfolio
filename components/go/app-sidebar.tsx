"use client";

import * as React from "react";
import {
  ArrowsUpFromLine,
  BookType,
  Bug,
  Globe,
  Bot,
  Parentheses,
  ChevronsLeftRightEllipsis,
  FileDiff,
  Hexagon,
  Database,
  ShieldCheck,
  ChartNoAxesCombined,
  HardDriveUpload,
  LaptopMinimalCheck,
} from "lucide-react";

import { NavMain } from "@/components/go/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Introduction",
      url: "/blog/go",
      icon: Globe,
      isActive: true,
      items: [
        { title: "History", url: "/blog/go" },
        { title: "Features of Go", url: "#" },
        { title: "Installation", url: "#" },
      ],
    },
    {
      title: "Basic Go Programming",
      url: "#",
      icon: Bot,
      isActive: false,
      items: [
        { title: "Syntax", url: "#" },
        { title: "Variables", url: "#" },
        { title: "Operators", url: "#" },
        { title: "Conditions", url: "#" },
        { title: "Loops", url: "#" },
      ],
    },
    {
      title: "Functions",
      url: "#",
      icon: Parentheses,
      isActive: false,
      items: [
        { title: "Defining", url: "#" },
        { title: "Return Types", url: "#" },
        { title: "Variadic", url: "#" },
        { title: "Defer & Panic", url: "#" },
        { title: "Error Handling", url: "#" },
        { title: "Custom Errors", url: "#" },
      ],
    },
    {
      title: "Data Types",
      url: "/blog/go/datatype",
      icon: ChevronsLeftRightEllipsis,
      isActive: false,
      items: [
        { title: "Arrays", url: "#" },
        { title: "Slices", url: "#" },
        { title: "Maps", url: "#" },
        { title: "Structs", url: "#" },
        { title: "Pointers", url: "#" },
        { title: "Interfaces", url: "#" },
      ],
    },
    {
      title: "Concurrency",
      url: "/blog/go/concurrency",
      icon: ArrowsUpFromLine,
      isActive: false,
      items: [
        { title: "Goroutines", url: "#" },
        { title: "Channels", url: "#" },
        { title: "Buffered vs Unbuffered", url: "#" },
        { title: "Select", url: "#" },
        { title: "Mutex", url: "#" },
        { title: "WaitGroups", url: "#" },
        { title: "sync Package", url: "#" },
      ],
    },
    {
      title: "File I/O",
      url: "/blog/go/file",
      icon: FileDiff,
      isActive: false,
      items: [
        { title: "Read/Write", url: "#" },
        { title: "JSON Parsing", url: "#" },
        { title: "JSON Writing", url: "#" },
        { title: "CSV Handling", url: "#" },
      ],
    },
    {
      title: "Go Fiber",
      url: "/blog/go/fiber",
      icon: Hexagon,
      isActive: false,
      items: [
        { title: "Intro", url: "#" },
        { title: "Setup", url: "#" },
        { title: "Endpoints", url: "#" },
        { title: "Middleware", url: "#" },
        { title: "Requests", url: "#" },
        { title: "Database", url: "#" },
      ],
    },
    {
      title: "Database",
      url: "/blog/go/db",
      icon: Database,
      isActive: false,
      items: [
        { title: "Connect", url: "#" },
        { title: "GORM", url: "#" },
        { title: "Migrations", url: "#" },
        { title: "CRUD", url: "#" },
        { title: "Relationships", url: "#" },
        { title: "Optimization", url: "#" },
      ],
    },
    {
      title: "Auth",
      url: "/blog/go/auth",
      icon: ShieldCheck,
      isActive: false,
      items: [
        { title: "JWT Auth", url: "#" },
        { title: "Middleware", url: "#" },
        { title: "OAuth2", url: "#" },
        { title: "RBAC", url: "#" },
      ],
    },
    {
      title: "Forms",
      url: "/blog/go/form",
      icon: BookType,
      isActive: false,
      items: [
        { title: "go-form", url: "#" },
        { title: "Validation", url: "#" },
        { title: "Sanitization", url: "#" },
        { title: "File Upload", url: "#" },
      ],
    },
    {
      title: "Testing & Debug",
      url: "/blog/go/testing",
      icon: Bug,
      isActive: false,
      items: [
        { title: "Logging", url: "#" },
        { title: "pprof Debugging", url: "#" },
        { title: "Unit Tests", url: "#" },
        { title: "Integration Tests", url: "#" },
        { title: "Mocking", url: "#" },
      ],
    },
    {
      title: "Performance",
      url: "/blog/go/performance",
      icon: ChartNoAxesCombined,
      isActive: false,
      items: [
        { title: "Redis Cache", url: "#" },
        { title: "Fiber Cache", url: "#" },
        { title: "Optimizing API", url: "#" },
      ],
    },
    {
      title: "Deploy",
      url: "/blog/go/deploy",
      icon: HardDriveUpload,
      isActive: false,
      items: [
        { title: "Build Binary", url: "#" },
        { title: "Docker", url: "#" },
        { title: "CI/CD", url: "#" },
        { title: "Cloud", url: "#" },
        { title: "Kubernetes", url: "#" },
      ],
    },
    {
      title: "Monitoring",
      url: "/blog/go/monitoring",
      icon: LaptopMinimalCheck,
      isActive: false,
      items: [
        { title: "Metrics", url: "#" },
        { title: "Logging & Errors", url: "#" },
        { title: "Rate Limiting", url: "#" },
        { title: "Graceful Shutdown", url: "#" },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className=" sticky top-[64px]">
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

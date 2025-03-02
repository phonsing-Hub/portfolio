"use client";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

function Footer() {
  return (
    <footer className="container max-w-7xl mx-auto px-6">
      <Divider />
      <div className="flex justify-between pt-5 pb-12">
        <div className="flex gap-2">
          <span className="text-default-600 text-xs">© 2025</span>
          <p className="text-xs uppercase">APL-PS</p>
        </div>
        <div className="flex gap-2">
          <ThemeSwitch />
          <Link
            isExternal
            className="text-default-600 cursor-pointer"
            href={siteConfig.links.facebook}
          >
            <Facebook className="size-5"/>
          </Link>
          <Link
            isExternal
            className="text-default-600 cursor-pointer"
            href={siteConfig.links.instagram}
          >
            <Instagram className="size-5"/>
          </Link>
          <Link
            isExternal
            className="text-default-600 cursor-pointer"
            href={siteConfig.links.linkedin}
          >
            <Linkedin className="size-5"/>
          </Link>
          <Link
            isExternal
            className="text-default-600 cursor-pointer"
            href={siteConfig.links.twitter}
          >
            <Twitter className="size-5"/>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

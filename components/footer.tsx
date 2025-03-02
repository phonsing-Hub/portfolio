"use client";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

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
            <FiFacebook size={18} />
          </Link>
          <Link
            isExternal
            className="text-default-600 cursor-pointer"
            href={siteConfig.links.instagram}
          >
            <FaInstagram size={18} />
          </Link>
          <Link
            isExternal
            className="text-default-600 cursor-pointer"
            href={siteConfig.links.linkedin}
          >
            <FiLinkedin size={18} />
          </Link>
          <Link
            isExternal
            className="text-default-600 cursor-pointer"
            href={siteConfig.links.twitter}
          >
            <FaXTwitter size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

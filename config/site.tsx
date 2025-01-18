export type SiteConfig = typeof siteConfig;
import { PiUserListBold } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";

export const siteConfig = {
  name: "Phonsing",
  description: "portfolio of NOAH",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Introduction",
      icon: <PiUserListBold size={22} />,
      href: "/",
    },
    {
      label: "Blog",
      icon: <CgNotes size={22} />,
      href: "/blog",
    },
  ],
  links: {
    facebook: "https://facebook.com/noar.ps.3",
    instagram: "https://instagram.com/p.phonsing_",
    github: "https://github.com/phonsing-Hub",
    twitter: "https://x.com/phonsing_",
    docs: "https://nextui.org",
    linkedin: "https://linkedin.com/in/polsing-ps/",
    sponsor: "#",
  },
};

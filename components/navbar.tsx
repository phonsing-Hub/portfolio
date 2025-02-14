"use client";
import { PressEvent } from "@react-types/shared";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { User } from "@heroui/user";
import { FaGithub } from "react-icons/fa";
import { Image } from "@heroui/image";
import { ModelPopupSendme } from "./model-sendme";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import { BlogTitle } from "./blogTitle";
import NextLink from "next/link";

import { LuUserSearch } from "react-icons/lu";
import { CiBoxList } from "react-icons/ci";

export const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onNavigat = (e: PressEvent, href: string) => {
    setIsMenuOpen(false);
    router.push(href);
  };
  
  const titleUser = (
    <div className="flex justify-between" id="User">
      <User
        avatarProps={{
          src: "/174466.jpg",
          size: "sm",
          isBordered: true,
        }}
        description="full-stack developers"
        name="p.phonsing_"
      />
    </div>
  );

  return (
    <NextUINavbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image className=" size-12" src="/truffle.svg" />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2 items-center">
          <ThemeSwitch />
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <FaGithub className="text-default-500" size={24} />
          </Link>
        </NavbarItem>

        <NavbarItem className="hidden lg:flex">{titleUser}</NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <FaGithub className="text-default-500" size={24} />
        </Link>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu>
        <div className="flex flex-col gap-2">
          <NavbarMenuItem>
            <Button
              variant="light"
              size="sm"
              radius="sm"
              startContent={<LuUserSearch size={14} />}
              onPress={(e) => onNavigat(e, "/")}
            >
              Me
            </Button>
            <Button
              variant="light"
              size="sm"
              radius="sm"
              startContent={<CiBoxList size={14} />}
              onPress={(e) => onNavigat(e, "/blog")}
            >
              Blog All
            </Button>

            <Divider className="my-2" />
            {BlogTitle.map((item, index) => (
              <Button
                key={`${item}-${index}`}
                isDisabled={item.isDisabled}
                variant="light"
                size="sm"
                radius="sm"
                onPress={(e) => onNavigat(e, item.href)}
              >
                {item.title}
              </Button>
            ))}
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

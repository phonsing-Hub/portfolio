"use client";
import { useState } from "react";
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
import {Divider} from "@heroui/divider";
import { Link } from "@heroui/link";
import { User } from "@heroui/user";
import { FaGithub } from "react-icons/fa";
import { Image } from "@heroui/image";
import { ModelPopupSendme } from "./model-sendme";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="lg:hidden">
        <ModelPopupSendme />
      </div>
    </div>
  );

  return (
    <NextUINavbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      //isBlurred={false}
      onMenuOpenChange={setIsMenuOpen}
      //className="bg-transparent"
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
          <ThemeSwitch/>
          <ModelPopupSendme />
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
        <div className="pl-2">{titleUser}</div>
        <Divider className="my-4" />
        <div className="flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Button
                as={Link}
                className="w-full flex justify-start"
                href={item.href}
                size="sm"
                startContent={item.icon}
                variant="light"
                onPress={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Button>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

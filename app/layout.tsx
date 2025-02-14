import "@/styles/globals.css";
import "aos/dist/aos.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import clsx from "clsx";

import { Providers } from "./providers";

import { ThemeSwitch } from "@/components/theme-switch";
import { Navbar } from "@/components/navbar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} | %s`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/truffle.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased bg-background",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="container mx-auto max-w-5xl px-6 flex-grow">
              {children}
            </main>
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
          </div>
        </Providers>
      </body>
    </html>
  );
}

import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { FaUniversity, FaInstagram } from "react-icons/fa";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import {
  MdOutlineShareLocation,
  MdOutlineMail,
  MdOutlineAccessTime,
} from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

import HeaderSection from "./header-section";
import AboutSection from "./about-section";
import FeaturesListSection from "./features-list-section";
import CtaSection from "./cta-section";

import { siteConfig } from "@/config/site";

export default function ContentSection() {
  return (
    <section className="flex" id="content-section">
      <div className=" w-80 hidden md:flex flex-col my-10  pr-4">
        <div className="max-w-md">
          <div className="space-y-1 flex flex-col">
            <h4 className="text-medium font- uppercase">comEng. spu 👍🏻•_•👍🏻</h4>
            <br />
            <Link className="text-small text-default-500 gap-2 " href="#">
              <FaUniversity size={20} />
              {siteConfig.title.university}
            </Link>
            <Link className="text-small text-default-500 gap-2 " href="#">
              <MdOutlineShareLocation size={20} />
              {siteConfig.title.location}
            </Link>
            <Link className="text-small text-default-500 gap-2 " href="#">
              <MdOutlineMail size={20} />
              {siteConfig.title.mail}
            </Link>
            <Link className="text-small text-default-500 gap-2 " href="#">
              <MdOutlineAccessTime size={20} />
              {siteConfig.title.time}
            </Link>
          </div>
          <Divider className="my-4" />
          <div className="flex h-5 items-center space-x-2 text-small">
            <Link
              className="text-small text-default-500 gap-2 "
              href={siteConfig.links.facebook}
            >
              <FiFacebook size={20} />
            </Link>
            <Link
              className="text-small text-default-500 gap-2 "
              href={siteConfig.links.instagram}
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              className="text-small text-default-500 gap-2 "
              href={siteConfig.links.linkedin}
            >
              <FiLinkedin size={20} />
            </Link>
            <Link
              className="text-small text-default-500 gap-2 "
              href={siteConfig.links.twitter}
            >
              <FaXTwitter size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full my-10">
        <HeaderSection />
        <AboutSection />
        <FeaturesListSection />
        <CtaSection />
      </div>
    </section>
  );
}

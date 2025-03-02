import { useRouter } from "next/navigation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { siteConfig } from "@/config/site";

import { RiArrowDropDownLine, RiGithubLine } from "react-icons/ri";
import { TbNotes } from "react-icons/tb";

export default function DropdownBlog() {
  const router = useRouter();
  return (
    <Dropdown>
      <DropdownTrigger>
        <h2 className="sm:hidden flex text-xs font-bold text-default-500 items-center">
          NOAH <RiArrowDropDownLine size={22} />
        </h2>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          key="blog"
          startContent={<TbNotes />}
          onPress={() => router.push("/blog")}
        >
          Blog
        </DropdownItem>
        <DropdownItem
          key="github"
          className="text-primary"
          color="primary"
          startContent={<RiGithubLine />}
          onPress={() => router.push(siteConfig.links.github)}
        >
          Github
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

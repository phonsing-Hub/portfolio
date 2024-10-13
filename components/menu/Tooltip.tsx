"use client";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { TiContacts } from "react-icons/ti";
import { useRouter } from "next/navigation";

export default function ListMenu() {
  const router = useRouter();
  return (
    <Dropdown
      showArrow
      radius="sm"
      
      classNames={{
        base: "before:bg-default-200", // change arrow background
        content: "p-0 border-small border-divider bg-background",
      }}
    >
      <DropdownTrigger>
        <Button
          disableRipple
          className=" font-bold text-default-600"
          size="md"
          variant="light"
          radius="sm"
          endContent={<TiContacts size={22} />}
        >
          Docs
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        disabledKeys={["profile"]}
        
        className="p-3"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
        onAction={(key) => router.push(String(key))}
      >
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem
            key="/"
            textValue="Phonsing Taleman profile"
            className="opacity-100"
          >
            <User
              name="Phonsing Taleman"
              description="@2002"
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              avatarProps={{
                size: "sm",
                src: "me.jpg",
              }}
            />
          </DropdownItem>
          <DropdownItem key="authentication" description="Employess System" textValue="Authentication">
            <p className=" font-bold">Authentication</p>
          </DropdownItem>
          <DropdownItem key="docker" isReadOnly textValue="Docker" >
          <p className=" font-bold">Docker</p>
          </DropdownItem>
          <DropdownItem key="embedded_system" isReadOnly textValue="Embedded System">
          <p className=" font-bold">Embedded System</p>
          </DropdownItem>
          <DropdownItem key="network_monitoring" isReadOnly textValue="Network Monitoring">
          <p className=" font-bold">Network Monitoring</p>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="help_and_feedback" isReadOnly>
            Help & Feedback
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}

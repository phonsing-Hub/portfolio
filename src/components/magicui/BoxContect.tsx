import { User, Link } from "@nextui-org/react";
import { FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import ShineBorder from "@/components/ui/shine-border";
import { DATA } from "@/data/resume";
import { HiOutlineMail } from "react-icons/hi";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { IoMdTime } from "react-icons/io";
function BoxContect() {
  return (
    <div className="flex justify-between flex-wrap gap-4">
      <ShineBorder
        className="relative rounded-lg border w-60 p-2 px-3"
        color={["#006FEE", "#7828C8", "#F31260"]}
      >
        <User
          name="Phonsing Taleman"
          description={
            <div className="flex gap-2">
              <Link href="https://www.facebook.com/noar.ps.3/" isExternal>
                <FaSquareFacebook />
              </Link>
              <Link href="https://www.instagram.com/p.phonsing_" isExternal>
                <FaInstagram />
              </Link>
            </div>
          }
          avatarProps={{
            src: "/me2.jpg",
            isBordered: true,
          }}
        />
      </ShineBorder>
      <div>
        <div className="pl-3 font-sans text-sm text-muted-foreground ">
          <span className="flex items-center gap-1">
            <HiOutlineMail size={18} />
            {DATA.contact.email}
          </span>
          <span className="flex items-center gap-1">
            <LiaMapMarkedAltSolid size={18} />
            {DATA.contact.location}
          </span>
          <span className="flex items-center gap-1">
            <IoMdTime size={18} />
            {DATA.contact.time}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BoxContect;

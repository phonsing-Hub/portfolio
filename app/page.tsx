import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Section5 from "@/components/section5";
import Section6 from "@/components/section6";

export default function Home() {
  return (
    <>
      <div className=" relative">
        <img
          alt="Logo"
          className="bgPage absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 lg:w-[500px] w-1/2"
          src="./bgPage.png"
        />
        <Section1 />
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </>
  );
}

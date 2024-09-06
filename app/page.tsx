import Section1 from "@/components/section1";
import Section2 from "@/components/section2";

export default function Home() {
  return (
    <>
      <div className=" relative">
        <img
          src="./bgPage.png"
          alt="Logo"
          className="bgPage absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 lg:w-[500px] w-1/2"
        />
        <Section1 />
      </div>
      {/* <Section2/> */}
    </>
  );
}

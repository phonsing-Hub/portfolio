import { globalComponents } from "@/components/ui/mdx";
import { Image } from "@heroui/image";
export const Title = () =>{
    return(
        <div className="flex gap-2 ">
            <h2>Go (Golang)</h2>
            <Image alt="Go" src="https://img.icons8.com/?size=512&id=44442&format=png" className="size-10"/>
        </div>
    )
}
export const Table = () => {
    const { Table } = globalComponents;
    const data = {
      headers: ["ปี", "เวอร์ชัน", "การเปลี่ยนแปลงสำคัญ"],
      rows: [
        [
          "2009",
          "เปิดตัว Go (Experimental)",
          "สนับสนุน Concurrency ด้วย Goroutines และ Channels",
        ],
        [
          "2012",
          "Go 1.0",
          "เวอร์ชันแรกที่เสถียร, ใช้ GOPATH ในการจัดการแพ็กเกจ",
        ],
        [
          "2015",
          "Go 1.5",
          "ปรับปรุง Garbage Collector, ตัด Dependency กับ C, รองรับ Cross Compilation",
        ],
        [
          "2016",
          "Go 1.7",
          "เพิ่ม Context Package, ปรับปรุง Compiler ให้เร็วขึ้น",
        ],
        [
          "2017",
          "Go 1.9",
          "เพิ่ม Type Alias และ Parallel Compilation",
        ],
        [
          "2018",
          "Go 1.11",
          "เปิดตัว Go Modules แทน GOPATH",
        ],
        [
          "2019",
          "Go 1.13",
          "รองรับ Error Wrapping, ปรับปรุง Integer Overflow Handling",
        ],
        [
          "2020",
          "Go 1.15",
          "ปรับปรุง Performance ของ Linker และ Memory Management",
        ],
        [
          "2021",
          "Go 1.17",
          "เปลี่ยนแปลง Internal Calling Convention ให้เร็วขึ้น, ปรับปรุง Slice",
        ],
        [
          "2022",
          "Go 1.18",
          "เปิดตัว Generics (Type Parameters) และ Workspaces",
        ],
        [
          "2023",
          "Go 1.20",
          "ปรับปรุง Performance ของ JSON Encoding และ Error Handling",
        ],
        [
          "2024",
          "Go 1.22",
          "เพิ่มฟีเจอร์ Profile-Guided Optimization (PGO) และปรับปรุงการทำงานของ Goroutines",
        ],
        [
          "2025",
          "Go 1.24",
          "สนับสนุน Generic Type Aliases, ปรับปรุง Runtime ให้เร็วขึ้น, รองรับ WebAssembly ดีขึ้น",
        ],
      ],
    };
  
    return <Table data={data} />;
  };
  
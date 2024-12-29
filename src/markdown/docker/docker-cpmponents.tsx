import { LiaDocker } from "react-icons/lia";
import { FaUbuntu, FaFedora } from "react-icons/fa";
import { FcLinux, FcDebian } from "react-icons/fc";
import { SiOpensuse } from "react-icons/si";
import { RiCentosFill, RiCoreosFill } from "react-icons/ri";
import { PiAppleLogoDuotone, PiWindowsLogoDuotone } from "react-icons/pi";
import { Link, Image } from "@nextui-org/react";
import {globalComponents} from "@/components/magicui/mdx"

import OrbitingCircles from "@/components/ui/orbiting-circles";
const OsIcon = [
  <FaUbuntu key="ubuntu" className="size-28 text-orange-500" />,
  <FcDebian key="debian" className="size-40" />,
  <SiOpensuse key="opensuse" className="size-12 text-green-500" />,
  <FaFedora key="fedora" className="size-12 text-blue-400" />,
  <RiCentosFill key="centos" className="size-12 text-fuchsia-800" />,
  <RiCoreosFill key="coreos" className="size-12 text-rose-600" />,
];
export const DockerIcon = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <LiaDocker className="size-28 text-blue-500 docker" />
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={95}
        duration={20}
        reverse
      >
        <FcLinux className=" size-40" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={95}
        duration={19}
        delay={20}
        reverse
      >
        <PiAppleLogoDuotone className=" size-36" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={95}
        duration={18}
        reverse
      >
        <PiWindowsLogoDuotone className=" size-36 text-blue-700" />
      </OrbitingCircles>

      {OsIcon.map((icon, index) => (
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={190}
          duration={15 - index}
          reverse
          key={index}
          delay={index % 2 == 0 ? 15 : undefined}
        >
          {icon}
        </OrbitingCircles>
      ))}
    </div>
  );
};

export const ImageprogrammerHappy = () => {
  return (
    <div className="flex items-center justify-center">
      <Image src="/2.png" alt="programmer" className="size-48 mx-auto" />
    </div>
  );
};

export const ImageprogrammerAngry = () => {
  return (
    <div className="flex items-center justify-center">
      <Image src="/3.png" alt="programmer" className="size-48 mx-auto" />
    </div>
  );
};

export const ImageDockerEngine = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Image
        src="/DockerEngine.png"
        alt="Docker"
        isZoomed
        className="size-5/6 mx-auto"
      />
      <Link
        href="https://www.docker.com/products/container-runtime/"
        isExternal
        showAnchorIcon
        className="text-xs"
      >
        Docker Engine
      </Link>
    </div>
  );
};

export const Table = () => {
  const { Table } = globalComponents;
  const data = {
    headers: ["Aspect", "Docker (Container)", "Virtual Machine (VM)"],
    rows: [
      ["ทรัพยากร", "ใช้ทรัพยากรน้อยกว่า (แชร์ Kernel)", "ใช้ทรัพยากรมาก (OS แต่ละ VM แยกกัน)"],
      ["Startup Time", "เร็วมาก (ไม่กี่วินาที)", "ช้ากว่า (ต้อง Boot OS แต่ละ VM)"],
      ["Isolation", "ระดับ Process และ File System", "ระดับ Hardware"],
      ["ประสิทธิภาพ", "ดีกว่า (ไม่มี Overhead ของ OS)", "มี Overhead ของ Hypervisor"],
    ]
}
return <Table data={data} />
}

export const CodeHello = `package main

import (
	"log"
	"github.com/gofiber/fiber/v2"
)

func main() {
	// สร้าง Fiber App
	app := fiber.New()

	// สร้าง API Endpoint
  app.Get("/api/:name", func(c *fiber.Ctx) error {
      name := c.Params("name")
      return c.JSON(fiber.Map{
          "message": "Hello, " + name + "!",
      })
  })

	// เริ่มเซิร์ฟเวอร์ที่ Port 3000
	log.Println("Server is running on http://localhost:3000")
	log.Fatal(app.Listen(":3000"))
}`

export const Dockerfile = `# Stage 1: Build Stage
FROM golang:1.22.5 AS builder

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy go.mod and go.sum files to the workspace
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy the rest of the application files
COPY . .

# Build the Go application
#RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main .

# Build the Go application for ARM64 architecture
RUN CGO_ENABLED=0 GOOS=linux GOARCH=arm64 go build -o main .

# Stage 2: Run Stage
FROM alpine:latest

# Install SSL certificates to support HTTPS (optional but recommended)
RUN apk --no-cache add ca-certificates

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy the compiled binary from the build stage
COPY --from=builder /app/main .

# Expose the port the application runs on
EXPOSE 3000

# Command to run the executable
CMD ["./main"]`

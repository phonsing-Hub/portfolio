"use client";

import { cn } from "@/lib/utils";
import { forwardRef, useRef } from "react";
import { Link, Image } from "@nextui-org/react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { FaUser, FaServer } from "react-icons/fa";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-xl mx-auto items-center justify-center overflow-hidden p-8"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <Circle ref={div1Ref}>
            <FaUser size={22} />
          </Circle>
          <Circle ref={div2Ref}>
            <FaServer size={22} />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        startYOffset={-10}
        endYOffset={-10}
        curvature={20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        startYOffset={10}
        endYOffset={10}
        curvature={-20}
        reverse
      />
    </div>
  );
}

function Diagram() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Image
        src="https://success.outsystems.com/TK_Resource/b449fa16-f1aa-451b-bbc4-4bb6aa05a945"
        alt="auth"
        isZoomed
        className="size-5/6 mx-auto"
      />
      <Link
        href="https://success.outsystems.com/documentation/outsystems_developer_cloud/managing_outsystems_platform_and_apps/cloud_native_architecture_of_outsystems_developer_cloud/architecture_of_authentication_and_authorization_mechanism/"
        isExternal
        showAnchorIcon
        className="text-xs"
      >
        Diagram Outsystems
      </Link>
    </div>
  );
}

const CODE_GO = `package main

import (
	"time"
	"github.com/gofiber/fiber/v2"
    "github.com/gofiber/jwt/v3"
	"github.com/golang-jwt/jwt/v5"
)

// Secret Key สำหรับเซ็น JWT
var jwtSecret = []byte("secret_key")

// User Struct สำหรับจำลองข้อมูลผู้ใช้งาน
type User struct {
	Username string \`json:"username"\`
	Password string \`json:"password"\`
}

func main() {
	app := fiber.New()

	// Public Routes (ไม่ต้องตรวจสอบ JWT)
	app.Post("/login", login)

	// Protected Routes (ต้องตรวจสอบ JWT)
	protected := app.Group("/api")
	protected.Use(jwtware.New(jwtware.Config{
		SigningKey: jwtSecret,
	}))

	protected.Get("/dashboard", dashboard)

	// Start Server
	app.Listen(":3000")
}

// Login Handler - สำหรับรับ Username และ Password
func login(c *fiber.Ctx) error {
	// รับข้อมูลจาก Body
	var user User
	if err := c.BodyParser(&user); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request"})
	}

	// ตรวจสอบข้อมูลผู้ใช้งาน (Hardcoded)
	if user.Username != "admin" || user.Password != "password" {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"error": "Invalid credentials"})
	}

	// สร้าง JWT Token
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["sub"] = user.Username
	claims["exp"] = time.Now().Add(time.Hour * 1).Unix() // 1 ชั่วโมง

	// ลงลายเซ็น Token
	tokenString, err := token.SignedString(jwtSecret)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Could not login"})
	}

	// ส่ง JWT กลับไปให้ไคลเอนต์
	return c.JSON(fiber.Map{"token": tokenString})
}

// Dashboard Handler - Protected Route
func dashboard(c *fiber.Ctx) error {
	// ดึงข้อมูลผู้ใช้จาก JWT Claims
	user := c.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	username := claims["sub"].(string)

	return c.JSON(fiber.Map{
		"message": "Welcome to the dashboard!",
		"user":    username,
	})
}`;

export { AnimatedBeamDemo, Diagram, CODE_GO };
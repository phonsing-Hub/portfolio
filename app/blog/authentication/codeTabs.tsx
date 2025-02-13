"use client";
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody } from "@heroui/card";
import { TbBrandGolang } from "react-icons/tb";
import { TbBrandPowershell } from "react-icons/tb";

import { CodeComparison } from "@/components/ui/code-comparison";

const dependency = `go mod init auth-jwt
go get github.com/gofiber/fiber/v2
go get github.com/golang-jwt/jwt/v4`;

const main = `package main

import (
	"auth-jwt/routers"
	"auth-jwt/utils"
	"github.com/gofiber/fiber/v2"
	"log"
)

func main() {
	app := fiber.New()

	// Route สำหรับ login
	app.Post("/api/v1/login", routers.LoginHandler)

	// Route ที่มี middleware
	protected := app.Group("/api/v1/home")
	protected.Use(utils.Decode)
	protected.Get("/", routers.Home)

	// Start server
	log.Fatal(app.Listen(":3000"))
}`;

const routers = `package routers

import(
	"time"
	"auth-jwt/utils"
	"github.com/gofiber/fiber/v2"
)

// User Struct สำหรับจำลองข้อมูลผู้ใช้งาน
type User struct {
	Username string \`json:"username"\`
	Password string \`json:"password"\`
}

func LoginHandler(c *fiber.Ctx) error {
	var user User
	if err := c.BodyParser(&user); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid input"})
	}

	// ตรวจสอบข้อมูลผู้ใช้งาน (Hardcoded)
	if user.Username != "admin" || user.Password != "password" {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"error": "Invalid credentials"})
	}

	// Generate JWT
	token, err := utils.CreateJWT(user.Username)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to generate token"})
	}

	// Set JWT in cookie
	c.Cookie(&fiber.Cookie{
		Name:     "auth",
		Value:    token,
		Expires:  time.Now().Add(time.Hour * 24), // Token expires in 24 hours
		HTTPOnly: true,
		Secure:   false,
		SameSite: "Strict",
	})

	return c.JSON(fiber.Map{"message": "Login successful"})
}

func Home(c *fiber.Ctx) error {
	userID := c.Locals("userID")
	return c.JSON(fiber.Map{
		"message": "Welcome to the home route",
		"userID":  userID,
	})
}`;

const utils = `package utils

import(
	"fmt"
	"time"
	"github.com/golang-jwt/jwt/v4"
	"github.com/gofiber/fiber/v2"

)

// Secret Key สำหรับเซ็น JWT
var jwtSecret = []byte("secret_key")

// CreateJWT creates a JWT token
func CreateJWT(ID string) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"id": ID,
		"exp":     time.Now().Add(time.Hour * 24).Unix(), // Token expires in 24 hours
	})

	return token.SignedString(jwtSecret)
}

// Middleware Decode
func Decode(c *fiber.Ctx) error {
	// ดึง token จาก cookie
	tokenStr := c.Cookies("auth")
	if tokenStr == "" {
		// หากไม่มี token ส่ง error 401
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Missing or invalid token",
		})
	}

	// ตรวจสอบและถอดรหัส token
	token, err := jwt.Parse(tokenStr, func(t *jwt.Token) (interface{}, error) {
		// ตรวจสอบว่าใช้ Signing Method ที่ถูกต้อง
		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", t.Header["alg"])
		}
		return jwtSecret, nil
	})

	// หาก token ไม่ถูกต้อง
	if err != nil || !token.Valid {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Invalid token",
		})
	}

	// ดึง claims จาก token
	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Invalid token claims",
		})
	}

	// ตรวจสอบ expiration
	exp, ok := claims["exp"].(float64)
	if !ok || time.Now().Unix() > int64(exp) {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Token has expired",
		})
	}

	// ส่ง ID จาก claims ไปยัง handler ถัดไป
	c.Locals("userID", claims["id"])

	// เรียก middleware/handler ถัดไป
	return c.Next()
}`;

export function CodeTabs() {
  return (
    <div className="flex w-full flex-col ">
      <Tabs
        aria-label="CodeTabs"
        //color="primary"
        radius="sm"
        size="sm"
        variant="light"
      >
        <Tab
          key="cmd"
          title={
            <div className="flex items-center space-x-2">
              <TbBrandPowershell size={20} />
              <span>cmd</span>
            </div>
          }
        >
          <Card className="shadow-none bg-transparent ">
            <CardBody className="py-[1px] px-1">
              <CodeComparison
                code={dependency}
                darkTheme="github-dark"
                filename="Bash"
                language="bash"
                lightTheme="github-light"
              />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="main"
          title={
            <div className="flex items-center space-x-2">
              <TbBrandGolang size={22} />
              <span>main.go</span>
            </div>
          }
        >
          <Card className="shadow-none bg-transparent">
            <CardBody className="py-[1px] px-1">
              <CodeComparison
                code={main}
                darkTheme="github-dark"
                filename="main.go"
                language="go"
                lightTheme="github-light"
              />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="routers"
          title={
            <div className="flex items-center space-x-2">
              <TbBrandGolang size={22} />
              <span>routers/routers.go</span>
            </div>
          }
        >
          <Card className="shadow-none bg-transparent">
            <CardBody className="py-[1px] px-1">
              <CodeComparison
                code={routers}
                darkTheme="github-dark"
                filename="routers.go"
                language="go"
                lightTheme="github-light"
              />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="utils"
          title={
            <div className="flex items-center space-x-2">
              <TbBrandGolang size={22} />
              <span>utils/utils.go</span>
            </div>
          }
        >
          <Card className="shadow-none bg-transparent">
            <CardBody className="py-[1px] px-1">
              <CodeComparison
                code={utils}
                darkTheme="github-dark"
                filename="utils.go"
                language="go"
                lightTheme="github-light"
              />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}

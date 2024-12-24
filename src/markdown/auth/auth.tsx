import { Image } from '@nextui-org/react'

function Diagram () {
  return (
    <Image src='./Flowchart.jpg' alt='auth' isZoomed className='size-5/6 mx-auto'/>
  )
}
const CODE_GO = `package main

import (
        "fmt"
        "log"
        "time"

        "github.com/gofiber/fiber/v2"
        "github.com/golang-jwt/jwt/v5"
)

var jwtSecret = []byte("your-secret-key") // ควรเก็บ Secret Key ในที่ปลอดภัย

func generateJWT(userID string) (string, error) {
        token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
                "user_id": userID,
                "exp":       time.Now().Add(time.Hour * 24).Unix(), // หมดอายุใน 24 ชั่วโมง
        })

        tokenString, err := token.SignedString(jwtSecret)
        if err != nil {
                return "", err
        }

        return tokenString, nil
}

func verifyJWT(tokenString string) (*jwt.Token, error) {
    token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
        if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
            return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
        }
        return jwtSecret, nil
    })

    if err != nil {
        return nil, err
    }

    return token, nil
}

func main() {
        app := fiber.New()

        app.Post("/login", func(c *fiber.Ctx) error {
                userID := "123" // สมมติว่าได้ User ID มาจากการ Login
                token, err := generateJWT(userID)
                if err != nil {
                        return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Failed to generate token"})
                }

                return c.JSON(fiber.Map{"token": token})
        })

    app.Get("/protected", func(c *fiber.Ctx) error {
        authHeader := c.Get("Authorization")
        if authHeader == "" {
            return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"error": "Missing authorization header"})
        }

        tokenString := authHeader[len("Bearer "):]
        token, err := verifyJWT(tokenString)
        if err != nil || !token.Valid {
            return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"error": "Invalid token"})
        }

        claims, ok := token.Claims.(jwt.MapClaims)
        if !ok {
            return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Invalid token claims"})
        }

        userID := claims["user_id"].(string)

        return c.JSON(fiber.Map{"message": "Protected resource accessed", "user_id": userID})
    })

        log.Fatal(app.Listen(":3000"))
}
`
export  {Diagram, CODE_GO}
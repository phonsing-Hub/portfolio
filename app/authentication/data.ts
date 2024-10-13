const details = {
  title:
    "การ Authentication (ออเทนทิเคชั่น) หรือการยืนยันตัวตน คือ กระบวนการตรวจสอบและยืนยันว่า ผู้ใช้หรือระบบที่กำลังพยายามเข้าถึงข้อมูลหรือบริการต่าง ๆ เป็นใคร โดยใช้ข้อมูลที่ใช้ยืนยัน เช่น ชื่อผู้ใช้และรหัสผ่าน, การส่งรหัส OTP ทางข้อความ, หรือการสแกนลายนิ้วมือ การทำเช่นนี้มีจุดประสงค์เพื่อให้แน่ใจว่าผู้ใช้มีสิทธิ์ในการเข้าถึงข้อมูลหรือบริการนั้น ๆ โดยป้องกันไม่ให้บุคคลที่ไม่มีสิทธิ์เข้ามาใช้งาน",
};

const code = {
  main: `package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
	"github.com/phonsing-Hub/EmployeeSystem/src/db"
	"github.com/phonsing-Hub/EmployeeSystem/src/middleware"
	"github.com/phonsing-Hub/EmployeeSystem/src/routing/auth"
	"github.com/phonsing-Hub/EmployeeSystem/src/routing/emp"
	"os"
	"time"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		panic("Error loading .env file")
	}
	api := os.Getenv("API_VERSION")
	dbuser := os.Getenv("DB_USER")
	dbpass := os.Getenv("DB_PASS")
	dbhost := os.Getenv("DB_HOST")
	dbname := os.Getenv("DB_NAME")

	db, err := db.New(dbuser, dbpass, dbhost, dbname)
	if err != nil {
		panic("failed to connect to database")
	}
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:5173",                       
		AllowMethods:     "GET, POST, PUT, DELETE, OPTIONS",             
		AllowHeaders:     "Origin, Content-Type, Accept, Authorization", 
		AllowCredentials: true,                                          
		MaxAge:           int(24 * time.Hour / time.Second),             
	}))

	app.Use(logger.New())
	//localhost/v1/auth
	auth_v1 := app.Group(api + "/auth")
	auth.SetAuthentication(auth_v1, db.DB)
	emp_v1 := app.Group(api+"/employees", middleware.Token)
	emp.EmployeesRouting(emp_v1, db.DB)
	app.Listen(":3000")
}
  `,
  db: `package db

import (
	"fmt"
	"os"
	"time"
	"github.com/phonsing-Hub/EmployeeSystem/src/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"log"
)

type Db struct {
	DB *gorm.DB
}

func New(dbuser string, dbpass string, dbhost string, dbname string) (*Db, error) {
	dsn := fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		dbuser, dbpass, dbhost, dbname)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{Logger: loggerConfig(true)})
	if err != nil {
		return nil, err
	}
	err = db.AutoMigrate(
		&models.Region{},
		&models.Country{},
		&models.Location{},
		&models.Job{},
		&models.Department{},
		&models.Employee{},
		&models.Dependent{},
		&models.AuthUser{},
		&models.Token{},
		&models.Image{},
	)

	if err != nil {
		log.Fatalf("ไม่สามารถ migrate ตารางได้: %v", err)
	}
	return &Db{DB: db}, nil
}

func loggerConfig(enable bool) logger.Interface {
	if enable {
		newLogger := logger.New(
			log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
			logger.Config{
				SlowThreshold:             time.Second, // Slow SQL threshold
				LogLevel:                  logger.Info, // Set log level
				IgnoreRecordNotFoundError: true,        // Ignore ErrRecordNotFound errors
				ParameterizedQueries:      true,        // Don't include raw SQL queries in logs
				Colorful:                  true,        // Colorize logs
			},
		)
		return newLogger
	}

	// Default silent logger if not enabled
	return logger.Default.LogMode(logger.Silent)
}
`,
  md: `package middleware
import(
	"github.com/gofiber/fiber/v2"
	"github.com/phonsing-Hub/EmployeeSystem/src/utils"

)

func Token(c *fiber.Ctx) error {
	_, err := utils.VerifyToken(c.Cookies("emp_auth"));
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).SendString("Unauthorized");
	}
	return c.Next();
}
`,
  models: `package models

import "time"

type Region struct {
	ID         int       \`gorm:"column:region_id;primaryKey;autoIncrement" json:"region_id"\`
	RegionName string    \`gorm:"column:region_name" json:"region_name"\`
	Countries  []Country \`gorm:"foreignKey:RegionID" json:"countries"\`
}

type Country struct {
	ID          string     \`gorm:"column:country_id;primaryKey;size:2" json:"country_id"\`
	CountryName string     \`gorm:"column:country_name" json:"country_name"\`
	RegionID    int        \`gorm:"column:region_id" json:"region_id"\`
	Region      Region     \`gorm:"foreignKey:RegionID" json:"region"\`
	Locations   []Location \`gorm:"foreignKey:CountryID" json:"locations"\`
}

type Location struct {
	ID            int          \`gorm:"column:location_id;primaryKey;autoIncrement" json:"location_id"\`
	StreetAddress string       \`gorm:"column:street_address" json:"street_address"\`
	PostalCode    string       \`gorm:"column:postal_code" json:"postal_code"\`
	City          string       \`gorm:"column:city;not null" json:"city"\`
	StateProvince string       \`gorm:"column:state_province" json:"state_province"\`
	CountryID     string       \`gorm:"column:country_id;size:2;not null" json:"country_id"\`
	Country       Country      \`gorm:"foreignKey:CountryID" json:"country"\`
	Departments   []Department \`gorm:"foreignKey:LocationID" json:"departments"\`
}

type Job struct {
	ID        int        \`gorm:"column:job_id;primaryKey;autoIncrement" json:"job_id"\`
	JobTitle  string     \`gorm:"column:job_title;not null" json:"job_title"\`
	MinSalary float64    \`gorm:"column:min_salary" json:"min_salary"\`
	MaxSalary float64    \`gorm:"column:max_salary" json:"max_salary"\`
	Employees []Employee \`gorm:"foreignKey:JobID" json:"employees"\`
}

type Department struct {
	ID             int        \`gorm:"column:department_id;primaryKey;autoIncrement" json:"department_id"\`
	DepartmentName string     \`gorm:"column:department_name;not null" json:"department_name"\`
	LocationID     int        \`gorm:"column:location_id" json:"location_id"\`
	Location       Location   \`gorm:"foreignKey:LocationID" json:"location"\`
	Employees      []Employee \`gorm:"foreignKey:DepartmentID" json:"employees"\`
}

type Employee struct {
	ID           int         \`gorm:"column:employee_id;primaryKey;autoIncrement" json:"employee_id"\`
	FirstName    string      \`gorm:"column:first_name" json:"first_name"\`
	LastName     string      \`gorm:"column:last_name;not null" json:"last_name"\`
	Email        string      \`gorm:"column:email;not null" json:"email"\`
	PhoneNumber  string      \`gorm:"column:phone_number" json:"phone_number"\`
	HireDate     time.Time   \`gorm:"column:hire_date;not null" json:"hire_date"\`
	JobID        int         \`gorm:"column:job_id;not null" json:"job_id"\`
	Job          Job         \`gorm:"foreignKey:JobID" json:"job"\`
	Salary       float64     \`gorm:"column:salary;not null" json:"salary"\`
	ManagerID    *int        \`gorm:"column:manager_id" json:"manager_id"\`
	Manager      *Employee   \`gorm:"foreignKey:ManagerID" json:"manager"\`
	DepartmentID *int        \`gorm:"column:department_id" json:"department_id"\`
	Department   *Department \`gorm:"foreignKey:DepartmentID" json:"department"\`
	Subordinates []Employee  \`gorm:"foreignKey:ManagerID" json:"subordinates"\`
	Dependents   []Dependent \`gorm:"foreignKey:EmployeeID" json:"dependents"\`
}

type Dependent struct {
	ID           int      \`gorm:"column:dependent_id;primaryKey;autoIncrement" json:"dependent_id"\`
	FirstName    string   \`gorm:"column:first_name;not null" json:"first_name"\`
	LastName     string   \`gorm:"column:last_name;not null" json:"last_name"\`
	Relationship string   \`gorm:"column:relationship;not null" json:"relationship"\`
	EmployeeID   int      \`gorm:"column:employee_id;not null" json:"employee_id"\`
	Employee     Employee \`gorm:"foreignKey:EmployeeID" json:"employee"\`
}

// AuthUser model for authentication
type AuthUser struct {
	EmployeeID       int        \`gorm:"primaryKey;" json:"employee_id"\`
	Email            string     \`gorm:"type:varchar(100);unique;not null"\`
	Password         string     \`gorm:"type:varchar(255);not null"\` // Password should be hashed
	LastLogin        *time.Time // Track the last login time
	Role             string     \`gorm:"type:varchar(20);default:admin"\` // Default role is admin
	ResetToken       string     \`gorm:"type:varchar(255)"\`              // For password reset functionality
	ResetTokenExpiry *time.Time // For tracking token expiration
	Employee         Employee   \`gorm:"foreignKey:EmployeeID;constraint:OnUpdate:CASCADE,OnDelete:CASCADE" json:"employee"\`
}

// Token model for managing JWT tokens
type Token struct {
	UserID    int       \`gorm:"not null"\`
	Token     string    \`gorm:"type:text;not null"\`
	ExpiresAt time.Time \`gorm:"not null"\`
	User      AuthUser  \`gorm:"foreignKey:UserID;constraint:OnUpdate:CASCADE,OnDelete:CASCADE"\`
}

type Image struct {
	ID         int      \`gorm:"column:id;primaryKey;autoIncrement" json:"id"\`
	EmployeeID int      \`gorm:"column:employee_id;not null" json:"employee_id"\`
	FileName   string   \`gorm:"column:file_name;size:100" json:"file_name"\`
	FileType   string   \`gorm:"column:file_type;size:100" json:"file_type"\`
	FileData   []byte   \`gorm:"column:file_data;type:LONGBLOB" json:"file_data"\`
	Employee   Employee \`gorm:"foreignKey:EmployeeID;constraint:OnUpdate:CASCADE,OnDelete:Cascade" json:"employee"\`
}
`,
  auth: `package auth

import (
	"errors"

	"github.com/gofiber/fiber/v2"
	"github.com/phonsing-Hub/EmployeeSystem/src/models"
	"github.com/phonsing-Hub/EmployeeSystem/src/utils"
	"gorm.io/gorm"
	"time"
)

func SetAuthentication(app fiber.Router, db *gorm.DB) {
	app.Get("/", func(c *fiber.Ctx) error {
		return auth(c, db)
	})
	app.Post("/register", func(c *fiber.Ctx) error {
		return register(c, db)
	})
	app.Post("/login", func(c *fiber.Ctx) error {
		return login(c, db)
	})
}

type Employees struct {
	ID       uint   \`json:"id"\`
	Email    string \`json:"email"\`
	Password string \`json:"pass"\`
	Role     string \`json:"role"\`
}

func auth(c *fiber.Ctx, db *gorm.DB) error {
	var user struct {
		ID         uint    \`json:"id"\`
		Name       string  \`json:"firstname"\`
		Lastname   string  \`json:"lastname"\`
		Email      string  \`json:"email"\`
		Phone      string  \`json:"phone"\`
		Department string  \`json:"departmentname"\`
		JobTitle   string  \`json:"positions"\`
		Salary     float64 \`json:"salary"\`
	}
	token := c.Cookies("emp_auth")
	if token == "" {
		return c.Status(fiber.StatusUnauthorized).SendString("Unauthorized")
	}
	deta, err := utils.VerifyToken(c.Cookies("emp_auth"))
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).SendString("Unauthorized")
	}
	id, ok := deta["id"]
	if !ok {
		return c.Status(fiber.StatusInternalServerError).SendString("Failed to retrieve id")
	}

	query := \`
	SELECT
	    e.employee_id AS id,
	    e.first_name AS name,
	    e.last_name AS lastname,
	    e.email,
	    e.phone_number AS phone,
	    d.department_name AS department,
	    j.job_title AS job_title,
	    e.salary
	FROM
	    employees e
	LEFT JOIN
	    departments d ON e.department_id = d.department_id
	LEFT JOIN
	    jobs j ON e.job_id = j.job_id
	WHERE e.employee_id = ?;\`

	if err := db.Raw(query, id).Scan(&user).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Could not fetch employee"})
	}

	if user.ID == 0 {
		return c.Status(404).JSON(fiber.Map{"error": "Employee not found"})
	}

	return c.Status(200).JSON(user)
}

func register(c *fiber.Ctx, db *gorm.DB) error {
	e := new(Employees)
	if err := c.BodyParser(e); err != nil {
		return c.Status(fiber.StatusBadRequest).SendString(err.Error())
	}

	hash, _ := utils.HashPassword(e.Password)
	data := models.AuthUser{
		EmployeeID: int(e.ID),
		Email:      e.Email,
		Password:   hash,
		Role:       e.Role,
	}
	result := db.Create(&data)
	if result.Error != nil {
		return c.Status(fiber.StatusConflict).SendString("create user unsuccessful: " + result.Error.Error())
	}

	return c.Status(fiber.StatusCreated).SendString("create user successful!")
}

func login(c *fiber.Ctx, db *gorm.DB) error {
	e := new(Employees)
	if err := c.BodyParser(e); err != nil {
		return c.Status(fiber.StatusBadRequest).SendString(err.Error())
	}
	var user models.AuthUser
	//   SELECT id, email, password, role FROM mydb.auth_users WHERE email = ?
	if err := db.Select("employee_id, email, password, role").Where("email = ?", e.Email).First(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return c.Status(fiber.StatusNotFound).SendString("user not found")
		}
		return c.Status(fiber.StatusInternalServerError).SendString("error retrieving user")
	}

	if !utils.CheckPasswordHash(e.Password, user.Password) {
		return c.Status(fiber.StatusUnauthorized).SendString("invalid password")
	}

	//set Tonken
	token, err := utils.CreateToken(uint(user.EmployeeID), user.Email, user.Role)
	if err != nil {
		return c.Status(fiber.StatusConflict).SendString("create user unsuccessful: " + err.Error())
	}
	now := time.Now()
	user.LastLogin = &now
	//UPDATE auth_users SET last_login = <time.Now> WHERE id = <user.ID>;
	if err := db.Model(&user).Update("last_login", user.LastLogin).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).SendString("error updating last login time: " + err.Error())
	}

	var existingToken models.Token
	err = db.Where("user_id = ?", user.EmployeeID).First(&existingToken).Error
	if err != nil && !errors.Is(err, gorm.ErrRecordNotFound) {
		return c.Status(fiber.StatusInternalServerError).SendString("error checking for existing token: " + err.Error())
	}

	if errors.Is(err, gorm.ErrRecordNotFound) {
		//INSERT INTO mydb.tokens (user_id, token, expires_at) VALUES(?, ?, ?);
		tokenModel := models.Token{
			UserID:    user.EmployeeID,
			Token:     token,
			ExpiresAt: time.Now().Add(24 * time.Hour),
		}
		if err := db.Create(&tokenModel).Error; err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString("error creating token: " + err.Error())
		}
	} else {
		// UPDATE tokens SET token = <newTokenValue>, expires_at = <newExpiryTime>, updated_at = <currentTime> WHERE id = existingTokenID;
		if err := db.Model(&existingToken).
			Where("user_id = ?", user.EmployeeID).
			Updates(models.Token{Token: token, ExpiresAt: time.Now().Add(24 * time.Hour)}).Error; err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString("error updating token: " + err.Error())
		}
	}
	// set database : CREATE EVENT delete_expired_tokens ON SCHEDULE EVERY 1 HOUR DO DELETE FROM tokens WHERE expires_at < NOW();

	c.Cookie(&fiber.Cookie{
		Name:     "emp_auth",
		Value:    token,
		Expires:  time.Now().Add(time.Hour * 24),
		HTTPOnly: true,
		Secure:   true,
		SameSite: "Strict",
	})

	return c.Status(fiber.StatusOK).SendString("login successful!")
}
`,
  emp: `package emp

import (
	"github.com/gofiber/fiber/v2"
	"github.com/phonsing-Hub/EmployeeSystem/src/models"
	"github.com/phonsing-Hub/EmployeeSystem/src/utils"
	"gorm.io/gorm"
	"io"
	//"time"
)

func EmployeesRouting(app fiber.Router, db *gorm.DB) {
	app.Get("/", func(c *fiber.Ctx) error {
		return getAllEmployeeDetails(c, db)
	})
	app.Get("/:id", func(c *fiber.Ctx) error {
		return getAllEmployeeById(c, db)
	})
	app.Post("/new", func(c *fiber.Ctx) error {
		return upLoadImage(c, db)
	})

	app.Get("image/:id", func(c *fiber.Ctx) error {
		return getImage(c, db)
	})

}

func getAllEmployeeDetails(c *fiber.Ctx, db *gorm.DB) error {
	var employeeDetails []struct {
		ID         uint    \`json:"id"\`
		Name       string  \`json:"firstname"\`
		Lastname   string  \`json:"lastname"\`
		Email      string  \`json:"email"\`
		Phone      string  \`json:"phone"\`
		Department string  \`json:"department"\`
		JobTitle   string  \`json:"positions"\`
		Hiredate   string  \`json:"hiredate"\`
		Salary     float64 \`json:"salary"\`
	}

	query := \`
	SELECT
	    e.employee_id AS id,
	    e.first_name AS name,
	    e.last_name AS lastname,
	    e.email,
	    e.phone_number AS phone,
	    d.department_name AS department,
	    j.job_title AS job_title,
		e.hire_date AS hiredate,
	    e.salary
	FROM
	    employees e
	LEFT JOIN
	    departments d ON e.department_id = d.department_id
	LEFT JOIN
	    jobs j ON e.job_id = j.job_id;\`

	if err := db.Raw(query).Scan(&employeeDetails).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Could not fetch employee details"})
	}

	return c.Status(200).JSON(employeeDetails)
}

func getAllEmployeeById(c *fiber.Ctx, db *gorm.DB) error {
	id := c.Params("id")
	var employeeById struct {
		ID         uint    \`json:"id"\`
		Name       string  \`json:"firstname"\`
		Lastname   string  \`json:"lastname"\`
		Email      string  \`json:"email"\`
		Phone      string  \`json:"phone"\`
		Department string  \`json:"departmentname"\`
		JobTitle   string  \`json:"positions"\`
		Salary     float64 \`json:"salary"\`
	}

	query := \`
	SELECT
	    e.employee_id AS id,
	    e.first_name AS name,
	    e.last_name AS lastname,
	    e.email,
	    e.phone_number AS phone,
	    d.department_name AS department,
	    j.job_title AS job_title,
	    e.salary
	FROM
	    employees e
	LEFT JOIN
	    departments d ON e.department_id = d.department_id
	LEFT JOIN
	    jobs j ON e.job_id = j.job_id
		WHERE e.employee_id = ?;\`

	if err := db.Raw(query, id).Scan(&employeeById).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Could not fetch employee"})
	}

	if employeeById.ID == 0 {
		return c.Status(404).JSON(fiber.Map{"error": "Employee not found"})
	}

	return c.Status(200).JSON(employeeById)
}

func upLoadImage(c *fiber.Ctx, db *gorm.DB) error {
	// รับไฟล์จาก request
	result, _ := utils.VerifyToken(c.Cookies("emp_auth"))
	id, ok := result["id"].(float64)
	if !ok {
		return c.Status(fiber.StatusInternalServerError).SendString("Failed to retrieve id")
	}

	file, err := c.FormFile("image")
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Cannot get image file",
		})
	}

	// เปิดไฟล์เพื่ออ่านข้อมูล
	fileHeader, err := file.Open()
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Cannot open image file",
		})
	}
	defer fileHeader.Close()

	// อ่านข้อมูลไฟล์ทั้งหมด
	fileData, err := io.ReadAll(fileHeader)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Cannot read image file",
		})
	}

	// สร้าง record ในฐานข้อมูล
	image := models.Image{
		EmployeeID: int(id),
		FileName:   file.Filename,
		FileType:   file.Header.Get("Content-Type"),
		FileData:   fileData,
	}

	// บันทึกข้อมูลลงในฐานข้อมูล
	if err := db.Create(&image).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Cannot save image information",
		})
	}

	// ส่ง response กลับไป
	return c.JSON(fiber.Map{
		"message":   "Image uploaded successfully",
		"image_id":  image.ID,
		"file_name": image.FileName,
	})

}

func getImage(c *fiber.Ctx, db *gorm.DB) error {
	// รับ id ของภาพจาก URL parameter
	imageID := c.Params("id")

	// สร้างโครงสร้างของ Image สำหรับการค้นหาจากฐานข้อมูล
	var image models.Image
	if err := db.First(&image, "employee_id = ?", imageID).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Image not found",
		})
	}

	// ตั้งค่า Content-Type ให้ตรงกับประเภทของไฟล์
	c.Set("Content-Type", image.FileType)

	// ส่งข้อมูลไฟล์กลับไป
	return c.Send(image.FileData)
}

`,
  bcrypt: `package utils

import(
	"golang.org/x/crypto/bcrypt"
)

func HashPassword(password string) (string, error) {
    bytes, err := bcrypt.GenerateFromPassword([]byte(password), 10)
    return string(bytes), err
}

func CheckPasswordHash(password, hash string) bool {
    err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
    return err == nil
}

`,
  jwt: `package utils

import (
	"crypto/rsa"
	"errors"
	"github.com/golang-jwt/jwt/v5"
	"os"
	"time"
)
// sh
// # create Private Key
// openssl genpkey -algorithm RSA -out private.key-pkeyopt rsa_keygen_bits:2048

// # create Public Key จาก Private Key
// openssl rsa -pubout -in private.key -out public.key

var (
	privateKey *rsa.PrivateKey
	publicKey  *rsa.PublicKey
)

// Initialize keys
func init() {
	// Load Private Key
	privateKeyData, err := os.ReadFile("src/utils/private.key")
	if err != nil {
		panic(err)
	}

	privateKey, err = jwt.ParseRSAPrivateKeyFromPEM(privateKeyData)
	if err != nil {
		panic(err)
	}

	// Load Public Key
	publicKeyData, err := os.ReadFile("src/utils/public.key")
	if err != nil {
		panic(err)
	}

	publicKey, err = jwt.ParseRSAPublicKeyFromPEM(publicKeyData)
	if err != nil {
		panic(err)
	}
}

// CreateToken generates a new JWT token with the provided user ID, email, and role
func CreateToken(id uint, email string, role string) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodRS256,
		jwt.MapClaims{
			"id":    id,
			"email": email,
			"role":  role,
			"exp":   time.Now().Add(time.Hour * 24).Unix(), // Token expires in 24 hours
		})

	tokenString, err := token.SignedString(privateKey)
	if err != nil {
		return "", err
	}

	return tokenString, nil
}

// VerifyToken parses and validates the provided JWT token string
func VerifyToken(tokenString string) (jwt.MapClaims, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Ensure the token's signing method is RSA and the same as expected
		if _, ok := token.Method.(*jwt.SigningMethodRSA); !ok {
			return nil, errors.New("unexpected signing method")
		}
		return publicKey, nil
	})

	if err != nil {
		return nil, err
	}

	// Check if the token is valid and contains claims
	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return claims, nil
	}

	return nil, errors.New("invalid token")
}
`,
};

export { details, code };

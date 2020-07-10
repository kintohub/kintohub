package main

import (
	"fmt"
	"log"
	"os"

	"github.com/gin-gonic/gin"
	_ "github.com/joho/godotenv/autoload"
)

var Greeting string = os.Getenv("GREETING")

func main() {
	if Greeting == "" {
		Greeting = "Hello"
	}

	r := gin.Default()
	r.GET("/hello/:name", hello)
	r.Run(":80") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}

type Response struct {
	Message string `json:"message"`
}

func hello(c *gin.Context) {
	name := c.Param("name")

	log.Println(name)
	c.JSON(200, gin.H{
		"message": fmt.Sprintf("%s %s", Greeting, name),
	})
}

package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/buaazp/fasthttprouter"
	_ "github.com/joho/godotenv/autoload"
	"github.com/valyala/fasthttp"
)

var Greeting string = os.Getenv("GREETING")

func main() {
	if Greeting == "" {
		Greeting = "Hello"
	}
	router := fasthttprouter.New()
	router.GET("/hello/:name", hello)

	log.Println("listening on port 80")
	log.Fatal(fasthttp.ListenAndServe(":80", router.Handler))
}

type Response struct {
	Message string `json:"message"`
}

func hello(ctx *fasthttp.RequestCtx) {
	name := ctx.UserValue("name").(string)

	log.Println(name)
	resp := Response{
		Message: fmt.Sprintf("%s %s", Greeting, name),
	}
	json.NewEncoder(ctx).Encode(resp)
}

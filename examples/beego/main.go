package main

import (
	"github.com/astaxie/beego"
	"github.com/kintohub/beego-example/controllers"
)

func main() {
	beego.Router("/hello/:name", &controllers.MainController{})
	beego.Run()
}

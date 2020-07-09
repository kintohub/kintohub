package controllers

import (
	"encoding/json"
	"fmt"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/logs"
)

type MainController struct {
	beego.Controller
}

type Response struct {
	Message string `json:"message"`
}

func (this *MainController) Get() {
	name := this.Ctx.Input.Param(":name")
	logs.Info(name)
	resp := Response{
		Message: fmt.Sprintf(
			"%s %s",
			beego.AppConfig.String("GREETING"),
			name,
		),
	}

	bytes, err := json.Marshal(resp)
	if err != nil {
		fmt.Printf("Error: %s", err)
		return
	}
	this.Ctx.Output.Body(bytes)
}

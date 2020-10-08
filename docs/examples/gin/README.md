---
id: gin-example
title: Gin
---

A sample Gin app for [KintoHub](https://kintohub.com)

## :rocket: Deploying on KintoHub

- **Service Type:** Backend API
- **Repo:** https://github.com/kintohub-examples/gin
- **Branch:** master
- **Language:** Go
- **Language version:** 1.12
- **Build Command:** `go build -o main .`
- **Start Command:** `./main`
- **Port:** 80

## :hammer: Running locally

**Pre-requisites:** Go v1.12+

- Clone the repository to a folder of choice.

```
$ git clone https://github.com/kintohub-examples/gin

$ cd gin
```

- Build the app

```
$ go build -o main .
```

- To start the app 

```
$ ./main
```
## :zap: API Call

**Local:**
```
curl -X GET http://localhost/hello/world
```

**On KintoHub:**
```
curl -X GET http://<KintohubHostURL>/hello/world
```

#### Response
```json
{
  "message": "Hello world"
}
``` 

## :ambulance: Support

**Contact us:** https://www.kintohub.com/contact-us

**Discord:** https://kintohub.com/discord

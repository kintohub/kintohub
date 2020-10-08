---
id: hapi-example
title: Hapi
---


A sample Hapi app for [KintoHub](https://kintohub.com)

## :rocket: Deploying on KintoHub

- **Service Type:** Backend API
- **Repo:** https://github.com/kintohub-examples/hapi
- **Branch:** master
- **Language:** NodeJS
- **Language version:** 12
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Port:** 80

## :hammer: Running locally

**Pre-requisites:** NodeJS v12+

- Clone the repository to a folder of choice.

```
$ git clone https://github.com/kintohub-examples/hapi

$ cd hapi
```

- Install the dependencies

```
$ npm install
```

- To start the app 

```
$ npm start
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

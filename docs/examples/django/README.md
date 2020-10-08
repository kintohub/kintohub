---
id: django-example
title: Django
---

A sample Django app for [KintoHub](https://kintohub.com)

## :rocket: Deploying on KintoHub

- **Service Type:** Backend API
- **Repo:** https://github.com/kintohub-examples/django
- **Branch:** master
- **Language:** Python
- **Language version:** 3.7
- **Build Command:** `pip install -r requirements.txt`
- **Start Command:** `python manage.py runserver 0.0.0.0:80`
- **Port:** 80

## :hammer: Running locally

**Pre-requisites:** Python v3.7+

- Clone the repository to a folder of choice.

```
$ git clone https://github.com/kintohub-examples/django

$ cd django
```

- Build the app

```
$ pip install -r requirements.txt
```

- To start the app 

```
$ python manage.py runserver 0.0.0.0:80
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

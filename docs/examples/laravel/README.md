---
id: laravel
title: Laravel Example
---

This example has been referenced and rebuilt from [Aschmelyun/docker-compose-laravel](https://github.com/aschmelyun/docker-compose-laravel).
You can use this repository to deploy a Laravel app on KintoHub.
Additionally, this guide can be used to quickly set up Laravel locally on your machine.

## Directory Structure

- `/laravel` - Generic installation of Laravel
- `/nginx` - Configuration files for nginx to serve PHP
- `laravel.dockerfile` - Dockerfile to bootstrap Laravel app
- `nginx.dockerfile` - Dockerfile to serve nginx website
- `docker-compose.yaml` - Composition of nginx + laravel + postgres to work together

## Running locally

**Requires Docker v2.x or higher**

In the root of this repository use `docker-compose up -d`

Once complete, go to `localhost:8080` to access the website!

## Setup a new project

Click on the **Use this Template** button at the top right

Begin to modify the files as you please!

## :rocket: Deploying on KintoHub

If you do not have an account, first [signup](https://www.kintohub.com)

### Deploy a Postgres Server

1. Click on the **Create Service** button at the top right of your environment
2. Click on the **From Catalog** tab and then select **PostgreSQL** Service
3. Fill or generate your `username`, `password` and `root password` for your database
4. Click on the **Deploy** button at the top right.

Once complete, go to the **Access** tab and copy the **Root User Connection String**

![PostgreSQL Connection String](/img/examples/laravel/postgres-connection-string.png)

This will take several minutes to complete

### Deploy Laravel PHP App

1. Click on the **Create Service** button at the top right of your environment
2. Choose **Backend API** service from the list
3. Click on the **Import URL** tab
4. Enter the repository URL as `https://github.com/kintohub-examples/laravel`
5. Click on the **Connect** button
6. Change the **Service Name/Hostname** to `laravel`
7. Select the language as **Dockerfile**
8. Change the **Dockerfile Name** to `laravel.dockerfile`
9. Change the **Port** to `9000`
10. Open the **Environment Variables** tab and enter the key `DATABASE_URL` and paste the connection string value you copied in the **Deploy a Postgres Server Step**
11. Additionally, paste the following into the **key** textbox:

```
APP_NAME=Laravel
APP_ENV=dev
APP_KEY=base64:PoStwuoIPBnH+W2znwpmQbZvCJZPdou1DedUu+3F7mI=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120
```

This will take about 6 minutes to complete

### Deploy Nginx Php Proxy

We need to deploy a web host proxy to serve the php app on KintoHub.

1. Click on the **Create Service** button at the top right of your environment
2. Choose **Web App** service from the list
3. Click on the **Import URL** tab
4. Enter the repository URL as `https://github.com/kintohub-examples/laravel`
5. Click on the **Connect** button
6. Change the **Service Name/Hostname** to `nginx`
7. Select the language as **Dockerfile**
8. Change the **Dockerfile Name** to `nginx.dockerfile`
9. Change the **Port** to `80`
10. Click on the **Deploy** button at the top right

When complete, open the **Access** tab and open the external URL to see your Laravel app!

![Laravel](/img/features/laravel.png)

## :ambulance: Support

**Contact us:** https://www.kintohub.com/contact-us

**Discord:** https://kintohub.com/discord

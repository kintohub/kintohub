---
id: mongodb
title: MongoDB
---

![Deploy MongoDB](/img/catalogs/deploy-mongodb.gif)

[MongoDB](https://www.mongodb.com/) is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.

## Create a MongoDB Database

All MongoDb servers are 100% dedicated to your environment.

1. [Login](https://app.kintohub.com/login) or [Create](https://app.kintohub.com/sign-up) a KintoHub account
2. Click on the **Create Service** button at the top right of your environment
3. Click on the **From Catalog** tab at the top right
4. Click on the **MongoDB** option in the list
5. Optionally enable **Authentication** and input or generate your `Username`, `Password` and `Root Password`
6. Click on the **Deploy** button at the top right and wait until the release is successful
7. Once deployed, click on the **Access Tab** to read the access related options

## Access Your MongoDB Instances

### Access from service running on KintoHub

You may only access your MongoDB Instance from services running in the **same** environment.
Learn more about how to connect to your MongoDB Instance under the [Access Tab](/features/features-access.md).

### Access from local machine

You can install the [Kinto CLI](/features/features-cli.mdx) and run `kinto teleport ` from a `.git` folder that has been deployed on KintoHub with a MongoDB database.
Using the tunnel that is created with this command, you can use any 3rd party mongo client to connect or the mongo cli.

:::note
In the very near future: `kinto teleport --all` will allow you to access MongoDb without having previously deployed another service with it
:::

## MongoDB Advanced Options

### Replica Count

Increasing your replicas will create Highly Available MongoDB instances.
You can increase or decrease your replicas under the **Configurations** tab when creating a MongoDB service.
It's recommended to have at least **3** replicas in `production` environments or any environments you wish to decrease the chances of downtime.
Read more about replicas [here](https://docs.mongodb.com/manual/replication/).

### Cost Optimization

Enabling [Cost Optimization](/features/features-advanced.md#cost-optimization) is **not recommended** for `production` environments.
Cost optimization places your instances on Spot or Pre-emptible cloud instances which can incur random downtime.
For best effort uptime, you must **disable** cost optimization.

### (Storage) Persistence

MongoDB has an optional [(Storage) Persistence](/features/features-advanced.md#storage-persistence) and **Volume Size** options available under the **Advanced Options** Tab.

![MongoDB Advanced](/img/catalogs/redis-advanced.png)

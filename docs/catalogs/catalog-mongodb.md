---
id: mongodb
title: MongoDB
---

[MongoDB](https://www.mongodb.com/) is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.

## Create a MongoDB Database

All MongoDb servers are 100% dedicated to your environment.

1. Login to your KintoHub account
2. Click **Create Service** at the top right of your environment
3. Click the **From Catalog** tab at the top right
4. Click the **MongoDB** option in the list
5. Optionally enable **Authentication** and input or generate your `Username`, `Password` and `Root Password`
6. Click **Deploy** at the top right and wait until the release is successful
7. Once deployed, click on the **Access Tab** to read the access related options

## Access Your MongoDB Instances

You may only access your MongoDB Instance from services running in the **same** environment.
Learn more about how to connect to your MongoDB Instance under the [Access Tab](../anatomy/anatomy-access.md#mongodb).

::note
In the near future you will be able to [Tunnel](https://feedback.kintohub.com/feature-requests/p/port-forwarding-for-debugging) from your machine to your service for easy access.
Additionally, a feature to run commands directly to your mysql instance via a [Shell](https://feedback.kintohub.com/feature-requests/p/shell-access) terminal will be available as well.
::

## MongoDB Advanced Options

### Replica Count 

Increasing your replicas will create Highly Available MongoDB instances.
You can increase or decrease your replicas under the **Configurations** tab when creating a MongoDB service.
It's recommended to have at least **3** replicas in `production` environments or any environments you wish to decrease the chances of downtime. 
Read more about replicas [here](https://docs.mongodb.com/manual/replication/).

### Cost Optimization

Enabling [Cost Optimization](../anatomy/anatomy-advanced.md#cost-optimization) is **not recommended** for `production` environments.
Cost optimization places your instances on Spot or Pre-emptible cloud instances which can incur random downtime.
For best effort uptime, you must **disable** cost optimization.

### (Storage) Persistence

MongoDB has an optional [(Storage) Persistence](../anatomy/anatomy-advanced.md#storage-persistence) and **Volume Size** options available under the **Advanced Options** Tab.

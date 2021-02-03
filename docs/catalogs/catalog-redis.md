---
id: redis
title: Redis
---

[Redis](https://redislabs.com/) is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes with radius queries and streams.

## Create a Redis Data Store

All Redis servers are 100% dedicated to your environment.

1. Login to your KintoHub account
2. Click on the **Create Service** button at the top right of your environment
3. Click on the **From Catalog** tab at the top right
4. Click on the **Redis** option in the list
5. Optionally enable auth and enter or generate your desired `Password` value

![Redis](/img/catalogs/redis.png)

6. Click on the **Deploy** button at the top right and wait until the release is successful
7. Once deployed, click on the **Access Tab** to read the access related options

## Access Your Redis Instances

You may only access your Redis Instance from services running in the **same** environment.
Learn more about how to connect to your Redis Instance under the [Access Tab](/features/features-access.md#redis).

:::note
In the near future you will be able to [Tunnel](https://feedback.kintohub.com/feature-requests/p/port-forwarding-for-debugging) from your machine to your service for easy access.
Additionally, a feature to run commands directly to your redis instance via a [Shell](https://feedback.kintohub.com/feature-requests/p/shell-access) terminal will be available as well.
:::

## Redis Advanced Options

### Enable Replication

Enabling replication turns on a separate endpoint for Redis readonly instances.
You can enable replication under the **Configurations** tab when Creating a Redis service.
You may not enable this after the service has been created.
It's recommended to enable Replication in `production` environments.
Read more about redis replication [here](https://redis.io/topics/replication).

### Cost Optimization

Enabling [Cost Optimization](/features/features-advanced.md#cost-optimization) is **not recommended** for `production` environments.
Cost optimization places your instances on Spot or Pre-emptible cloud instances which can incur random downtime.
For best effort uptime, you must **disable** cost optimization.

### (Storage) Persistence

Redis has an optional [(Storage) Persistence](/features/features-advanced.md#storage-persistence) and **Volume Size** options available under the **Advanced Options** Tab.

![Redis Advanced](/img/catalogs/redis-advanced.png)

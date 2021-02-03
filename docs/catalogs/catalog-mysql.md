---
id: mysql
title: MySQL
---

[MySQL](https://www.mysql.com/) is an open-source relational database management system (RDBMS)

:::note
MySQL requires a minimum of **512** Mb of memory, which does not work under the free tier of KintoHub.
:::

## Create a MySQL Database

All MySQL databases are 100% dedicated resources.

1. Login to your KintoHub account
2. Click on the **Create Service** button at the top right of your environment
3. Click on the **From Catalog** tab at the top right
4. Click on the **MySQL** option in the list
5. Enter or generate your desired `Username` `Password` and `Root Password` values
6. Click on the **Deploy** button at the top right and wait until the release is successful
7. Once deployed, click on the **Access Tab** to read the access related options

## Access Your MySQL Instances

You may only access your MySQL Instance from services running in the **same** environment.
Learn more about how to connect to your MySQL Instance under the [Access Tab](/features/features-access.md#mysql).

:::note
In the near future you will be able to [Tunnel](https://feedback.kintohub.com/feature-requests/p/port-forwarding-for-debugging) from your machine to your service for easy access.
Additionally, a feature to run commands directly to your mysql instance via a [Shell](https://feedback.kintohub.com/feature-requests/p/shell-access) terminal will be available as well.
:::

## MySQL Advanced Options

### Replication

Enabling replication turns on a separate endpoint for MySQL read only instances.
You can enable replication under the **Configurations** tab when Creating a MySQL service.
You may not enable this after the service has been created.
It's recommended to enable Replication in `production` environments or any environments you wish to decrease the chances of downtime.
Read more about read replicas [here](https://dev.mysql.com/doc/refman/8.0/en/replication.html).

### Cost Optimization

Enabling [Cost Optimization](/features/features-advanced.md#cost-optimization) is **not recommended** for `production` environments.
Cost optimization places your instances on Spot or Pre-emptible cloud instances which can incur random downtime.
For best effort uptime, you must **disable** cost optimization.

### (Storage) Persistence

MySQL has an optional [(Storage) Persistence](/features/features-advanced.md#storage-persistence) and **Volume Size** options available under the **Advanced Options** Tab.

![MySQL Advanced](/img/catalogs/redis-advanced.png)

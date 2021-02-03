---
id: postgresql
title: PostgreSQL
---

[Postgres](https://www.postgresql.org/) Database is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.

## Create a Postgres Database

All Postgres servers are 100% dedicated to your environment.

1. Login to your KintoHub account
2. Click on the **Create Service** button at the top right of your environment
3. Click on the **From Catalog** tab at the top right
4. Select the **Postgres** option in the list
5. Enter or generate your desired `Username` `Password` and `Root Password` values
6. Click **Deploy** at the top right and wait until the release is successful
7. Once deployed, click on the **Access Tab** to read the access related information

![Access tab](/img/features/access-tab.png)

## Access Your Postgres Database

You may only access your Postgres Instance from services running in the **same** environment.
Learn more about how to connect to your Postgres Database under the [Access Tab](/features/features-access.md#postgres).

:::note
In the near future you will be able to [Tunnel](https://feedback.kintohub.com/feature-requests/p/port-forwarding-for-debugging) from your machine to your service for easy access.
Additionally, a feature to run commands directly to your database via a [Shell](https://feedback.kintohub.com/feature-requests/p/shell-access) terminal will be available as well.
:::

## Postgres Advanced Options

### Replication

Enabling replication turns on a separate endpoint for Postgres readonly instances.
You can enable replication under the **Configurations** tab when Creating a Postgres service.
You may not enable this after the service has been created.
It's recommended to enable Replication in `Production` environments or any environments you wish to decrease the chances of downtime.
Read more about read replicas [here](https://www.postgresql.org/docs/9.1/high-availability.html).

### Cost Optimization

Enabling [Cost Optimization](/features/features-advanced.md#cost-optimization) is **not recommended** for `production` environments.
Cost optimization places your instances on Spot or Pre-emptible cloud instances which can incur random downtime.
For best effort uptime, you must **disable** cost optimization.

### (Storage) Persistence

Postgres SQL has an optional [(Storage) Persistence](/features/features-advanced.md#storage-persistence) and **Volume Size** options available under the **Advanced Options** Tab.

![Postgres Advanced](/img/catalogs/redis-advanced.png)

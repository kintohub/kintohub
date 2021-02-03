---
id: advanced
title: Advanced Settings
---

Advanced settings give you full control to customize your service's resources and timeout settings.
Once you make a change to any advanced setting, you will be required to [Deploy](features-deploy.md) the changes.

## View Advanced Settings

The advanced settings tab is located under the **Edit Service** slide-out menu.

1. Login to your KintoHub account
2. Create a new service or click on a Service in your [Environment](features-environment.md)
3. Click on the **Edit Service** button at the top right

![Edit Service](/img/features/edit-service.png)

4. Find the tab called **Advanced** on the far right

![Advanced](/img/features/advanced-tab.png)

## How It Works?

Unique settings will be available depending on your service type.

![Advance options](/img/features/advance-options.png)

### Memory

The amount of memory your application has guaranteed access to at all times.
Using [Metric](features-metrics.md) tab, you see the actual memory usage of your service and fine-tune the amount of memory you want to allocate to your service over time.
The lowest value of memory you may use is **32 Mb** and the highest value is **4 Gb**.

If you require more memory, you may [contact support](https://www.kintohub.com/contact-us).

### Dedicated vCPU

By default and when toggled off, the vCPU of your service is shared between KintoHub community.
Shared vCPU may randomly affect the performance of your service and is only recommended for `dev` environments.

When toggled on, you will have the option to specify a guaranteed dedicated amount of vCPU for your service.
The lowest amount of vCPU you may use is **0.1 cores** which is 10% of a dedicated vCPU.
The highest amount of vCPU available is **2** which guarantees **2** dedicated vCPU cores.

If you require more vCPU, you may [contact support](https://www.kintohub.com/contact-us).

### Auto Scaling

The auto-scaling feature is only available when your service has **Dedicated vCPU** enabled.
When enabled, you will be able to set the **Min Instances** and **Max Instances** that your service may scale up to.
This is known as **Horizontal Scaling** and is best used for **Stateless** services.
The maximum number of instances you may scale to is **10**.

- **Min Instances** is the number of instances running at all times. Your environment may require **High Availability** which can be achieved by setting **Min Instances** to the number of instances you wish to have running at all times.
- **Max Instances** is the maximum number of instances you will allow your service to scale to. When your service sustains **70%** CPU usage for a short period, KintoHub will spawn another instance for you. When your service no longer is using a high amount of load, KintoHub will scale down your instances back down to your **Min Instances** value.

:::note
An **instance** is a single running version of your application or service. When multiple instances are running, KintoHub balances the API request load between your service instances.
:::

### Cost Optimization

When enabled, KintoHub will deploy your service instances on discounted vCPU and Memory resources.
Discounted instances uptime **are not** guaranteed, and you may incur some downtime if you do not set up at least **2 min instances** for your service.
Today, it is not recommended to use **Cost Optimization** for Production environments, but the team is working hard on building more confidence in providing a cost-effective production version of **Cost Optimization** in the future.
Price differences between Cost Optimization versus Standard pricing are described in [Billing](features-billing.md).

### Storage (Persistence)

Catalog related services may optionally enable or disable **Persistent Volumes**. When **Persistent Volumes** are disabled and your instance restarts for any reason, **your data WILL be lost**.
It is not recommended to disable persistence unless you plan to do a quick test or use a Catalog service for caching such as Redis.

The minimum value of storage you may select is **1 Gb** and the maximum is **200 Gb**.

Catalog Services that support Persistent Storage:

- Postgres

:::note
It is currently **NOT** possible to increase your Storage amount. Vote on the feature [here](https://feedback.kintohub.com/feature-requests/p/increase-persistent-storage-disk-size).
:::

:::important
You may never decrease the value of your Storage amount due to the irreversible damage that may occur if you decrease the disk by too much.
If you wish to decrease your storage amount, you must create another service and migrate the data.
:::

### Max Monthly Cost Estimation

KintoHub calculates **the worse case cost** of your service based on the advanced configurations values that you have set.
The **worse case** is calculated by your service running 24/7 for 30 days.
The actual cost of your service **is billed per second**.
If you delete your service, you will no longer be charged.

When setting up **Auto Scaling** the **Max Monthly Cost** is calculated with the **Max Instances** you have set for your service.
The probability of the **Max Monthly Cost** occurring is low for Auto Scale related estimations because it would be rare for the **Max Instances** to be running 24/7 for 30 days.

:::note
KintoHub believes it is important to know how much your services cost per month and guarantee that you will never be surprised by an unexpected bill.

The team will continue to build notification systems and clarity throughout the platform to inform your team about its cloud costs and tips on optimizing your cost as your application grows.
:::

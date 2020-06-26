---
id: advanced
title: Advanced Settings
---
## Overview

Advanced settings give you full control over customize the resources used by your service.
All advance settings require you to [Deploy](anatomy-deploy.md) the changes.

## Advanced Settings Tab

The advanced settings tab is located under the **Edit Service** slide out menu.

1. Login to your KintoHub account
2. Create a new service or click on a Service in your [Environment](anatomy/anatomy-environment)
3. Click on the **Edit Service** button at the top right
4. Find the tab called **Advance Settings** on the far right

## How It Works?

Advance settings may different between service to service.

### Memory

The amount of memory your application has guarenteed access to at all times.
Using [Metric](anatomy-metrics.md) you see the actual memory usage of your service and fine tune this value over time.
The lowest value of memory you may use is `32 Mb` and the highest value is `4 Gb`.
If you require more resources, you may [contact support](https://www.kintohub.com/contact-us).

### Dedicated CPU

By default and when toggled off, the CPU of your service is shared between KintoHub community.
**Shared CPU is not gaurenteed** and may randomly affect the performance of your service.

When togged on, you will have the option to specify a dedicated amount of CPU for your service.
The lowest amount of CPU you may use is `0.1` which is 10% of a dedicated CPU core.
The highest amount of CPU available is `4` which guarentees 4 dedicated CPU cores.

### Auto Scaling

The auto scaling feature is only available when your service is has **Dedicated CPU** enabled.
When enabled, you will be able to set the **Min Instances** and **Max Instances** that your service may scale to.
This is known as **Horizontal Scaling** and is best used for **Stateless** services.
The maximum number of instance you may scale to is `10`.

* **Min Instances** is the number of instances running at all times. Your environment may require **High Availability** which can be achieved by setting **Min Instances** to the number of instances you wish to have running at all times.
* **Max Instances** is the maximum number of instances you will allow your service to scale to. When your service hits `70%` cpu usage, KintoHub will spawn another instance for you. When your serviec no longer is using a high amount of load, KintoHub will scale down your instances back down to your **Min Instances** value.

:::note
An instance is a single running version of your application or service. When multiple instances are running, KintoHub auto balances and distributes the API requests between them.
:::

### Sleep Mode

This mode will automatically suspend your service after `1 hour` of inactivty.
The activity of your service is determined by an API request through either an **External** or **Internal** endpoint.

[Pay-as-you-go](anatomy-billing.md) users can disable Sleep Mode or specify how long of inactivty can occurr before KintoHub sleeps the service.

:::important
Managing this feature is currently disabled and "on by default" until August 2020
:::

#### Waking Up Your Service
When a service is sleeping, it will be woken up when an API request calls it through an internal or external enndpoint.

#### Sleeping Benefits

To minimize the cost of your environment(s), you may want to consider sleeping all `dev` and `test` enviorments for your company.
During the weekends or night when your team is not using the service, KintoHub can automatically sleep your services during this time.
This will lower your overall cost which is pro-rated by the second.

### Cost Optimization

Cloud Providers provide massively (up to 80%) discounted cloud resources which are complex to utilize.

**Amazon** && **Azure** sell them at `Spot Instances` and **Google** references them as `Pre-emptible Instancnes`

When enabled, KintoHub will will utilize machine learning technology through [NetApp's Spot.io](www.spot.io) to place your service's instances on discounted vCPU and Memory.
Discount Instances **are not** guarenteed and you will be notified when **Cost Optimization** is unavailable.
KintoHub has not observed an unavailability of discounted instances since 2017, but cannont guarentee your services will stay on spot instances [due to unforseen events](https://venturebeat.com/2012/10/22/amazon-cloud-outage-takes-down-reddit-airbnb-flipboard-more/).

Price differences between Cost Optimization being enabled and disabled are described under [Billing](anatomy-billing.md)

:::important
Managing this feature is currently not possible and "on by default" until August 2020
:::

### Storage (Persistence)
    
For catalog related services, you may optionally enable or disable **Persistent Volumes)
Minimum value of storage you may select is `1Gb` and the maximum is `100Gb`.

Catalog Services that support Persistent Storage.

* Postgres

:::note
It is currently **NOT** possible to increase your Storage amount. Vote on the feature [here](https://feedback.kintohub.com/feature-requests/p/increase-persistent-storage-disk-size).
:::

:::important
You may never decrease the value of your Storage amount due to the irreversable damage that may occur if you decrease the disk by too much.
If you wish to decrease your storage amount, you must create another service and migrate the data.
:::

### Max Monthly Cost Estimation

KintoHub calculates **the worse case cost** of your service based on the advancned configurations values that you have set.
The **worse case** is calculated by your service runningn 24/7 for 30 days.
The actual cost of your service **is billed per second**.
If your service **Goes to sleep** or you **suspend** your service, you will **NOT** be charged.

When setting up **Auto Scaling** the **Max Monthly Cost** is calculated with the **Max Instances** you have set for your service.
The probability of the **Max Monthly Cost** actually occurring is low for Auto Scale related estimations because it would be rare for the **Max Instances** to be running 24/7 for 30 days.

:::note
KintoHub believes it is important to know how much your services cost per month and guarentee that you will never be surprised with an unexpected bill.

The team will continue to build notification systems and clarity throughout the platform to infrom your team about its cloud costs and tips on optimizing your cost as your application grows.
:::

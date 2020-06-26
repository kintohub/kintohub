---
id: environment
title: Environment Overview
---

## Overview

The KintoHub Platform starts all users at the Environment Overview page.
This page provides a holistic view of your services in a single **Cloud Environment**

The power of KintoHub lies in the ability to **Combine** services within an Environment.
Add all the services required that make up your app be it a website frontend, backend API, database or job - a **Cloud Environment** is the overarching group of your services.

:::note
In the near future, creating preview environments, promoting environments and cloning environments are at our highest priority
::: 

## Environment Overview Page

To get to the environment overview, you need to login to KintoHub and you will automatically be placed on the last Environment Overview page
If you have not created an Environment yet, you will be prompted to creating one.

## Create New Environment

This feature is only available for `pay-as-you-go` users. Free users are limited to `1` environment.

1. Login to your accoutn
2. Click on the `dropdown name` of your environment at the top left
3. Click `Create Environment`
4. Enter in your **region** of choice
5. Create a name for your environment.
6. Start adding services to your environment!

## Regions

Every **Cloud Environment** is assigned to a specific region. 
In the future, an environment *may* have [Multi-Region Management](https://feedback.kintohub.com/feature-requests/p/multi-region-environments).
Regions are specific to the cloud host provider and their regions.
No matter the region you choose, you will be charged the same price as specified in [Billing](anatomy-billing.md)

### Google Cloud Regions

* **Google Cloud NA** - is hosted in `us-central1` or Iowa, USA
* **Google Cloud EU** - is hosted in  `europe-west3` or Frankfurt, Germany
* **Google Cloud ASIA** - is hosted in `asia-east2` or Hong Kong

### Amazon Cloud Regions

Coming Soon - Vote For Amazon [here](https://feedback.kintohub.com/feature-requests/p/amazon-cloud-regions)

### Azure Cloud Regions

Coming soon - Vote for Azure [here](https://feedback.kintohub.com/feature-requests/p/azure-cloud-regions)

## Service List

Under the services tab, you will be able to see all of your services and their information.

* **Service Type** - Displayed on the top left with an icon identifier on the far left.
* **Service Name** - Name of your service, defaults to your repository name.
* **Service Sub-Type** - Relevant information such as `Dockerfile` or `Database` type information of your service
* **Last Updated** - Shows a time of when your service was last updated.
* **Status** - A service can be Healthy or Unhealthy at any given time.
    * When your service is unhealthy, it means that it is currently not accessible and needs your attention!

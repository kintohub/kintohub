---
id: environment
title: Environment Overview
---

After logging into KintoHub, all users begin at the Environment Overview page.
This page provides a holistic view of your services in a single environment.
You can imagine combining your web, backend APIs, jobs, databases, and all the other services that make up your app within a single environment.

## Environment Overview Page

To get to the environment overview, you need to login to KintoHub and you will automatically be placed on the last Environment page you visited.
If you have not created an environment yet, you will be prompted to create one.

## Create New Environment

This feature is only available for **Pay-As-You-Go** users. Free users are limited to **1** environment.

1. Login to your account
2. Click on the dropdown at the top left next to your **environment name**
3. Click on the **Create Environment** button in your region of choice

![Environment](/img/features/create-environment.png)

5. Create a name for your environment.
6. Start adding services to your environment

## Edit Environment

1. Login to your account
2. Click on the **Settings** icon displayed at the top-right corner.

![Edit Environment](/img/features/edit-environment.png)

3. Edit your **Environment name** in the slide panel displayed.
4. Click on the **Save** button

On clicking the `Save` button, your edited `Environment Name` will be saved.

![Save Environment](/img/features/edit-save.png)

:::note

- The **Region** field is locked and cannot be edited.
- The **Environment ID** is a unique ID generated for your environment and may be requested by the support team when aiding you with an issue.
  :::

## Delete Environment

1. Login to your account
2. Click on the **Settings** icon displayed at the top-right corner.
3. Click on the **Delete Environment** button displayed in a slide panel.

![Delete environment](/img/features/delete-env.png)

4. Click on the **Delete** button in the prompt displayed to delete your `Environment`.

![Confirm Delete](/img/features/confirm-del-env.png)

:::important

- Environments cannot be deleted if you have your services running in it, All services in your environment must be deleted before you can delete your environment.
- You must have `at least 1 environment` on your account. The deletion functionality is disabled if you only have 1 environment.
  :::

## Regions

Every KintoHub environment is hosted in a single cloud region.
Regions are specific to the cloud host provider and its regions.
No matter the region you choose, you will be charged the same price as specified in [Billing](features-billing.md)

:::note
We are exploring environments that host services in multiple-regions. If interested, please vote for the feature [here](https://feedback.kintohub.com/feature-requests/p/multi-region-environments)
:::

### Google Cloud Regions

- **Google Cloud - North America** - is hosted in `us-west1` or The Dalles, Oregon, USA
- **Google Cloud Europe** - is hosted in `europe-west1` or St. Ghislain, Belgium
- **Google Cloud Asia** - is hosted in `asia-east1` Changhua County, Taiwan

### Amazon Cloud Regions

Coming Soon - Vote For Amazon [here](https://feedback.kintohub.com/feature-requests/p/amazon-cloud-regions)

### Azure Cloud Regions

Coming soon - Vote for Azure [here](https://feedback.kintohub.com/feature-requests/p/azure-cloud-regions)

## Service List

Under the services tab, you will be able to see all of your services and their information.

- **Service Type** - Displayed on the top left with an icon identifier on the far left.
- **Service Name** - Name of your service, defaults to your repository name.
- **Service Sub-Type** - Relevant information such as `Dockerfile` or `Database` type information of your service
- **Last Updated** - Shows a time of when your service was last updated.
- **Status** - A service can be Healthy or Unhealthy at any given time.
  - When your service is unhealthy, it means that it is currently not accessible and needs your attention!

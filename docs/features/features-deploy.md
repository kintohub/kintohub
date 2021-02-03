---
id: deploy
title: Deploy
---

The **Deploy** operation is the most critical operation on KintoHub.
This functionality is responsible for safely deploying changes to your service's environment with no downtime.

## How To Deploy

There are several ways you can deploy updates to a new or existing service.

### Deploy New Service

1. Login to KintoHub
2. Choose your environment you are interested in deploying into at the top left
3. Click on the `Create Service` button
4. Choose a service from the list of services provided
5. Connect your repositories via **Github Apps** in `Github` tab or Fill in the **Repository** information in `Import URL` tab
6. Fill in the **Build Settings** information
7. Click on the `Deploy` at the top right

### Deploy a Configuration Update

1. Login to KintoHub
2. Choose your environment you are interested in deploying into at the top left
3. Choose the service you are interested in editing under the services list
4. Click on the **Edit Service** at the top right

![Edit Service](/img/features/edit-service.png)

5. Make the changes within the various tabs you wish to edit
6. Click on the **Deploy** at the top right

### Deploy a Previous Release

1. Login to KintoHub
2. Choose your environment you are interested in deploying into at the top left
3. Choose the service you are interested in editing under the services list
4. Click on the **Releases** tab near the top left

![Release tab](/img/features/Releases.png)

5. Click on the **...** within the row of the release you wish to deploy
6. Click on the **Rollback** option

![Rollback](/img/features/rollback.png)

:::important
The **Rollback** option is available for **any** service which has atleast 2 successfully deployed releases. However, releases with the status `Aborted` and `Failed` cannot be rolled back.
:::

### Deploy Updated Code From Your Branch

1. Login to KintoHub
2. Choose your environment you are interested in deploying into at the top left
3. Choose the service you are interested in editing under the services list
4. Click on the **Trigger Deploy** at the top right of the service

![Trigger](/img/features/trigger-deploy.png)

### Automatically Deploy New Code (CI/CD)

This feature is currently in development and can be read under [Service Settings](features-settings.md)

## Deploy Logs

After clicking deploy, you will see a real time view of the [Release Logs](features-releases.md).

## How Does Deploy Work?

When you deploy a service many things occur under the hood.

1. Your deploy request is queued for deployment
2. KintoHub starts the deployment and updates its state to **Deploying**
3. Your code is pulled from your repository
4. KintoHub executes your **Build Command** from your [Build Settings](features-build-settings.md)
5. Once your build is successful. KintoHub stores your build artifact for historical use
6. KintoHub attempts to deploy your service using a **Rolling Update**
7. KintoHub streams the live **Console** logs of the new services for review and easy access to potential errors
8. Once KintoHub detects your service is live on the specified **Port** in your [Build Settings](features-build-settings.md). Your service is marked as deployed and your API traffic is switched to your new **Release**.
9. If this is not your 1st deployment, KintoHub then shuts down your previous **Release**.

If any of the above steps fail, KintoHub will try its best to highlight the issue and provide shortcuts to resolving them.

:::note
All deployments are known as **Rolling Updates**.
When you have a new version of your Service going out, KintoHub will ensure the new version of your service is 100% working and ready to receive traffic before shutting down the previous version of your release.
During this time, you will be paying for two instances of your service running, which usually lasts less than 30 seconds.
:::

:::tip
`pay-as-you-go` users have priority over `free` users in the KintoHub platform deployment queue.
Every **region** has its deployment queue.
:::

## Abort Deploy Action

Under the **Releases** Tab of your service, you can click the **...** dots a release that is actively deploying and then click **Abort**

![Abort](/img/features/abort.png)

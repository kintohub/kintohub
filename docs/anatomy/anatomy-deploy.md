---
id: deploy
title: Deploy
---

## Overview

The **Deploy** operation is the most critical operation on KintoHub.
This functionality is responsible for safely deploying changes to your service's environment with no downtime.

## How To Deploy

There are several ways you can deploy. something new, update something existing or roll back to previous versions on KintoHub.

### Deploy New Service

1. Login to KintoHub
2. Choose your environment you are interested in deploying into at the top left.
3. Click `Create Service`
4. Fill the **Repository** information
5. Fill the **Build Settings** information
6. Click `Deploy` at the top right

### Deploy A Configuration Update

1. Login to KintoHub
2. Choose your environment you are interested in deploying into at the top left.
3. Choose the service you are interested in editing under the services list.
4. Click `Edit Service` at the top right
5. Make the changes within the various tabs you wish to edit.
6. Click `Deploy` at the top right.

### Deploy A Previous Release

1. Login to KintoHub
2. Choose your environment you are interested in deploying into at the top left.
3. Choose the service you are interested in editing under the services list.
4. Click the `Releases` tab at near the top left.
5. Click the `...` within the row of the release you wish to deploy
6. Click `Rollback` option.

### Deploy Updated Code From Your Branch

1. Login to KintoHub
2. Choose your environment you are interested in deploying into at the top left.
3. Choose the service you are interested in editing under the services list.
4. Click `Trigger Deploy` at the top right of the service

### Automatically Deploy New Code (CI/CD)

This feature is currently in development and can be read under [Service Settings](anatomy-settings.md)

## Deploy Logs

After clicking deploy, you will see a realtime view of the [Release Logs](anatomy-releases.md).

## How Does Deploy Work?

When you deploy a service many things occur under the hood.

1. Your deploy request is queued for deployment
2. KintoHub starts the deployment and updates its state to **Deploying**
3. Your code is pulled from your repository
4. KintoHub executes your **Build Command** from your [Build Settings](anatomy-build-settings.md)
5. Once your build is successful. KintoHub stores your build artifact for historical use
6. KintoHub attempts to deploy your service using a **Rolling Update**
7. KintoHub streams the live **Console** logs of the new services for review and easy access to potential errors
8. Once KintoHub detects your service is live on the specified **Port** in your [Build Settings](anatomy-build-settings.md). Your service is marked as deployed and your API traffic is switched to your new **Release**.
9. If this is not your 1st deployment, KintoHub then shuts down your previous **Release**.

If any of the above steps fail, KintoHub will try its best to highlight the issue and provide shortcuts to resolving them.

:::note
All deployments are known as **Rolling Updates**.
When you have a new version of your Service going out, KintoHub will ensure the new version of your service is 100% working and ready to receive traffic before shutting down the previous version of your release.
During this time, you will be paying for two instances of your service running, which usually last less than 30 seconds.
:::

:::tip
`pay-as-you-go` users have priority over `free` users in the KintoHub platform deployment queue.
Every **region** has its own deployment queue.
:::
 
## Abort Deploy Action

There are two ways you can abort a deployment.

* In the **Deployment Logs** view after clicking `Deploy` you can click the `Abort` button at the top right.
* Under the **Releases** Tab of your service, you can click the `...` dots a **Deploying** release and then click `Abort`


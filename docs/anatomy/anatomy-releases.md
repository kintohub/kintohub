---
id: releases
title: Releases
---

Releases show the historic changes and previous change history and results of your service.

## View Releases

1. Login to KintoHub
2. Choose your environment you are interested in deploying into at the top left.
3. Create any service or select a previous service you have made.
4. Click on the **Releases** tab near the top left.

## Release Information

Release history will show you all of the previous releases ever made in your app.

* **Status** - Shows what is the current result of the release
    * **Failed** - An build or deployment issue occurred and must be debugged by viewing the logs.
    * **Aborted** - A manual abort request was made while the `deploy` action was running
    * **Deployed** - Was once successfully deployed, but is no longer live.
    * **Live Version** - The current live version that is running and serving traffic.
* **Time** - The time that the release completed
* **Branch** - The branch of code that was deployed on the repository

![Release-Information](/img/anatomy/release-info.png)

:::note
* We are exploring how to [tag releases](https://feedback.kintohub.com/feature-requests/p/tag-service-releases) so you can keep them forever. If interested, please vote for the feature.
:::

### Edit a previous release

When you wish to edit and **deploy** a failed or previous release you can do the following:

1. Click on the `...` in the row of the release you wish to edit.
2. Click on the **Edit Release** option

![Edit Release](/img/anatomy/edit-release.png)

### View logs of a release

When you click on the **Deploy** button you will be able to watch the real time logs of a release.
Once the release is completed, we store the logs for future analysis.

You can do the following to view historic deploy logs:

1. Click on the `...` in the row of the release you wish to edit.
2. Click on the **View Logs** option

![View-Logs](/img/anatomy/view-logs.png)

### Abort a Release

If you know something is wrong and you want to cancel it immediately, you have an option to **Abort**.

1. Click on the `...` in the row of the release that has the status **Deploying** or **Queued**
2. Click on the **Abort** option

:::important
You cannot abort a release that has been completed. It must be deploying.
:::

![Abort](/img/anatomy/abort.png)

3. Click on the red **Abort** button in the confirmation popup

  ![Abort](/img/anatomy/abort-now-btn.png)

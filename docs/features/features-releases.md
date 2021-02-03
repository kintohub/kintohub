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

- **Status** - Shows what is the current result of the release
  - **Failed** - An build or deployment issue occurred and must be debugged by viewing the logs.
  - **Aborted** - A manual abort request was made while the `deploy` action was running
  - **Deployed** - Was once successfully deployed, but is no longer live.
  - **Live Version** - The current live version that is running and serving traffic.
- **Time** - The time that the release completed
- **Branch** - The branch of code that was deployed on the repository

![Release-Information](/img/features/release-info.png)

:::note

- We are exploring how to [tag releases](https://feedback.kintohub.com/feature-requests/p/tag-service-releases) so you can keep them forever. If interested, please vote for the feature.
  :::

### Edit a previous release

When you wish to edit and **deploy** a failed or previous release you can do the following:

1. Click on the `...` in the row of the release you wish to edit.
2. Click on the **Edit Release** option

![Edit Release](/img/features/edit-release.png)

### View logs of a release

When you click on the **Deploy** button you will be able to watch the real time logs of a release.
Once the release is completed, we store the logs for future analysis.

You can do the following to view historic deploy logs:

1. Click on the `...` in the row of the release you wish to edit.
2. Click on the **View Logs** option

![View-Logs](/img/features/view-logs.png)

### Tag a Release

You can tag a release when your code is frozen or once there are no further changes to push. Kintohub provides you with an option to tag your releases deployed in it.

Follow the below steps to tag your Release:

1. Click on the `...` in the row of the release you wish to edit
2. Click on the **Create Tag** option

![Create Tag](/img/features/create-tag.png)

3. Enter the tag version in the format displayed in the prompt
4. Click on the **Tag Release** button

![Confirm Tag](/img/features/confirm-tag.png)

### Promote a Release

KintoHub provides you an option to `Promote` your Releases across different environments.

You can do the following to **Promote** a release:

1. Click on the `...` in the row of the `Tagged` release you wish to promote.
2. Click on the **Promote Tag to Env** option.

![Promote Env](/img/features/promote-env.png)

3. In the displayed prompt, select the environment you wish to promote the release to.
4. Click on the **Promote Release** button.

![Confirm Promote](/img/features/confirm-promote.png)

:::note

- You cannot promote a release which is not tagged.
- The Promote Tag to Env option is disabled for untagged releases.
  :::

### Abort a Release

If you know something is wrong and you want to cancel it immediately, you have an option to **Abort**.

1. Click on the `...` in the row of the release that has the status **Deploying** or **Queued**
2. Click on the **Abort** option

:::important
You cannot abort a release that has been completed. It must be deploying.
:::

![Abort](/img/features/abort.png)

3. Click on the red **Abort** button in the confirmation popup

![Abort](/img/features/abort-now-btn.png)

### Resume a Release

If you want to **Resume** your suspended services follow the instructions below.

1. Click on the `...` in the row of the release that has the status **Suspended**
2. Click on the **Resume** option

![Resume from Release](/img/features/resume-from-release.png)

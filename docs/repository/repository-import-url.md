---
id: import url
title: Import URL
---

All KintoHub services start from a repository.
Today, you can deploy code from **any** public or private repository on **GitHub**, **BitBucket** and **GitLab** using a valid git URL and access token if your git repository is private.

Looking to connect your repositories via GitHub Apps. Read more [here](/repository/repository-github-apps.md#import-repository)

:::note
Repositories do not have any requirements to be compatible with KintoHub. You can deploy an existing repository with zero changes to your code and no configuration required!
:::

## Setting New Repository

1. Login to KintoHub
2. Click on the **Create Service** button at the top right
3. Click on the **Import URL** tab
4. Enter in your **Git Repository URL**
5. Enter in your **Branch** you wish to build and deploy
6. Optionally add an **Access Token** to your repository if it is private.

## Edit Existing Repo

1. Login to KintoHub
2. Choose your environment you are interested in viewing at the top left.
3. Choose the service from the services list you are interested in editing.
4. Click **Edit Service** at the top right
5. Change the **Branch** or **Access Token**
6. Click `Deploy` at the top right.

:::note
You are not allowed to change the repository URL once it is set. You must recreate your service.
:::

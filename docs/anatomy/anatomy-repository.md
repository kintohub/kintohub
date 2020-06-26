---
id: repository
title: Repository
---

## Overview

Every custom code that makes up your app must come from a repository.
Today, you can deploy code from **any** public or private repository using a valid git URL and access token if your git repository is private.

:::note
We will introduce **Github Apps** and **Gitlab Apps** in July 2020.

We are looking into [locally building and pushing code](https://feedback.kintohub.com/feature-requests/p/local-build-push) without a repository
:::

## Setting New Repository

Repositories do not have any requirements to be compatible with KintoHub. 

1. Login to KintoHub
2. Click `Create Service` at the top right
3. Enter in your **Git Repository URL**
4. Enter in your **Branch** you wish to build and deploy
5. Optionally add an **Access Token** to your repository if its private.

## Edit Existing Repo

1. Login to KintoHub
2. Choose your environment you are interested in viewing at the top left.
3. Choose the service from the services list you are interested in editing.
4. Click `Edit Service` at the top right
5. Change the **Branch** or **Access Token**
6. Click `Deploy` at the top right.

:::note
You are not allowed to change the repository URL once its set. You must recreate your service.
:::


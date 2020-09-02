---
id: introduction
title: Introduction

---

If your app or idea requires:

* A **Static Website** for users to interact with
* A **Backend API** that needs to scale to many thousands of requests per second
* A **Job** which scrapes data periodically from 3rd parties to provide information to your users
* A **Web App** which generates server-side rendered (SSR) content for your users
* A **Database** such as `MongoDB` for storing stateful information such as emails or data for your application
* A **S3 Cloud Storage** to store images or data uploaded by your users
* A **Memcache Key/Value Store** such as `Redis` to improve performance with cached queries or guarantee mission-critical tasks through **queues**.

**KintoHub** makes it easy to manage, debug and scale all-of-the above through an intuitive Dashboard across one or many regions.

## KintoHub Mission

The Kinto Team is working hard to create a powerful, yet intuitive **Cloud Interface** for `developers`.
Developers are expected to **ship fast**, but the time it takes to get rapidly evolving code safely into the cloud is complex...
Using KintoHub, teams should be able to rapidly prototype new ideas, debug issues **in the cloud** and manage mission-critical services all in one centralized place.

## What is "Kinto" + "Hub"

Kinto is the short form of **Kinto'Un**, inspired from Journey to the West and the Dragon Ball anime series. A **Kinto'Un** is the magic cloud or nimbus that Wu Kong, otherwise known as Son Goku, rides.
**Hub** is where all things connect with hope that our product will unique every git repository on the planet to be deployable to any cloud provider with confidence in costs.

## What is a Cloud Interface?

In 2020, cloud providers are slowly being abstracted by a technology called [Kubernetes](https://www.kubernetes.io).
KintoHub utilizes Kubernetes to build the first multi-cloud, multi-region management platform where you can deploy your services alongside existing workloads on a cloud account.
Starting with **Google** you can deploy any service in **3** regions around the world! **Amazon**, **Azure**, and **Digital Ocean** are coming next!

**KintoHub** simplifies and optimizes your costs on all cloud providers through a single dashboard.

## What About Serverless?

KintoHub currently does not support Lambda or Functions, but we do have a **Sleep Mode** coming soon. It will give you control over when your services shut down.

While they sleep, if an API request comes in, they will wake up within a few seconds.

Combining full control over your resources with being able to deploy a **32 Mb** instance and **Sleep Mode**, you can build a fleet of reliable serverless services. Not to mention, running a **32 Mb** service on KintoHub 24/7 only costs **$1.09 USD** per month!

:::note
Vote on the **Sleep mode** feature [here](https://feedback.kintohub.com/feature-requests/p/sleep-mode).
:::

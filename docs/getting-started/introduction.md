---
id: introduction
title: Introduction

---

## TLDR;

The Kinto Team is working hard to create a powerful, yet intuitive **Cloud Interface** for `developers`.

If your app or idea requires:

* A **Static Website** for users to interact with
* A **Backend API** that needs to scale to many thousands of requests per second
* A **Job** which scrapes data periodically from 3rd parties to provide information to your users
* A **Web App** which generate server side rendered (SSR) content for your users
* A **Database** such as `MongoDB` for storing stateful information such as emails or data for your application
* A **S3 Cloud Storage** to store images or data uploaded by your users
* A **Memcache Key/Value Store** such as `Redis` to improve performance with cached queries or guarantee mission-critical tasks through **queues**.

**KintoHub** makes it easy to manage, debug and scale all-of-the above through an intuitive Dashboard across one or many **Cloud Environments**.
And soon, a nifty command line interface (CLI).

Quickly get started with our [example flow](quick-example-flow.md).

## KintoHub Mission

The Kinto Team is working hard to create a powerful, yet intuitive **Cloud Interface** for `developers`.
Developers are expected to **ship fast**, but the time it takes to get rapidly evolving code safely into the cloud is complex...
Using KintoHub, teams should be able to rapidly prototype new ideas, debug issues **in the cloud** and manage mission critical services all in one centralized place.

## What is "Kinto" + "Hub"

Kinto is the short form of *Kinto'Un*, inspired from Journey to the West and the Dragon Ball Anime, is the magic cloud or nimbus that Wu Kong, otherwise known as Son Goku rides.
Hub can be described as a community or place where many things connect.
Together, KintoHub aims to be a community driven platform where all services can be combined and deployed magically onto any cloud.

## What is a Cloud Interface?

In 2020, cloud providers have exposed themselves to be completely abstracted via a technology called Kubernetes.
KintoHub is introducing the first multi-cloud, multi-region management platform where you can deploy your services alongside your existing workloads on your private cloud.
Starting with **Google** you can deploy any service in `3` regions around the world! **Amazon**, **Azure** and **Digital Ocean** are coming next!

**KintoHub** manages abstracts, optimizes and simplifies your costs on all cloud providers.
Once place and one dashboard.

In the future, you will also be able to deploy **Cloud Services** such as **Amazon RDS**, **Google Cloud SQL** and **Amazon Lambda**.
It makes sense to still use the powerful data sensitive technologies that the Cloud Giants have built! Especially in `prod`

## What About Serverless?

KintoHub currently does not support Lambda or Functions, but we do have a **Sleep Mode**.
[Sleep Mode](anatomy/anatomy-advanced.md) can be found under the advanced settings of your services and will give you control on when your services shut down.
While they sleep, if an API request comes in, they will wake up within a few seconds.

Combining full control over your resources with being able to deploy a `32 Mb` instance and **Sleep Mode**, you can build a fleet of serverless services.

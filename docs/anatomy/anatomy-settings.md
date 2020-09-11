---
id: settings
title: Settings
---

Settings allow you modify the way your service behaves and/or critical operations such as **Deleting** or **Suspending** your service.

## Viewing Service Settings

1. Login to KintoHub
2. Choose your environment you are interested in viewing at the top left.
3. Choose the service from the services list you are interested in editing.
4. Click the `Settings` at the far right.

## CI/CD

It's coming soon! Hang tight.

## Public API

Public APIs are available only for [Backend Services](../service-types/types-backend-api.md).
This toggle allows you to enable or disable a secure public hostname for your service to be accessed.
**Backend Services** by default are public.

When disabled, you may only access your service from another service within the same [Environment](anatomy-environment.md) on KintoHub using its [internal hostname](anatomy-access.md#how-it-works).
For example:

* Service A is a **Backend Service** which is only used for internal operations.
* Service B is a **Job** service can access it using its [internal hostname](anatomy-access.md#how-it-works).
* Service C is a **Web App** and runs on customers' browsers **cannot** access Service A since it does not have an [external hostname](anatomy-access.md#how-it-works).

## Suspend a service

The Suspend service option will allow you to temporarily stop your services running on KintoHub. At any point, the stopped services can be fully resumed and redeployed.

### In order to suspend services:
1. Go to the Settings tab and then click on the **Suspend Service** button.

![Suspend Service](/img/anatomy/suspend-service.png)

2. Click on the **Confirm** button in the prompt displayed.

![Confirm suspend](/img/anatomy/confirm-suspend-service.png)

Once you confirm, the services will stop running and status will change to `Suspended`.

:::note
To revoke the suspension, all you need to do is click on the __Resume__ button. Once you resume, the suspended services will be redeployed on KintoHub.
:::

![Resume](/img/anatomy/resume.png)

## Delete a service

This is an irreversible action and your service will be shutdown immediately.

1. Follow the instructions above on getting to the **Settings** tab and then click **Delete Service**
2. Type in the service name in the prompt and again click `Delete`

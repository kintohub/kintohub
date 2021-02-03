---
id: build-settings
title: Build Settings
---

Build Settings allow you to customize the steps and configuration of your service.
Each service type has a unique set of build settings.

Catalog based services do not have any Build Settings.
To read more about configuring a Catalog, click the specific Catalog service of interest in the sidebar on the left.

## View Build Settings

Build settings can be found on new, live, and historically deployed services.

### New Service Build Settings

1. Login to KintoHub
2. Click on `Create Service` at the top right
3. Enter in your repository information
4. By default, you will be placed on the **Build Settings** tab.

### Editing Live Service Build Settings

1. Login to KintoHub
2. Choose your environment you are interested in editing at the top left.
3. Choose the service from the services list you are interested in editing.
4. Click `Edit Service` at the top right.

![Edit Service](/img/features/edit-service.png)

5. By default, you will be placed on the **Build Settings** tab

### Viewing Historical Build Settings

1. Login to KintoHub
2. Choose your environment you are interested in editing at the top left.
3. Choose the service from the services list you are interested in editing.
4. Click on the **Releases** tab
5. Click the **...** on the right of the row to the specific release you are interested in viewing
6. Click **Edit Release** from the dropdown menu.

![Edit Release](/img/features/edit-release.png)

7. By default, you will be placed on the **Build Settings** tab

## General Build Settings

- **Language** - A managed or custom runtime for your application
  - **Dockerfile** - Allows you to specify a custom docker file be it multi-stage or single-stage.
    - **Dockerfile Name** - the name of your Dockerfile in your repository _(defaults to Dockerfile)_
  - **Ruby** - Managed ruby environment
    - **Language Version** the version of ruby you want to use
    - **Build Command** Build commands run as the 1st stage of Deploy to compile your build your code into an app
    - **Start Command** Is the command that starts your application during the last stage of `Deploy`
  - **Python** - Managed python environment
    - **Language Version** the version of python you want to use
    - **Build Command** Build commands run as the 1st stage of Deploy to compile your build your code into an app
    - **Start Command** Is the command that starts your application during the last stage of `Deploy`
  - **PHP** - Managed PHP environment
    - **Language Version** the version of PHP you want to use
    - **Build Command** Build commands run as the 1st stage of Deploy to compile your build your code into an app
    - **Start Command** Is the command that starts your application during the last stage of `Deploy`
  - **Java** - Managed Java environment
    - **Language Version** the version of Java you want to use
    - **Build Command** Build commands run as the 1st stage of Deploy to compile your build your code into an app
    - **Start Command** Is the command that starts your application during the last stage of `Deploy`
  - **NodeJS** - Managed Node environment
    - **Language Version** the version of Node you want to use
    - **Build Command** Build commands run as the 1st stage of Deploy to compile your build your code into an app
    - **Start Command** Is the command that starts your application during the last stage of `Deploy`
- **Subfolder Path** - Specify a specific subfolder you wish to use for your service.
  - Defaults to `.`
  - Example specific folder to use: `./backend-api`.

:::tip

- You can run multiple builds or start commands by grouping them with **&&**.
  - Example: `npm install && npm run build`
- Subfolder paths are useful for mono repos.
- Don't see your favorite language? Request for it [here](https://feedback.kintohub.com/feature-requests)
  :::

## Web App and Backend API Build Settings

Aside from **General Build Settings** Web Apps and Backend APIs introduce the following:

- **Port** - The port in which your app will service your API.

## Background Workers Build Settings

Background workers have no special build settings aside from the ones described in **General Build settings**

## Jobs Build Settings

Aside from **General Build Settings** Jobs introduces the following:

- **Run Timeout** - if your job takes longer than this specified time, it will fail with a timeout.
- **Schedule Cron Job** - When enabled, your job will run on a schedule.
  If you do not enable a schedule, you will need to manually trigger your job via a CI/CD event or **Trigger Deploy** button at the top right of your service.

:::tip
Set the **Run Timeout** to the lowest value that you know should never happen.
If your job runs longer than the time you specify, KintoHub will cancel the job as a Timeout.
This protects your job from running up your bill when an infinite loop / never-ending code problem occurs
:::

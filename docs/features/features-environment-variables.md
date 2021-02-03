---
id: environment-variables
title: Environment Variables
---

Environment Variables are used as both **Run Time** and **Build Time** lifecycle of your app.
During the **Build** stage of your **Deploy** action, your app's code gets pulled and compiled and may access environment variables similar to how you would use a local `.env` file or operating system specific variables for compiling your app.
In addition to building time, when your app starts, the same Environment Variables are available for usage.

Environment Variables allow you to make configuration easier for your app. By specifying specific _API KEYS_ or `dev` versus `prod` configurations such as `LOG_LEVEL` can be driven by Environment Variables.

:::note
Environment Variables are not available for Catalog services.
:::

## New Service Environment Variables

1. Login to KintoHub
2. Choose your environment you are interested in deploying into at the top left.
3. Click **Create Service** at the top right.
4. Enter in your repository information.
5. Click the **Environment Variables** tab available within the panel.

![Environment Variables](/img/features/env-var-tab.png)

6. After adding your environment variables, then click **Deploy** button at the top right.

## Edit Service Environment Variables

1. Login to KintoHub
2. Choose your environment you are interested in deploying into at the top left.
3. Choose the service from the services list you are interested in editing.
4. Click **Edit Service** at the top right.
5. Click the **Environment Variables** tab available within the panel.
6. After making the modifications you wish to make, then click **Deploy** button at the top right.

## View Historic Environment Variables

If you wish to see what environment variables you used in the past, you may look at the configuration of previous releases.

1. Login to KintoHub
2. Choose your environment you are interested in deploying into at the top left.
3. Choose the service from the services list you are interested in editing.
4. Click on the **Releases** tab near the top left of the screen.
5. Click the **...** on the right of the row to the specific release you are interested in viewing.
6. Click **Edit Release** option
7. Click the **Environment Variables** tab available within the slide-out panel.

## Paste Environment Variables from `.env` file

`.env` files have been growing in popularity and you can paste this format into KintoHub.

An example file below:

```.env
TEST=ME
DATABASE_HOST=vegeta.com
```

1. Go to an Environment Variables tab following the instructions from above.
2. Copy your entire `.env` file into your clipboard.
   - `Command+C` or `CTRL+C` depending on your operating system
3. Right-click the **Key** input field and click `Paste`

## Copy Environment Variables from KintoHub

1. Go to an Environment Variables tab following the instructions from above.
2. Click the `Copy to Clipboard` button which will copy the values in `.env` file format

![Copy Variables](/img/features/copy-env-vars.png)

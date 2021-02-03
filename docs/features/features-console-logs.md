---
id: console-logs
title: Console Logs
---

Get real time visibility on your service's instance logs to debug your app.
As long as your app is writing logs to the console or tail, KintoHub will pick up the text and display it here.
Console **does not** read logs files.
Once your service restarts, your logs will be gone forever.

:::note
We are looking into storing historic logs for you. Vote for the feature [here](https://feedback.kintohub.com/feature-requests/p/historic-console-logs)
:::

:::tip
Use 3rd party services like Datadog to capture your logs for long term storage and analysis.
:::

## View Console

1. Login to KintoHub
2. Choose your environment you are interested in viewing at the top left.
3. Choose the service from the services list you are interested in editing.
4. Click on the **Console** tab in the upper center of the screen.

![console](/img/features/console.png)

## Console Log Format

KintoHub displays logs in the following format in the console tab of your service.

```
TIME         INSTANCE ID    MESSAGE
---------------------------------------------------------
07:06:27 PM  backend-vwq7k  Hello World
```

KintoHub Manages the **time stamp** on the far left and the inserts the **instance id** before displaying your app's message.
Timestamps are translated to your local browser time.

## Console Instance Selection

An instance is a running version of your app.
Many versions or many of the same version of your app may be running simultaneously due to **Auto Scale** or **Deploying** a new service.

By default, **Console** will select **All Instances** and aggregate all your app's logs into a single view.
When you wish to drill down to a specific instance of your app, you may select it at the top left.

## Console log search

You may search your logs by typing in the **Search** bar at the top right of the console view.
The search will highlight and inform you of how many successful search results have been found.
If you wish to see only the lines that contain the text you have input into the **Search** bar, you may click to toggle the `lines` icon to the right of the **Search** bar.
The `lines` toggle will filter your logs to only show you what you have searched for.

![Lines Toggle](/img/features/lines-toggle.png)

---
id: metrics
title: Metrics
---

## Overview

Metrics provides information about CPU and Memory that ayour service uses.
This information is valuable as you will be able to optimize your cost by viewing your actual usage compared to what you are paying for.
In addition to cost savings, you may also detect issues with your service by seeing how many times it has restarted.
A **Restart** is when your service has crashed and KintoHub has automatically brought it back online.

## View Metrics

1. Login to KintoHub
2. Choose your environment you are interested in deploying into at the top left.
3. Create **any** service or select a previous service you have made.
4. By default, you will be placed on the **Overview** tab.

## Metrics Information

### Summary

Summary shows an overview of your total usage in near real time.
Data is sometimes delayed by ~10 seconds.

* **Memory** - The total memory and memory usage our service is using
* **CPU** - The total CPU and CPU usage your service is using and 
    * When CPU is shared, the value will be shown as **SHARED** and you will not be able to monitor usage.
### Instances

Instances breaks down your app into the individual executables that are **live** and running on your service.

* **Name/Instance** - The unique name and instance identifier
* **CPU** - Usage and dedicated CPU allocated to your instance.
    * When CPU is shared, the value will be shown as **SHARED** and you will not be able to monitor usage.
* **Memory** -  Usage and dedicated memory allocated to your instance
* **Restarts** - Number of times your service has crashed and recovered
* **Status** - The health of your instance
    * **Healthy** - Readily available to serve traffic
    * **Unhealthy** - Currently not available and is either starting up or has crashed
    * **Completed** - Service has been terminated due to a `Deploy` or `Restart` action
* **Actions** - `...` Provides actions you can execute on your instance
    * **Restart Instance** - If there is an issue, you can force an instance restsart
    * **View Console** - Takes you to your **Console** tab and filters the logs with the instance you specified. 

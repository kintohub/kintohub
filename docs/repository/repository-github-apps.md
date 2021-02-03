---
id: github-apps
title: GitHub Apps
---

The GitHub Apps feature enables integration of repositories in GitHub with KintoHub using third party OAuth.

## Connecting GitHub

1. Login to **KintoHub**
2. Click on the **Create Service** button at the top right corner
3. Choose a service from the list of services provided
4. Click on the **Connect Github** button

![Connect Github btn](/img/features/connect-github-btn.png)
:::note
If your GitHub account has multiple organisations linked to it, you will be provided with an option to choose the appropriate organisation and access the repositories under that organisation on KintoHub.
::: 5. To select only preferred repositories, enable the option **Only select repositories** and then make your selection 6. Click on he **Install & Authorize** button

Your Github account is connected to KintoHub. Now, **Create and Deploy** services easily by accessing your repositories.

## Edit GitHub Configurations

1. Login to **KintoHub**
2. Click on the **environment** name displayed in the top left corner and select appropriate environment
3. Click on the **Create Service** button
4. Choose a service from the list of services provided
5. Click on the **Edit Configuration** link displayed in the `GitHub` tab
   ![Edit Configuration link](/img/features/edit-config.png)
6. Edit the configurations and make necessary changes
7. Click on the **Save** button to save the recent changes

## Suspend GitHub Connection

Once the GitHub Apps connection is suspended, KintoHub will lose access to the repositories in your GitHub account. However, the suspension can be revoked at any point.

1. Login to **KintoHub**
2. Click on the **environment** name displayed in the top left corner and select appropriate environment
3. Click on the **Create Service** button
4. Choose a service from the list of services provided
5. Click on the **Edit Configuration** link displayed in the `GitHub` tab
6. Scroll down to the **Danger Zone** section
7. Click on the **Suspend** button

![Suspend](/img/features/suspend.png)

The repositories in your Github account will no longer be accessible on KintoHub.
To revoke the suspension click on the **Unsuspend** button.

## Uninstall KintoHub from GitHub account

Uninstalling the KintoHub App from GitHub account will block all access to the **repositories** under it.

1. Login to **KintoHub**
2. Click on the **environment** name displayed in the top left corner and select appropriate environment
3. Click on the **Create Service** button
4. Choose a service from the list of services provided
5. Click on the **Edit Configuration** link displayed in the `GitHub` tab
6. Scroll down to the **Danger Zone** section
7. Click on the **Uninstall** button

![Uninstall](/img/features/Uninstall.png)

:::note
Your deployed services will remain saved on KintoHub. However, you will no longer be able to build and deploy new releases.
:::

The repositories in your Github account will no longer be accessible on KintoHub.

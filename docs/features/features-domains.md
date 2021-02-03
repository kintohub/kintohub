---
id: domains
title: Custom Domains
---

**Custom Domains** allow you to bring a custom URL to your services on KintoHub.
KintoHub supports both **root** and **sub** domains from **ANY** domain provider using CNAMEs.
Every **Custom Domain** on KintoHub gets a **FREE** Let's Encrypt SSL certificate.

The following service types support **Custom domains**:

- Web Apps
- Backend APIs

## Setting up a Domain

1. Login to KintoHub
2. Choose your environment you are interested in deploying into at the top left.
3. Create or select an existing **Web App**, **Website** or **Backend API** service to edit
4. Click on the **Domains** tab near the top center of the Service page.

![Domain](/img/features/domain.png)

5. Enter in your domain or subdomain you wish to map to your service.
6. Click on the **Add Domain** button

![Add Domain](/img/features/add-domain.png)

7. Follow the instructions to add a **CNAME** key and value to your DNS host provider
8. Once complete click on the **OK** button

## Domain Status

Let's Encrypt SSL certificates expire every few months.
KintoHub will automatically renew your SSL certificate without any downtime of your service.
Your Let's Encrypt certificate status is displayed under **SSL Status**

## Remove Domain

1. Under the **Domains** tab click on the **Remove** button in the row of the domain you wish to remove.

![Remove Domain](/img/features/remove-domain.png)

2. Click on the **Remove** button in the displayed prompt.

![Cofirm remove domain](/img/features/confirm-remove.png)

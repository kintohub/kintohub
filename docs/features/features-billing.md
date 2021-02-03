---
id: billing
title: Billing
---

KintoHub uses a **Pay-As-You-Go** billing similar to Amazon, Google, and Azure.
Once a credit card is attached to your account, you will be able to access all the features of KintoHub without any limitations.
KintoHub does not plan to charge for seats or specific features aside from the three ways your team may utilize the platform.

- **Free** - users may deploy up to **3 services** with up to **256 Mb** and **shared vCPU** with minimal limitations
- **Pay-As-You-Go** - users have no limits to what they can deploy on the KintoHub Platform.
- **Private Clusters** - We provide **Startup**, **Small Business**, and **Enterprise** licenses to a private version of the KintoHub platform across your company's multi-cloud, multi-region and on-prem hardware.

:::note
Once you have signed up for **Pay-As-You-Go** billing, you will **NOT** be charged immediately.
All charges are made on the 1st of every month and pro-rated by the second.
All **Pay-As-You-Go** users get **$5 USD** of usage charges waved per month
:::

## Free User Limitations

- May only deploy up to **256 Mb** of memory per service
- May only have **1** environment
- Cannot use **Dedicated vCPU**. All services are **Shared vCPU** by default
- Cannot **Auto Scale** your services
- Catalog Persistent Storage is capped at `1Gb` of persistence

## Pay As You Go Benefits

After entering in your credit card, all **Free User Limitations** are lifted.
All **Pay-As-You-Go** customer's bill will have the following benefits:

- The first **5 USD** of cost usage for **any** feature on the platform is waved
- First `3000 minutes` of build & deploy time is waived
- First `10 Gb` of bandwidth is waived

Here are some examples that can be deployed for **FREE** after becoming a **Pay-As-You-Go** user:

- Deploy up to **4 services** with **64 Mb** memory each and `shared vCPU` enabled.
- Deploy a free full-stack application with a **Database**, **Web App** and **Backend API**

:::note
**Build & Deploy Time** and **Bandwidth** is currently 100% waived during the early access period!
:::

## Billing Operations

### Activate Pay-As-You-Go Billing

1. Login to your account
2. Click on your **Account Icon** at the bottom left of the screen
3. Click on the **View Plan** option

![View Plan](/img/features/view-plan.png)

4. Click on the **Select Plan** button under the `pay-as-you-go` plan.

![Plan](/img/features/pay-as-you-go.png)

5. Enter your `name` and `credit card` information
6. Enjoy KintoHub!

### Cancel Pay-As-You-Go Billing

Currently, there is no automatic way to cancel due to the complexities of safely downgrading your account.
Please [contact us](https://www.kintohub.com/contact-us) to cancel your subscription.

### View Invoice & Receipts

1. Login to your account
2. Click on your **Account Icon** at the bottom left of the screen
3. Click on the **Billing** option
4. Under **Billing History** select the `arrow` next to the invoice date

![Billing History](/img/features/arrow-icon.png)

### Add or Remove Cards

It is not possible to remove your credit card unless you **Cancel** your subscription by following the **Cancel Pay-As-You-Go** billing above.

If you wish to update your subscription with a new card, you may follow these steps:

1. Login to your account
2. Click on your **Account Icon** at the bottom left of the screen
3. Select **Billing** option
4. Under **Payment Method** click on the `Add payment method` option

![Add Payment Method](/img/features/add-payment-method.png)

5. Once your new payment method is added, click `Set Default Payment Method` to your new card
6. Optionally, you may now remove your original card that was on the account.

:::note
This option will not show unless you are a paying user.
:::

## Pricing Overview

All charges are pro-rated per second.
Depending on the type of resources you are being charged for, you are also pro-rated by its type:

- **vCPU** is pro-rated up to 1/10th `10%` of a vCPU core.
  - As an example: if you select `0.1` vCPU, it will cost you $1.50 USD per month pro-rated by the second versus the full cost of $15 USD for a full **100 dedicated vCPU**
- **Memory** is pro-rated per Mb.
  - _This means if you select **32 Mb** of memory, it will cost you **$0.09 USD** per month pro-rated by the second versus the full cost of **$3 USD** per month_
- **Storage** is pro-rated per megabyte per second
- **Bandwidth** is pro-rated per megabyte

:::tip
Learn how to estimate your costs, visit the [Advanced Settings](features-advanced.md#max-monthly-cost-estimation) tab.
:::

### vCPU Pricing

CPU costs are broken down into three categories and is charged per second

- **Shared vCPU** - $1 USD /month
- **Dedicated vCPU with Optimization Enabled** - $15 USD /month
- **Dedicated vCPU with Optimization Disabled** - $30 USD /month

The smallest amount of **Optimized Dedicated vCPU** available is `0.1` or `10%` of a vCPU core which costs $1.50 USD per month.

### Memory Pricing

Memory costs are broken down into 2 categories and are charged per second:

- **1 Gb Memory with Optimization Enabled** - $3 USD /month
- **1 Gb Memory with Optimization Disabled** - $7 USD /month

## Storage Pricing

Persistent storage disks sit on solid state drives (SSDs) and are charged per second:

- **1 Gb Storage** - $0.28 (28 cents) /month

:::note
Right now the only storage KintoHub charges for is Catalog Service disks.

In the future it may also include **Backups**, **Build Artifacts**, and **Log History** with the option to automatically delete after a specific amount of days.
:::

## Build & Deploy Time Pricing

Build and Deploy tasks are usually heavy operations and are broken down into two categories and are charged per second.

- **First 3000 Build & Deploy Seconds** - FREE!
- **1 Build & Deploy Second** - $0.0000167 per second or $0.001 (1/10th) of a cent per second.

## Bandwidth Pricing

Bandwidth costs are broken down into 3 categories

- **Static Websites** - have no bandwidth limit
- **First 100 GB Bandwidth** - FREE!
- **1 Gb bandwidth** - $0.12 or 12 cents pro-rated per megabyte.

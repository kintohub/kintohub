---
id: backend-api
title: Backend API
---

KintoHub can host and scale any backend API for public requests or internal service to service requests.
Each backend API gets a public https endpoint and internal endpoint for communication.
Usually, backend APIs perform business logic such as registering or authenticating users or calculating the top 100 users on a leaderboard.

## When to use a backend API service?

If your app is serving the following protocols, you should consider using a Backend API Service:

- HTTP
- TCP
- Websocket endpoint

:::note
The following protocols have not been tested.

- HTTP/2
- gRPC
- TCP
- UDP
  :::

## Backend API features

- Advance [Build](/features/features-build-settings.md) and [Deploy](/features/features-deploy.md) Settings
  - 1st Class Languages Build and Deploy support
  - Single and Multi-Stage Dockerfile Build and Deploy support
  - Ability to service an API through a port
  - Auto scaling
- [Metrics](/features/features-metrics.md)
- [Custom Domains](/features/features-domains.md)
- [Environment Variables](/features/features-environment-variables.md)
- [Public API Toggle](/features/features-settings.md#public-api) protects your service to be accessed internally only or enables external access.

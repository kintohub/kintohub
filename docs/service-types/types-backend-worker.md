---
id: backend-worker
title: Backend Worker
---

KintoHub can host backend workers which are services that run continuously and do not expose any port.
Usually backend workers are used to consume messages or process events from queues such as Redis, Kafka or RabbitMQ.
Sidekiq and Celery are often used as a backend worker service.

## When to use a backend worker service?

If your app does not have any public API endpoints and needs to run continuously, you should consider using backend worker.

## Backend worker features

* Advance [Build](../anatomy/anatomy-build-settings.md) and [Deploy](../anatomy/anatomy-deploy.md) Settings
    * 1st Class Languages Build and Deploy support
    * Single and Multi-Stage Dockerfile Build and Deploy support
    * Auto scaling
* [Metrics](../anatomy/anatomy-metrics.md)
* [Environment Variables](../anatomy/anatomy-environment-variables.md)

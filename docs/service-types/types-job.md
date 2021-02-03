---
id: job
title: Job
---

KintoHub can host manually triggered jobs or time based triggered cron jobs.
Jobs are usually used to do period tasks such as caching data, downloading data from 3rd party APIs or running end to end tests.
In some cases, people use jobs to automatically or manually backup databases as well.

## When to use a Job service?

If your app requires manual invocation or to run on a scheduled time and does not expose any ports, you should consider using Jobs.

## Job features

- Advance [Build](/features/features-build-settings.md) and [Deploy](/features/features-deploy.md) Settings
  - 1st Class Languages Build and Deploy support
  - Single and Multi-Stage Dockerfile Build and Deploy support
- [Metrics](/features/features-metrics.md)
- [Job History](/features/features-job-history.md)
- [Environment Variables](/features/features-environment-variables.md)

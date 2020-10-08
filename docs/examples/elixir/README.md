---
id: elixir-example
title: Elixir
---
A sample elixir app for [KintoHub](https://kintohub.com)

## :rocket: Deploying on KintoHub

- **Service Type:** Backend API
- **Repo:** https://github.com/kintohub-examples/elixir
- **Branch:** master
- **Language:** Elixir
- **Language version:** 1.10
- **Build Command:** `mix local.hex --force && mix local.rebar --force && mix deps.get --quiet && mix`
- **Start Command:** `mix run --no-halt`
- **Port:** 3000

When complete, open the **Access** tab and open the external URL to see your Elixir example!

:::tip
An **Elixir** example can be deployed using `Dockerfile` on KintoHub
:::

### :dolphin: Deploying with Dockerfile

- **Service Type:** Backend API
- **Repo:** https://github.com/kintohub-examples/elixir
- **Branch:** master
- **Language:** Dockerfile
- **Dockerfile Name:** Dockerfile
- **Port:** 3000

## :hammer: Running locally

**Pre-requisites:** Elixir v1.10

- Clone the repository to a folder of choice.

```
$ git clone https://github.com/kintohub-examples/elixir

$ cd elixir
```

- Install the dependencies

```
$ mix local.hex --force && mix local.rebar --force && mix deps.get --quiet && mix
```

- To start the app

```
$ mix run --no-halt
```

After running this command, open `localhost:3000` in your browser to view the response sent.

#### Response sent
```
  Hello world
``` 

## :ambulance: Support

**Contact us:** https://www.kintohub.com/contact-us

**Discord:** https://kintohub.com/discord
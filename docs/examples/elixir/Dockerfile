
FROM elixir:1.10

WORKDIR /app
COPY . .

RUN mix local.hex --force && mix local.rebar --force && mix deps.get --quiet && mix

ENTRYPOINT ["mix", "run", "--no-halt"]

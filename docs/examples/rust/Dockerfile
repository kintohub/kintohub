# select build image
FROM rust:1.46-alpine as build

# create a new empty shell project

RUN USER=root cargo new --bin hello-web-server
WORKDIR /hello-web-server

# copy over your manifests
COPY ./Cargo.lock ./Cargo.lock
COPY ./Cargo.toml ./Cargo.toml

# this build step will cache your dependencies
RUN cargo build --release
RUN rm src/*.rs

# copy your source tree
COPY ./src ./src

# build for release
RUN rm ./target/release/deps/hello_web_server*
RUN cargo build --release

# our final base
FROM rust:1.46-alpine

# copy the build artifact from the build stage
COPY --from=build /hello-web-server/target/release/hello-web-server .

# set the startup command to run your binary
ENTRYPOINT ["./hello-web-server"]

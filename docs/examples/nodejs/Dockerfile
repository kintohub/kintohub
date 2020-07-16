FROM node:8.9.4

RUN mkdir -p app

WORKDIR /app

COPY . /app


RUN npm install

ENV PORT=80

EXPOSE 80

ENTRYPOINT ["npm","run","prod"]

FROM node:21-alpine

# RUN yarn  && yarn build

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY .output/ /usr/src/app/

# ENV HOST 0.0.0.0
EXPOSE 3000

ENTRYPOINT ["node","server/index.mjs"]

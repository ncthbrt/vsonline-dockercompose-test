# A minimal Docker image with Node and Puppeteer
#
# Based upon:
# https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-in-docker

FROM node:lts-alpine as base

WORKDIR /app
COPY package.json ./package.json

RUN npm install --only=prod

FROM base as builder

RUN npm install --only=dev

COPY ./tsconfig.json ./tsconfig.json
COPY ./codegen.yml ./codegen.yml
COPY ./src/ ./src

RUN npm run build

FROM base as runner
COPY --from=builder /app/build /app/build/

ENTRYPOINT [ "/bin/sh", "-c", "npm start" ]

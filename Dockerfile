FROM node:16.9.1-alpine3.13

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /usr/src/app

COPY package.json yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

ARG NEXT_BUILD=1
RUN if [ $NEXT_BUILD -eq 1 ]; then yarn build; fi

EXPOSE 3000

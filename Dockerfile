FROM node:lts AS node

ARG ENV=prod
ARG APP=angular-docker

ENV ENV ${ENV}
ENV APP ${APP}

WORKDIR /app
COPY ./ /app/

RUN npm ci
RUN npm run build --prod
RUN mv /app/dist/${APP}/* /app/dist/

FROM nginx:1.23-alpine

COPY --from=node /app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
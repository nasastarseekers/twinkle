FROM node:lts AS node

ENV ENV prod

WORKDIR /app
COPY ./ /app/

RUN npm ci
RUN npm run build --prod
RUN mv /app/dist/twinkle/* /app/dist/

FROM nginx:1.23-alpine

COPY --from=node /app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
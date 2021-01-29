FROM node:14-slim AS builder

ARG NPM_TOKEN
ENV NODE_ENV="development"
COPY ./.npmrc ./package.json ./package-lock.json /app/
WORKDIR /app
RUN npm install \
&& npm cache clean --force

COPY . .
RUN npm run build


FROM node:14-slim

ARG NPM_TOKEN
ENV NODE_ENV="production"
COPY ./.npmrc ./package.json ./package-lock.json /app/
WORKDIR /app
RUN npm install \
&& npm cache clean --force

COPY --from=builder /app/dist ./dist

ENTRYPOINT ["node", "/app/dist/bin/main.js"]
CMD ["run-http-server"]
EXPOSE 8080
USER 1000

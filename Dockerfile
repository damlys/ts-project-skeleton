FROM node:16-slim AS builder

ARG NPM_TOKEN
ENV NODE_ENV="development"
ENV VERSION="0.0.15"
COPY ./.npmrc ./package.json ./package-lock.json /app/
WORKDIR /app
RUN npm install \
&& npm cache clean --force

COPY . .
RUN npm run build


FROM node:16-slim

ARG NPM_TOKEN
ENV NODE_ENV="production"
ENV VERSION="0.0.15"
COPY ./.npmrc ./package.json ./package-lock.json /app/
WORKDIR /app
RUN npm install \
&& npm cache clean --force

COPY --from=builder /app/dist ./dist

ENTRYPOINT ["node", "/app/dist/bin/main.js"]
CMD ["help"]
EXPOSE 8080
USER 1000

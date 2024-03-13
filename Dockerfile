FROM node:20-alpine as base

#
# Build Remix components
#
FROM base as build
WORKDIR /app
COPY . /app/
RUN npm ci
RUN npm run build

#
# Optimize node_modules
#
FROM base as deps
WORKDIR /app
COPY --from=build /app/node_modules /app/node_modules
COPY package.json package-lock.json /app/
RUN npm prune --omit=dev

#
# Generate a production image
#
FROM base
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/build /app/build
COPY --from=deps /app/node_modules /app/node_modules
COPY package.json package-lock.json /app/

CMD [ "npm", "start" ]

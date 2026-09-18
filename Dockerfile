# ---- build stage ----------------------------------------------------------
FROM node:22-alpine AS build

WORKDIR /app

# deps first (better layer caching)
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# then the garden itself
COPY . .

# 11ty needs a bit more heap on large gardens
ENV ELEVENTY_ENV=prod \
    NODE_OPTIONS=--max-old-space-size=3072
RUN npm run build

# ---- runtime stage --------------------------------------------------------
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

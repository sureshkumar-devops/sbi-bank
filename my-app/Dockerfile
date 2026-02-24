FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 3000
ENV APP_VERSION="unknown"
USER node
CMD [ "node", "server.js" ]



# FROM node:18-slim-alpine AS builder
# WORKDIR /app
# COPY src/package*.json ./
# RUN npm install
# COPY src/ /app/
# RUN npm run build
# FROM node:18-slim-alpine
# COPY --from=builder /app/dist/ /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# USER node
# CMD ["nginx","-g","daemon off;"]



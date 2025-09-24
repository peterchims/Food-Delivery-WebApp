# -----------------
# Base dependencies
# -----------------
FROM node:18-alpine AS base
WORKDIR /app

# Copy only package files first to leverage Docker cache
COPY package*.json ./
COPY *.config.js ./

# -----------------
# -----------------
# Development stage
# -----------------
FROM base AS dev
ENV NODE_ENV=development

# Disable Husky in Docker (important!)
ENV HUSKY=0

# Install all dependencies including dev dependencies
RUN npm install

# Copy source code
COPY . .

# Create node_modules volume directory
RUN mkdir -p /app/node_modules

# Expose Vite default port
EXPOSE 1000

# Use the simplified dev script (no need for extra flags)
CMD ["npm", "run", "dev"]

# -----------------
# Build stage
# -----------------
FROM base AS build
ENV NODE_ENV=production

# Disable Husky (if you have it)
ENV HUSKY=0

# Install all dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build Vite project
RUN npm run build

# -----------------
# Production stage (Nginx)
# -----------------
FROM nginx:alpine AS prod

# Copy the built files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose default HTTP port
EXPOSE 80

# Optional healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost/ || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
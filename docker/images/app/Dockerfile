# PSEUDOCODE: Application Image
# 1. Inherit from the Node Middleware
FROM local/node_middleware:latest AS app_final

# 2. Dependency Caching Layer
# Copy only requirements first. Docker caches this layer if the file hasn't changed.
COPY --chown=secureuser:pipeline package*.json ./

# Configure npm cache to a writable location for secureuser
ENV NPM_CONFIG_CACHE=/app/.npm

# 3. Install Libraries
# Install Node dependencies
RUN npm ci

# 4. Application Logic
# Copy the actual source code
COPY --chown=secureuser:pipeline . .

# Build Next.js app
RUN npm run build

# 5. Runtime Configuration
# Cloud Run injects the PORT env var (defaults to 8080)
ENV PORT=8080
ENV NODE_ENV=production
EXPOSE 8080

# 6. Entrypoint
CMD ["npm", "start"]

# --- Builder Stage ---
# Inherit from the Node Middleware to get Node.js and a secure user
FROM local/node_middleware:latest AS builder

WORKDIR /app

# Copy dependency manifests first for layer caching
COPY --chown=secureuser:pipeline package*.json ./

# Configure npm cache to a writable location for secureuser
ENV NPM_CONFIG_CACHE=/app/.npm

# Install all dependencies (including devDependencies for the build)
RUN npm ci

# Copy the rest of the application source code
COPY --chown=secureuser:pipeline . .

# Build Next.js app
RUN npm run build

# --- Production/Runner Stage ---
FROM local/node_middleware:latest AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

# Copy the standalone output, which includes only necessary production files.
# This also copies the .next/static and public folders automatically.
COPY --chown=secureuser:pipeline --from=builder /app/.next/standalone ./

USER secureuser

# The standalone output creates a server.js file as the entrypoint.
CMD ["node", "server.js"]

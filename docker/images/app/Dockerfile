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

# Copy only the necessary production artifacts from the builder stage
COPY --chown=secureuser:pipeline --from=builder /app/public ./public
COPY --chown=secureuser:pipeline --from=builder /app/.next ./.next
COPY --chown=secureuser:pipeline --from=builder /app/package.json ./package.json
COPY --chown=secureuser:pipeline --from=builder /app/node_modules ./node_modules

USER secureuser
CMD ["npm", "start"]


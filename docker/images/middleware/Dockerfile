# PSEUDOCODE: Node Middleware
# 1. Inherit from the secure Root Image (Local build context)
FROM local/root_base:latest AS node_middleware

# 2. Install Runtime Dependencies
# Install Node.js and npm (standard for Debian 12+)
RUN apt-get update && \
    # The root image already has curl. Install Node.js v20 from NodeSource.
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y --no-install-recommends nodejs && \
    rm -rf /var/lib/apt/lists/*

# 3. Environment Configuration
ENV NODE_ENV=production

# 5. Security Handoff
USER secureuser
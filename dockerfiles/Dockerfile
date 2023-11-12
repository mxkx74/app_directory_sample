# ---- Base Node ----
FROM node:18.18.1-slim AS base
WORKDIR /app
COPY package.json package-lock.json ./

# ---- dependencies ----
FROM base as deps
WORKDIR /app
RUN npm install && npm cache clean --force

# ---- development ----
FROM base AS development
ENV NODE_ENV=development
COPY --from=deps /app/node_modules ./node_modules

# ---- release build ----
FROM base AS builder
ENV NODE_ENV=production
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- production start ----
FROM base AS runner
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/standalone ./
CMD ["node", "server.js"]

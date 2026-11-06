# syntax=docker/dockerfile:1
# One image for the NAS app (deploy/compose.yaml): lms runs the approval app on :3030, worker
# runs node /repo/worker/run.mjs, and both get the tools jobs need: git, jq, curl, ffmpeg,
# ssh, Playwright Chromium and the Claude Code CLI. The repo itself is mounted at /repo.
# Build from the repo root:
#   docker build -f deploy/Dockerfile -t <dockerhub-user>/smallshoplp-runner .
# The image is public on Docker Hub: it holds approve-app/ only (Dockerfile.dockerignore).

# The approval app's production build.
FROM node:22-bookworm AS app
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /opt/approve-app
COPY approve-app/package.json approve-app/package-lock.json ./
RUN npm ci
COPY approve-app/ ./
RUN npm run build

FROM node:22-bookworm
# Same Playwright as templates/site-starter, so shop sites find this browser too.
ARG PLAYWRIGHT_VERSION=1.63.0
ARG CLAUDE_CODE_VERSION=latest
# 568 is TrueNAS's built-in "apps" user. The dataset under /mnt/NotchGPool/smallshoplp is owned by it.
ARG RUNNER_UID=568
ARG RUNNER_GID=568

LABEL org.opencontainers.image.source=https://github.com/NotchG/smallshoplp
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright \
    NEXT_TELEMETRY_DISABLED=1 \
    DISABLE_AUTOUPDATER=1

# Debian's ffmpeg is built with libx264, which outreach-media.mjs needs.
RUN apt-get update \
 && apt-get install -y --no-install-recommends ca-certificates curl ffmpeg git jq openssh-client \
 && rm -rf /var/lib/apt/lists/*

RUN groupadd --gid "$RUNNER_GID" runner \
 && useradd --uid "$RUNNER_UID" --gid runner --create-home --home-dir /home/runner --shell /bin/bash runner

# Global Playwright for scripts on a fresh clone (no site/node_modules), its Chromium with the OS
# libraries it needs, and Claude Code. Updates come with a new image, not in place.
# The browser folder belongs to runner, so a site's own `playwright install` is a no-op, not EACCES.
RUN npm install -g "playwright@$PLAYWRIGHT_VERSION" "@anthropic-ai/claude-code@$CLAUDE_CODE_VERSION" \
 && playwright install --with-deps chromium \
 && chown -R runner:runner "$PLAYWRIGHT_BROWSERS_PATH" \
 && rm -rf /var/lib/apt/lists/* \
 && npm cache clean --force

# .next/cache is written at runtime, so the app belongs to runner too.
COPY --from=app --chown=runner:runner /opt/approve-app /opt/approve-app

USER runner
WORKDIR /opt/approve-app
ENV NODE_ENV=production
EXPOSE 3030
# lms. The worker overrides this with: node /repo/worker/run.mjs
CMD ["node_modules/.bin/next", "start", "-p", "3030"]

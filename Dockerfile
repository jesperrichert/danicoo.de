FROM oven/bun:slim
WORKDIR /app

COPY . .

RUN bun install
RUN bun run build

CMD ["bun", "start"]

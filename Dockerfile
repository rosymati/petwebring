FROM denoland/deno:debian-2.8.1 AS build

WORKDIR /app
COPY src ./src
COPY deno.json .
COPY deno.lock .

RUN deno compile \
  --include ./src/style.css \
  --allow-net \
  --allow-env \
  --output webring \
  ./src/main.tsx

FROM gcr.io/distroless/cc-debian13

COPY --from=build /app/webring /webring

EXPOSE 4869
ENTRYPOINT ["/webring"]
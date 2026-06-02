import { Elysia } from "elysia";
import { sample } from "@std/random";
import { members } from "./members.ts";
import { Home } from "./home.tsx";
import { renderToString } from "preact-render-to-string";
import { NotFound } from "./not-found.tsx";
import { serveFile } from "@std/http/file-server";

const ring = new Map(
  members.map((d, i) => [
    d,
    {
      prev: members[(i - 1 + members.length) % members.length],
      next: members[(i + 1) % members.length],
    },
  ]),
);

const random = (exclude: string) =>
  sample(members.filter((d) => d !== exclude))!;

const notFound = (domain: string) =>
  new Response(
    `<!DOCTYPE html>${renderToString(<NotFound domain={domain} />)}`,
    {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    },
  );

const client = new Elysia()
  .get("/style.css", ({ request }) => serveFile(request, "style.css"))
  .get("/", () => {
    return new Response(`<!DOCTYPE html>${renderToString(<Home />)}`, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  });

const app = new Elysia()
  .use(client)
  .get("/prev/:domain", ({ params: { domain }, redirect, status }) => {
    const entry = ring.get(domain);

    if (!entry) {
      return status(404, notFound(domain));
    }

    return redirect(`https://${entry.prev}`, 302);
  })
  .get("/next/:domain", ({ params: { domain }, redirect, status }) => {
    const entry = ring.get(domain);

    if (!entry) {
      return status(404, notFound(domain));
    }

    return redirect(`https://${entry.next}`, 302);
  })
  .get("/random/:domain", ({ params: { domain }, redirect, status }) => {
    if (!ring.has(domain)) {
      return status(404, notFound(domain));
    }

    return redirect(`https://${random(domain)}`, 302);
  });

Deno.serve({ port: 4869 }, app.fetch);

import { cspHeadersHandlerWithNonce } from "$/helpers/request.ts";
import docLayout from "$/views/doc-layout.ts";
import homePage from "$/views/home-page.ts";
import { compress, serveStatic } from "hono/middleware.ts";
import { ContextVariableMap, Hono } from "hono/mod.ts";

const app = new Hono();

app.use(compress());
app.use("/public/*", serveStatic({ root: "./" }));

app.use("/", cspHeadersHandlerWithNonce);
app.get("/", (context) => {
  let vm = {
    name: "Developer",
  };

  let view = homePage(vm);
  let html = docLayout({
    view,
    nonce: context.get("nonce" as keyof ContextVariableMap),
  });

  return context.html(html);
});

Deno.serve(app.fetch);

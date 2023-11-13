import { cspHeadersHandlerWithNonce } from "$/helpers/request.ts";
import { pageLayout } from "$/helpers/view.ts";
import homePage from "$/views/home-page.ts";
import notFound from "$/views/not-found.ts";
import serverError from "$/views/server-error.ts";
import { compress, serveStatic } from "hono/middleware.ts";
import { Hono } from "hono/mod.ts";

const app = new Hono();

app.use(compress());
app.use("/public/*", serveStatic({ root: "./" }));
app.use("*", cspHeadersHandlerWithNonce);

app.get("/", (context) => {
  let vm = {
    name: "Developer",
  };

  let view = homePage(vm);

  return context.html(pageLayout(context, view));
});

app.notFound((context) => {
  let view = notFound();
  return context.html(pageLayout(context, view));
});

app.onError((error, context) => {
  console.error(error);
  let view = serverError();
  return context.html(pageLayout(context, view));
});

Deno.serve(app.fetch);

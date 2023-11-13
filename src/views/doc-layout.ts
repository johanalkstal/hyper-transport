import { html } from "hono/html";
import { HtmlEscapedString } from "hono/utils/html.ts";

export default (
  { nonce, view }: {
    nonce: string;
    view: HtmlEscapedString | Promise<HtmlEscapedString>;
  },
) => {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hypermedia App</title>
        <link rel="stylesheet" href="/public/styles.css" />
        <script src="/public/htmx-1.9.8.min.js" nonce="${nonce}"></script>
        <script src="/public/alpinejs-3.13.2.min.js" nonce="${nonce}" defer></script>
        <script src="/public/scripts.js" nonce="${nonce}" defer></script>
      </head>

      <body hx-boost="true">
        ${view}
      </body>
    </html>
  `;
};

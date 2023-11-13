import { html } from "hono/html";

export default ({ name }: { name: string }) => {
  return html`
      <h1 class="text-lg text-blue-600">Hypermedia App Starter</h1>

      <p>Hello ${name}!</p>
    `;
};

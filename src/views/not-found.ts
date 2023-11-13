import { html } from "hono/html";

export default () => {
  return html`
		<h1>Sorry, we couldn't find that page.</h1>
		<p>Try going back to the <a href="/">home page</a>.</p>
	`;
};

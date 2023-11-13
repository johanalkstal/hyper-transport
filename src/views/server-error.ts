import { html } from "hono/html";

export default () => {
  return html`
		<h1>Sorry, something went wrong with the request.</h1>
		<p>Try going back to the <a href="/">home page</a>.</p>
	`;
};

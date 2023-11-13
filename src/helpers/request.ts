import { secureHeaders } from "hono/middleware.ts";
import { Context, Next } from "hono/mod.ts";

export { cspHeadersHandlerWithNonce };

/**
 * Creates a MiddlewareHandler that sets a nonce
 * to the hono context and adds it to the CSP header.
 * The nonce can be later retrieved from the context
 * to be added to script tags in the same request.
 */
let cspHeadersHandlerWithNonce = (context: Context, next: Next) => {
  let nonce = crypto.getRandomValues(new Uint8Array(16)).join("");

  context.set("nonce", nonce);

  let handler = secureHeaders({
    contentSecurityPolicy: {
      baseUri: ["'none'"],
      objectSrc: ["'none'"],
      scriptSrc: [`'nonce-${nonce}'`, "'strict-dynamic'"],
    },
  });

  return handler(context, next);
};

import docLayout from "$/views/doc-layout.ts";
import { Context, ContextVariableMap } from "hono/mod.ts";
import { HtmlEscapedString } from "hono/utils/html.ts";

export { pageLayout };

/**
 * Wraps the view in the document layout and handles
 * setting the nonce for the script tags.
 */
let pageLayout = (
  context: Context,
  view: HtmlEscapedString | Promise<HtmlEscapedString>,
) =>
  docLayout({
    view,
    nonce: context.get("nonce" as keyof ContextVariableMap),
  });

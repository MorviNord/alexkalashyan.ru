import { d as define } from "../server-entry.mjs";
const handler = define.handlers({ GET(ctx) {
  const name = ctx.params.name;
  return new Response(`Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!`);
} });
export {
  handler
};

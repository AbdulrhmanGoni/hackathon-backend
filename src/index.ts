import app from "./app";

const port = 4444

Bun.serve({
  routes: {
    "/api/health-check": new Response("OK"),
  },
  port,
  fetch: app.fetch
});

console.log(`The server is running on http://localhost:${port}`)
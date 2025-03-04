const port = 4444

Bun.serve({
  routes: {
    "/api/health-check": new Response("OK"),
  },
  port,
});

console.log(`The server is running on http://localhost:${port}`)
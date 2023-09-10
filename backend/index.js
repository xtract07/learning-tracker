const figlet = require("figlet");

const server = Bun.serve({
  fetch() {
    const body = figlet.textSync("Bun is awesome!");
    return new Response(body);
  },
  port: 5000,
});

console.log("listening to port 3000");

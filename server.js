const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

const auth = require("json-server-auth");

server.use(middlewares);
server.use(router);
server.use(auth);

server.listen(port);

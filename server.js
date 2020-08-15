const express = require("express");
const parser = require("body-parser");
const app = express();
const cors = require("cors");
const api = require("./routes");

require("dotenv").config();

const SERVER_ADDRESS = process.env.SERVER_ADDRESS;

app.use(parser.json());
app.use(
  parser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/api", api);

const server = require("http").createServer(app);
server.listen(SERVER_ADDRESS, () => {
  console.log("server is listening on port 4000");
});

module.exports = server;

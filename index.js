const express = require("express");
const history = require("connect-history-api-fallback");
const app = express(),
  bodyParser = require("body-parser"),
  port = 8080;

const vueAppPath = "/Vue/dist";

app.use(history());
app.use(bodyParser.json());
app.use(express.static(process.cwd() + vueAppPath));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + `${vueAppPath}/index.html`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

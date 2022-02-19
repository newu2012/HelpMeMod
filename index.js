const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const configureRouter = require("/routes/router");

const app = express();
const port = 8080;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());

const vueAppPath = "/Vue/dist";
app.use(express.static(process.cwd() + vueAppPath));

//  TODO move routing to /routes/router.js
const homeRouter = require("./routes/home");
const templatesRouter = require("./routes/templates");

app.use("/", homeRouter);
app.use("/template", templatesRouter);
// Check todo above

const Template = require("./models/template");
Template.createZip().then(console.log("Mod template zip created"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
module.exports = app;

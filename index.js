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
//  TODO Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
app.use("/template", templatesRouter);

// Check todo above

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
module.exports = app;

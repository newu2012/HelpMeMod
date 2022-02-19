// const express = require("express");
// const router = express.Router();
function configureRouter(app) {
  const homeRouter = require("./routes/home");
  const templatesRouter = require("./routes/templates");

  app.use("/", homeRouter);
  //  TODO Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
  app.use("/template", templatesRouter);
}

module.exports(configureRouter);

import * as express from "express";
import * as logger from "morgan";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";

import { Template } from "./models/template";
import { configureRouter } from "./routes/router";

export const app = express.default();
const port = 8080;

app.use(cors.default());
app.use(logger.default("dev"));
app.use(express.json());
app.use(cookieParser.default());
app.enable("trust proxy");

const vueAppPath = "/Vue/dist";
app.use(express.static(process.cwd() + vueAppPath));
app.use(function (req, res, next) {
  if (!req.secure) {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});

configureRouter(app);
Template.createZip().then(() => {
  console.log("Mod template zip created");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

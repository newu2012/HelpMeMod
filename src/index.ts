import * as express from "express";
import * as logger from "morgan";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";

import { app as fireApp } from "./fire";
import { Template } from "./models/template";
import { configureRouter } from "./routes/router";
import { buildPath } from "./configs/buildConfig";

export const app = express.default();
const port = 8080;

app.use(cors.default());
app.use(logger.default("dev"));
app.use(express.json());
app.use(cookieParser.default());
app.enable("trust proxy");

app.use(express.static(process.cwd() + buildPath));
configureRouter(app);
Template.createZip().then((value) => {
  console.log(`Mod template zip created at ${value}`);
});

//  TODO Connect firebase auth, realtime db, storage
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

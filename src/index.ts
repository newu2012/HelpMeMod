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

configureRouter(app);
Template.createZip().then(() => {
  console.log("Mod template zip created");
});
//  TODO Find how to move all build files in /dist like in /Vue

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

import * as express from "express";
import { buildPath } from "../configs/buildConfig";

export const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(process.cwd() + `${buildPath}/index.html`);
});

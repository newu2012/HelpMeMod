import * as express from "express";
export const router = express.Router();
const vueAppPath = "/Vue/dist";

router.get("/", (req, res, next) => {
  res.sendFile(process.cwd() + `${vueAppPath}/index.html`);
});

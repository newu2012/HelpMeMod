const express = require("express");
const router = express.Router();
const vueAppPath = "/Vue/dist";

router.get("/", (req, res, next) => {
  console.log("asf");
  res.sendFile(process.cwd() + `${vueAppPath}/index.html`);
});

module.exports = router;

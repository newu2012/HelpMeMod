const Template = require("../models/template");
const path = require("path");

const getTemplate = async (req, res, next) => {
  try {
    const templateZip = null; // TODO await get mod_template.zip from Template function
    if (templateZip == null) {
      //  TODO Fix 
      res.sendFile(path.join(__dirname, "../mod_template/About/About.xml"));
      return;
      res.status(404).send("Can't find ready template");
    } else {
      res.send(templateZip);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getTemplate,
};

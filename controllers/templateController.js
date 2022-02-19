const Template = require("../models/template");

const getTemplate = async (req, res, next) => {
  try {
    console.log("HELP");
    const templateZip = null; // TODO await get mod_template.zip from Template function
    if (templateZip == null) {
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

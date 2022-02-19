const Template = require("../models/template");
const path = require("path");

const getTemplate = async (req, res, next) => {
  try {
    const templateZipPath = Template.zipTo;
    if (templateZipPath == null) {
      res.status(404).send("Can't find ready template");
    } else {
      res.sendFile(templateZipPath);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getTemplate,
};

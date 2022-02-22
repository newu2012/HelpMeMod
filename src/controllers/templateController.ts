import fs from "fs";
import { Template } from "../models/template";

export const getTemplate = async (req, res, next) => {
  try {
    const templateZipPath = Template.zipTo;
    if (templateZipPath == null || !fs.existsSync(templateZipPath)) {
      res.status(404).send("Can't find ready template");
    } else {
      res.sendFile(templateZipPath);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const zip = require("zip-a-folder");
const path = require("path");

class Template {
  static zipFrom = path.join(__dirname, "../mod_template/Template");
  static zipTo = path.join(__dirname, "../mod_template/mod_template.zip");
  constructor(name) {
    this.name = name;
  }

  static async createZip() {
    await zip.zip(this.zipFrom, this.zipTo);
    return this.zipFrom;
  }
}

module.exports = Template;

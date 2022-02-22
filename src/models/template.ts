import { zip } from "zip-a-folder";
import path from "path";

const __dirname = path.resolve();

export class Template {
  static zipFrom = path.join(__dirname, "./src/mod_template/Template");
  static zipTo = path.join(__dirname, "./build/mod_template.zip");

  static async createZip() {
    try {
      await zip(this.zipFrom, this.zipTo);
      return this.zipFrom;
    } catch (error) {
      console.log(error);
    }
  }
}

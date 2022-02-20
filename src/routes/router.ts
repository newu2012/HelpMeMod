import { router as homeRouter } from "./home";
import { router as templatesRouter } from "./templates";

export function configureRouter(app) {
  app.use("/", homeRouter);
  app.use("/template", templatesRouter);
}

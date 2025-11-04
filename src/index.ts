import "dotenv/config";
import express from "express";
import nunjucks from "nunjucks";
import { indexHandler } from "./handler/handlers";

const app = express();

const port = process.env.PORT || 3030;

nunjucks.configure("src/templates", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

app.get("/", indexHandler);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

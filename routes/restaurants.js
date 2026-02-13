import express from "express";
import * as path from "path";

const restaurantsRouter = express.Router();
const __dirname = path.resolve();

restaurantsRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/page"), {
    title: "Eat & Drink",
    active: "restaurants"
  })
})

export default restaurantsRouter
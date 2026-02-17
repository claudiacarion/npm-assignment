import express from "express";
import * as path from "path";
import { restaurantsArray } from "../data/data.js";

const restaurantsRouter = express.Router();
const __dirname = path.resolve();

restaurantsRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/page"), {
    type: "subpage",
    title: "Eat & Drink",
    array: restaurantsArray,
    active: "restaurants",
  });
});

export default restaurantsRouter;

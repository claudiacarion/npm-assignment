import express from "express";
import * as path from "path";
import { restaurants } from "../data/data.js";

const restaurantsRouter = express.Router();
const __dirname = path.resolve();

restaurantsRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/page"), {
    type: "subpage",
    subpage: "activities",
    data: restaurants,
    title: restaurants.title,
  });
});

export default restaurantsRouter;

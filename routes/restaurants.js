import express from "express";
import * as path from "path";
import { restaurants } from '../data/data.js';
import { slugify } from '../utils/slugify.js';

const restaurantsRouter = express.Router();
const __dirname = path.resolve();

const restaurantsSlugs = {
  ...restaurants,
  items: restaurants.items.map(item => ({
    ...item,
    slug: slugify(item.name)
  }))
}

restaurantsRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/page"), {
    type: "page",
    page: "restaurants",
    data: restaurantsSlugs,
    title: restaurants.title,
  })
})

restaurantsRouter.get("/:slug", (req, res) => {
  const { slug } = req.params;

  const item = restaurants.items.find(item => slugify(item.name) === slug);

  if (!item) {
    return res.status(404).send("Page not found");
  }

  res.render(path.join(__dirname, "views/pages/page"), {
    type: "subpage",
    page: "restaurants",
    data: restaurantsSlugs,
    title: item.name, 
  })
})

export default restaurantsRouter
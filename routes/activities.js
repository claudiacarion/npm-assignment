import express from "express";
import * as path from "path";
import { activities } from '../data/data.js';
import { slugify } from '../utils/slugify.js';

const activitiesRouter = express.Router();
const __dirname = path.resolve();

const activitiesSlugs = {
  ...activities,
  items: activities.items.map(item => ({
    ...item,
    slug: slugify(item.name)
  }))
}

activitiesRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/page"), {
    type: "page",
    page: "activities",
    data: activitiesSlugs,
    title: activities.title,
  })
})

activitiesRouter.get("/:slug", (req, res) => {
  const { slug } = req.params;

  const item = activities.items.find(item => slugify(item.name) === slug);

  if (!item) {
    return res.status(404).send("Page not found");
  }

  res.render(path.join(__dirname, "views/pages/page"), {
    type: "subpage",
    page: "activities",
    data: activitiesSlugs,
    title: item.name, 
    selected: [item],
  })
})

export default activitiesRouter
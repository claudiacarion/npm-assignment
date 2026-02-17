import express from "express";
import * as path from "path";
import { activitiesArray } from '../data/data';

const activitiesRouter = express.Router();
const __dirname = path.resolve();

activitiesRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/page"), {
    type: "subpage",
    title: "Explore",
    array: activitiesArray,
    active: "activities"
  })
})

export default activitiesRouter
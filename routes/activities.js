import express from "express";
import * as path from "path";
import { activities } from '../data/data.js';

const activitiesRouter = express.Router();
const __dirname = path.resolve();

activitiesRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/page"), {
    type: "subpage",
    data: activities,
    title: activities.title,
    active: "activities"
  })
})

export default activitiesRouter
import express from "express";
import * as path from "path";
<<<<<<< HEAD
import { activitiesArray } from '../data/data.js';
=======
import { activities } from '../data/data.js';
>>>>>>> feature/data

const activitiesRouter = express.Router();
const __dirname = path.resolve();

activitiesRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/page"), {
    type: "subpage",
<<<<<<< HEAD
    title: "Explore",
    array: activitiesArray,
=======
    data: activities,
    title: activities.title,
>>>>>>> feature/data
    active: "activities"
  })
})

export default activitiesRouter
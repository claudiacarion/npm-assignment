import express from "express";
import * as path from "path";

const activitiesRouter = express.Router();
const __dirname = path.resolve();

activitiesRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/page"), {
    title: "Things To Do",
    active: "activities"
  })
})

export default activitiesRouter
import express from "express";
import * as path from "path";

const activitiesRouter = express.Router();
const __dirname = path.resolve();

activitiesRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/page"), {
    title: "Explore",
    active: "activities"
  })
})

export default activitiesRouter
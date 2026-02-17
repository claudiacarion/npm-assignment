import express from 'express';
import * as path from 'path';
import 'dotenv/config';
import restaurantsRouter from './routes/restaurants.js';
import activitiesRouter from './routes/activities.js';

const app = express();
const port = process.env.PORT;
const __dirname = path.resolve();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/page.ejs"), {
    title: "Welcome to Macau!",
    page: "home"
  })
});

app.use("/activities", activitiesRouter);
app.use("/restaurants", restaurantsRouter);

app.use((req, res) => {
  res.status(404).send(`
    <h1>Page Not Found!</h1>
    <a href="/">Back to Homepage</a>
  `)
})

app.listen(port, () => console.log(`Listening on Port ${port}`))

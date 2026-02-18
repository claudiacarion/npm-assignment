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
    type: "page",
    title: "Welcome to Macau!",
    description: "Welcome to Macau, where East meets West in a city full of color, culture, and excitement. From iconic landmarks and seaside villages to thrilling adventures and world-class dining, Macau offers unforgettable experiences at every turn. Whether you’re seeking relaxation, discovery, or heart-pounding fun, your journey starts here—let us guide you to the very best this vibrant destination has to offer.",
    page: "home",
    background: "/images/background.jpg"
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

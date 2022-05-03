import express from "express";
import movieModel from "../models/movie.js";

const app = express();

// get all movies
app.get("/movies", async (req, res) => {
  const movies = await movieModel.find({});
  try {
    res.send(movies);
  } catch (error) {
    res.status(500).send(error);
  }
});

// post new movies
app.post("/addMovie", async (req, res) => {
  const movie = new movieModel(req.body);
  try {
    await movie.save();
    res.send("Movie Added Successfully");
  } catch (error) {
    res.status(500).send(error);
  }
});

export default app;

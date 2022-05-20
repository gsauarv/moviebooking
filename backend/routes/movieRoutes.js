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

// delete a movie

app.delete("/deleteMovie/:id", async (req, res) => {
  try {
    const movie = await movieModel.findByIdAndDelete(req.params.id);
    if (!movie) res.status(404).send("No Record Found");
    res.status(200).send("Movie Deleted Successfully");
  } catch (error) {
    res.status(500).send(error);
  }
});

export default app;

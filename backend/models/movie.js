import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  movieTitle: {
    type: String,
    required: true,
    trim: true,
  },
  movieDescription: {
    type: String,
    required: true,
    trim: true,
  },
  moviePoster: {
    type: String,
    required: true,
    trim: true,
  },
  actors: {
    type: Array,
    required: true,
    trim: true,
  },
  releaseDate: {
    type: Number,
    required: true,
    trim: true,
  },
  ticketPrice: {
    type: Number,
    required: true,
    trim: true,
  },
});

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;

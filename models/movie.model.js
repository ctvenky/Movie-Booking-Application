const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  movieid: Number,
  title: String,
  published: Boolean,
  released: Boolean,
  poster_url: String,
  release_date: Date,
  publish_date: Date,
  artists: [
    {
      artistid: Number,
      first_name: String,
      last_name: String,
      wiki_url: String,
      profile_url: String,
      movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
    },
  ],
  genres: [String],
  duration: Number,
  critic_rating: Number,
  trailer_url: String,
  wiki_url: String,
  story_line: String,
  shows: [
    {
      id: Number,
      theatre: { name: String, city: String },
      language: String,
      show_timing: Date,
      available_seats: Number,
      unit_price: Number,
    },
  ],
});

module.exports = mongoose.model("Movie", MovieSchema);

const Movie = require('../models/movie.model');

exports.findAllMovies = (req, res) => {
  const status = req.query.status;
  const query = status ? { status } : {};
  
  Movie.find(query)
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'An error occurred while retrieving movies.',
      });
    });
};
exports.findOne = (req, res) => {
    const movieId = req.params.movieId;
    
    Movie.findById(movieId)
      .then((movie) => {
        if (!movie) {
          return res.status(404).send({ message: 'Movie not found with id ' + movieId });
        }
        res.json(movie);
      })
      .catch((err) => {
        return res.status(500).send({ message: 'Error retrieving movie with id ' + movieId });
      });
  };
  exports.findShows = (req, res) => {
    const movieId = req.params.movieId;
  };
    
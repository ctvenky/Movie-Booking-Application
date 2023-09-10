const Genre = require('../models/genre.model');

exports.findAllGenres = (req, res) => {
  Genre.find()
    .then((genres) => {
      res.json(genres);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'An error occurred while retrieving genres.',
      });
    });
};

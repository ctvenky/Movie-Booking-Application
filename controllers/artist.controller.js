const Artist = require('../models/artist.model');

exports.findAllArtists = (req, res) => {
  Artist.find()
    .then((artists) => {
      res.json(artists);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'An error occurred while retrieving artists.',
      });
    });
};

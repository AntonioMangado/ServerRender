const router = require('express').Router()
const filmsController = require('../controllers/films.controllers')

router.get("/:title?", filmsController.getFilm);

module.exports = router;
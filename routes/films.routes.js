const router = require('express').Router()
const filmsController = require('../controllers/films.controllers')


router.get("/film/:title", filmsController.getFilm);
router.post("/film", filmsController.postFilm)

module.exports = router;
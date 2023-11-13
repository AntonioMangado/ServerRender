const fetchFilms = require('../utils/fetchFilms');

// READ
const getFilm = async (req, res) => {
    try {
        const title = req.params.title;
        let movie = await fetchFilms.getFilm(title); //{}
        console.log(movie);
        // res.status(200).json(movie); // Respuesta de la API para 1 producto
        res.render('film', {movie});
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

// POST 
const postFilm = (req, res) => {
    const title = req.body.title;
    res.redirect(`/film/${title}`) 
}

module.exports = {
    getFilm,
    postFilm
}
const getFilm = async (title) => {
    let response = await fetch(`http://www.omdbapi.com/?apikey=f7eee519&t=${title}`); //{}
    let movie = await response.json();
    
    return movie
};

module.exports = {
    getFilm
}

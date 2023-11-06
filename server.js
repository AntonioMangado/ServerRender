const express = require('express')
  const app = express()
  const port = 3000

  const filmsRoutes = require("./routes/films_routes")
  app.use(express.json()); // Habilito recepción de JSON en servidor

  // Pug
  app.set('view engine', 'pug');
  app.set('views','./views');

  // Access to public folder
  app.use(express.static('public'));
  app.use('/film',filmsRoutes);

  app.get('/', function(req, res){
    res.render('home');
  });
  app.get('/film', function(req, res){
    res.render('film');
  });

  app.get("*",(req,res)=>{
    res.status(404).send("Gatito triste - 404 not found");
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
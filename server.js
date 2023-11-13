const express = require('express')
  const app = express()
  const port = 3000

  const filmsRoutes = require("./routes/films.routes")
  const homeRoutes = require("./routes/home.routes")
  app.use(express.json()); // Habilito recepción de JSON en servidor
  app.use(express.urlencoded({ extended: true })); // Body parser para HTML POST

  // Pug
  app.set('view engine', 'pug');
  app.set('views','./views');

  // Access to public folder
  app.use(express.static('public'));

  // Routes
  app.use('/',filmsRoutes);
  app.use("/", homeRoutes);

  app.get("*",(req,res)=>{
    res.status(404).send("Gatito triste - 404aaaa not found");
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
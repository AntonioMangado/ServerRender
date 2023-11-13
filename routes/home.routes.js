const router = require('express').Router()
const homeControllers = require('../controllers/home.controllers')

router.get("/", homeControllers.goHome);

module.exports = router;
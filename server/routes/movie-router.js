const express = require('express')
const MovieCtrl = require('../controllers/movie-ctrl')//Señorita ingeniera
const router = express.Router()

//DEfiniendo rutas
router.post('/movie', MovieCtrl.createMovie)
router.put('/movie/:id',MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movie/', MovieCtrl.getMovies)

module.exports = router



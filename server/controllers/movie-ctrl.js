const Movie = require('../models/movie-model')

createMovie =(req, res) =>{
    // Validando que el bodu del request no vaya vacio
    const body = req.body
    if (!body){
      return res.status(400).json({
              success: false,
              error: 'you must provide a movie'
      })
}

const movie = new Movie(body)

        if(!movie){
        return res.status(400).json({ succes: false,
        error: err
            })
        }

        movie
        .save()
        .then( () =>{

            return res.status(201).json({
                succes: true,
                id: movie._id,
                message: 'Movie Created!' 

    })
})

.catch( error =>{
    return res.status(400).json({
         succes: false,
         error: 'Movie created'
    

    })
})

updateMovie = async (req, res) => {
        const body = req.body
        if(!body){
        return res.status(400).json({

            succes: false,
            error: 'You must provide a body update'
        })

    }
}    

Movie.findOne({ _id: req.params.id}, (err, movie) =>{

    if(err){
        return res.status(400).json({
        err,
        message: 'Movie not found'
        })
    }
        movie.name = body.name
        movie.time = body.time
        movie.rating = body.rating
        .save()
        .then( () =>{
        return res.status(400).json({
    success: true,
    id: movie._id,
    message: 'movie updated'
        })
    })

  .catch(error => {

    return res.status(400).json({
           error,
           message: 'Movie not updated'
         
    })
  })
})

deleteMovie = async (req, res) =>{
    await Movie.findOneAndDelete({ _id: req.params.id}, (err, movie) =>{

            if(err){

                return res.status(400).json({
                   success: false,
                   error: err
                })
            }

            if(!movie){
                return res.status(400).json({
                    success: false, 
                    error: 'Movie not found'
                })
            }
        })
   
          return res.status(200).json({
              success: true,
              error: err
          })
          .catch(err => console.log(err))

    }

getMovieById = async ( req,res) => {
        await Movie.findOneAndDelete({_id: req.params.id},(err, movie) =>{

            if(err) // Verificar llaves
            return res.status(400).json({ sucess: false, error: err})

            if(!movie){
                return res
                .status(400)
                .json({ sucess: false, eror:'Movies not Found!'})
                }
                return res.status(200).json({ sucess: true, data: movie})
        }).catch(err=> console.log(err))

    }
    
getMovies = async (req, res) =>{
        await Movies.find({}, (err, movies) =>{
            if(err)
            return res.status(400).json({ sucess: falso, err})

            if (!movie.length){

            return res
            .json({ sucess: false, error:'Movie not Found '})
             }

             return res.status(200).json({ succes: true, data: movies})

        }) .catch(err => console.log(err))
    }
} 

 module.exports = {
     createMovie,
     updateMovie,
     deleteMovie,
     getMovies,
     getMovieById
 }
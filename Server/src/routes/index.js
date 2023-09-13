const {postFav,deleteFav} = require('../controllers/handleFavorites')
const handleLogin = require ('../controllers/login') 
const {getCharById} = require('../controllers/getCharById')
const {Router} = require('express')
const route = Router()

 route.get('/character/:id',getCharById)
 route.get('/login',handleLogin)
 route.post('/fav',postFav)
 
 route.delete('/fav/:id',deleteFav)

 module.exports = route
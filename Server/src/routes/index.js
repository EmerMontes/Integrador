const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')
const login = require ('../controllers/login') 
const postUser = require ('../controllers/postUser') 

const {getCharById} = require('../controllers/getCharById')
const {Router} = require('express')
const route = Router()

 route.get('/character/:id',getCharById)
 route.get('/login',login)
 route.post('/login',postUser)
 route.post('/fav',postFav)
 route.delete('/fav/:id',deleteFav)

 module.exports = route
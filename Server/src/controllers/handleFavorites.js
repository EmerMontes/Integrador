let myFavorites = [];

const postFav = (req,res)=>{
  const character = req.body
   myFavorites.push(character)
   res.status(200).json(myFavorites)
}

const deleteFav = (req,res)=>{
   const {id} = req.params;
   console.log(typeof(id))
   myFavorites = myFavorites.filter((fav) => fav.id !== id) //el + delante lo convierte en numero
   res.status(200).json(myFavorites) 
}

module.exports = {
    postFav,
    deleteFav
}
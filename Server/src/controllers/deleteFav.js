const {Favorite} = require('../DB_connection')

const deleteFav = async (req,res)=>{
  try {
     const {id} = req.params
     await Favorite.destroy({where: {id}})
     const allFav = await Favorite.findAll()
     return res.status(200).json(allFav)
    } catch (error) {
      return res.status.send(error.message)
    }
}

module.exports = deleteFav;
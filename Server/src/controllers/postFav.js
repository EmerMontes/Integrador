const {Favorite} = require('../DB_connection')

const postFav = async(req,res)=>{
    try {
        const {id, name,status,image,species,gender}= req.body;
        const origin = req.body.origin.name;

        if ( !id ||!name || !origin || !status || !image || !species || !gender) {
        return res.status(401).send('Lack of data')
        }
        await Favorite.findOrCreate({where: {id, name,origin,status,image,species,gender}})
        const allFav = await Favorite.findAll();
        return res.status(200).json(allFav);
    } catch (error) {
        return res.status(500).send(error.message)
    }
    
}


module.exports = postFav;
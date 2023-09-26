const {User}= require('../DB_connection');

const postUser = async( req,res) =>{
 const {email, password} = req.body;
 if (!email || !password) {
    return res.status(400).send('Empty Field')
 }
}
const {User}= require('../DB_connection');

const login = async(req,res)=>{
    try {
     const {email,password} = req.query
     if (!email || !password) {
        return res.status(400).send('Empty Field')
     }   

     const user = await User.findOne({where: {email}})
     if (!user) {
        return res.status(404).send('User not found')
     }
      return user.password === password 
      ? res.json({ access: true})
      : res.status(403).send('Password invalid');  
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = login;
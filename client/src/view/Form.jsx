import { useState } from "react";
import validar from "../helpers/validar";
import '../styles/form.css'

const Form =({login})=>{

  const [userData, setUserData] = useState({
    userName:"",
    password:""

  })

  const handleChange=(event)=>{
     
     const { name, value } = event.target;
      setUserData({
       ...userData,
       [name]:value
     })
     setErrors(validar({
      ...userData,
      [name]:value
    }))
    }
  
  const [errors,setErrors]=useState({})
  
  const handleSubmit =(event)=>{
    event.preventDefault()
    if (userData.userName.length===0 ||userData.password.length===0) {
      alert('Empty field')
    }
    login(userData)
  }

    return (
    <div className="login-container">
        <form onSubmit={handleSubmit} >
            <div>
            <label htmlFor="userName">UserName</label>
             <br />
            <input name="userName" onChange={handleChange} value={userData.userName} type="text" placeholder="Write your Email..." />
            <br />
            <span>{errors.email}</span>
            </div>
            <div>
            <label htmlFor="password">Password</label>          
            <br />
            <input name='password' onChange={handleChange} value={userData.password} type="password" placeholder="Write your password..." />
            <br />
            <span>{errors.password}</span>
            </div>
            <button>Submit</button>
        </form>
    </div>
)

}

export default Form;
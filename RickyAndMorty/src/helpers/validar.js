const validar =(input)=>{
  
  let errors = {};
  let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  let numbersRegex = /\d/;

 
  if (!emailRegex.test(input.userName)) {
    errors.email = "Invalid email";
  }
  if (input.userName.length >= 35) {
    errors.email = "No more than 35 characters please";
  }
  // if (!input.userName) {
  //   errors.email = "Enter your email";
    
  // }
  
  if (!numbersRegex.test(input.password)) {
    errors.password = "Password must contain a number";
  }
 
  if (input.password.length < 6 || input.password.length > 10) {
    errors.password = "Passwors must be between 6 and 10 characters";
  }
  if(input.password.length === 0 && input.userName.length === 0  ){
    errors={}
  }
  

  return errors;
}
export default validar;
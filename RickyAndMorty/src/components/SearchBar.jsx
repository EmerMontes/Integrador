import { useState } from "react"; 

export default function SearchBar(props) {
   const [id,setId] = useState('')
   
   const handleChange = (event)=>{  
      {setId(event.target.value)}
   }

   return (
      <div>
         <input value={id} type='number'onChange={handleChange} 
          placeholder="ID entre 1 y 826"/>
         <button onClick={()=> (props.onSearch(id), setId(''))}>Agregar</button>
      </div>
   );
}

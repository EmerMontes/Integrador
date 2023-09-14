import { useState } from "react"; 

export default function SearchBar(props) {
   
   const [id,setId] = useState('')
   
   const handleChange = (event)=>{
      setId(event.target.value);
   }

   return (
      <div>
         <input value={id} type='number' onChange={handleChange} 
          min = '0' placeholder="ID entre 1 y 826"/>
         <button  onClick={()=> (props.onSearch(id), setId(''))} disabled={id.length === 0} >Agregar</button>
         <div>
         <button onClick={()=> (props.randomHandler(), setId(''))}>Agg Random</button>
         </div>
      </div>
   );
}

import { useState } from "react"; 
import { useLocation } from "react-router-dom";
import '../styles/nav.css'

export default function SearchBar(props) {
   
   const [id,setId] = useState('')
   
   const handleChange = (event)=>{
      setId(event.target.value);
   }
   const location = useLocation()

   return (
      <div className="body">
         {(location.pathname !== '/favorites') ? 
         <div className="onSeacrh">
         <input value={id} type='number' onChange={handleChange} 
          min = '0' placeholder="ID between 1 and 826"/>
         {id.length > 0 && (
          <button onClick={() => (props.onSearch(id), setId(''))}>Add</button>
         )}
         
         <button onClick={()=> (props.randomHandler(), setId(''))}>Agg Random</button>
        
         </div> : null }
      </div>
   );
}

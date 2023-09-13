import { useSelector,useDispatch } from "react-redux";
import Card from "../components/Card";
import { orderCards,filterCards } from "../redux/actions";
import { useState } from "react";

const Favorites =(props)=>{
    
    const dispatch = useDispatch();
    console.log(dispatch)
    const favorites = useSelector(state => state.myFavorites );
    const [aux,setAux] = useState(false);
    

    const handleOrder =(event)=>{
      console.log(event.target.value)
      dispatch(orderCards(event.target.value))
      setAux(true)
    }
    const handleFilter =(event)=>{
      dispatch(filterCards(event.target.value))
    }
   
    

    return <div>
      <select onChange={handleOrder} defaultValue=''>
        <option value='' disabled>Escoge una option</option>
        <option value="A">Ascendente</option>
        <option value="B">Descendente</option>
      </select>
      <select onChange={handleFilter} defaultValue=''>
       <option value='' disabled>Escoge una option</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
        <option value="allCharacter">All</option>
      </select>
    {favorites.map(card => {
       return(
       <Card 
       key={card.id}
       id={card.id}
       name={card.name}
       status={card.status}
       species={card.species}
       gender={card.gender}
       origin={card.origin}
       image={card.image}
       onClose={props.onClose}
       />)
         })}

 </div>;
}
export default Favorites;
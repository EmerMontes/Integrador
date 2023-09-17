import { Link , useLocation } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {addFav,removeFav} from '../redux/actions'
import { useState, useEffect } from "react";
import '../styles/card.css'

export default function Card(props) {
  const location = useLocation()
  const dispatch = useDispatch()

 const  myFavorites = useSelector(state => state.myFavorites)

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
      });
    }, [myFavorites]);
  const [isFav,setIsFav] = useState(false)

  const handleFavorite =()=>{
       if (isFav === false){
         dispatch(addFav(props))
         setIsFav(true);
      }else{
       dispatch(removeFav(props.id))
       setIsFav(false);
      }
  }
   return (
      <div className="card-container">
       <div className="card">
       <img src={props.image} alt={props.name} />
       <div className="card__content">
       <Link to={`/detail/${props.id}`}><p title="See details">{props.name}</p></Link>
       <p class="card__description">{(location.pathname !=='/favorites') && (<button onClick={()=> props.onClose(props.id)}>X</button>)}
       <button onClick={handleFavorite}>{isFav ?'❤️':'🤍'}</button></p>
       </div>
       </div>
    </div>
   );
}

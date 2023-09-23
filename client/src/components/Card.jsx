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
   
       <div className="card">
       <img src={props.image} alt={props.name} />
       <div className="card__content">
       <p className='pp'title="See details"><Link className="link" to={`/detail/${props.id}`}> See detail of: {<br/>}{props.name}</Link></p>
       
       <p className="card__description">{(location.pathname !=='/favorites') && (<button onClick={()=> props.onClose(props.id)}>X</button>)}
       <button onClick={handleFavorite}>{isFav ?'❤️':'🤍'}</button></p>
       </div>
       </div>
   
   );
}

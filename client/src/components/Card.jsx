import { Link , useLocation } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {addFav,removeFav} from '../redux/actions'
import { useState, useEffect } from "react";



export default function Card(props) {

  const location = useLocation()
  const dispatch = useDispatch()

 //   const mapDispatchToProps=()=>{
 //    dispatch(addFav())
 //    dispatch(removeFav())
 //   }
 //console.log(useSelector())

  //const mapStateToProps =()=>{

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
      <div key={props.id}>
         
         {(location.pathname !=='/favorites') && (<button onClick={()=> props.onClose(props.id)}>X</button>)}
         <button onClick={handleFavorite}>{isFav ?'❤️':'🤍'}</button>
          
       <Link to={`/detail/${props.id}`}>
         <h2>{props.name}</h2>
         <h2>{props.status} </h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin?.name}</h2>
         <img src={props.image} alt='' />
       </Link>
      </div>
   );
}

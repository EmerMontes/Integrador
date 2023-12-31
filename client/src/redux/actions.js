import {ADD_FAV,REMOVE_FAV,FILTER,ORDER, RESET_FAV } from "./action-types";
import axios from "axios";
//import { useDispatch } from "react-redux";


// export const addFav = (character)=>{
//     return {
//         type: ADD_FAV, payload: character
//     }
// }
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
       try {
         const {data} = await axios.post(endpoint,character)
         //    {
         //    id: character.id,
         //    name: character.name,
         //    origin: character.origin?.name,
         //    status: character.status,
         //    image: character.image,
         //    species: character.species,
         //    gender: character.gender,
         // })
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch (error) {
         console.log(error.message)
      } 
    };
 };
// export const removeFav = (id)=>{
//     return {
//         type: REMOVE_FAV, payload: id
//     }
// }
export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
      try {
         const {data} = await axios.delete(endpoint)
            return dispatch({
               type: REMOVE_FAV,
               payload: data,
         });     
      } catch (error) {
         console.log(error)
      }  
    };
 };

export const filterCards = (gender)=>{
    return {
        type: FILTER, payload: gender
    }
}
export const orderCards = (orden)=>{
    return {
        type: ORDER, payload: orden
    }
}
export const resetFav = ()=>{
   return {
       type: RESET_FAV
   }
}


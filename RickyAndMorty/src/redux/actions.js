import {ADD_FAV,REMOVE_FAV,FILTER,ORDER, RESET_FAV } from "./action-types";
import axios from "axios";
//import { useDispatch } from "react-redux";


// export const addFav = (character)=>{
//     return {
//         type: ADD_FAV, payload: character
//     }
// }
export const addFav = (character) => {
    //const dispatch = useDispatch()
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };
// export const removeFav = (id)=>{
//     return {
//         type: REMOVE_FAV, payload: id
//     }
// }
export const removeFav = (id) => {
    //console.log(typeof(id))
    //console.log(id)

    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
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


import {ADD_FAV,REMOVE_FAV,FILTER,ORDER} from './action-types'

const initialState = {
    myFavorites:[],
    allCharacters:[]
}

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.allCharacters,action.payload],
                allCharacters: [...state.allCharacters,action.payload]
            }
        case REMOVE_FAV:
            return{
              ...state,
              myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload)
            }
        case FILTER:
            return{
             ...state,
             myFavorites:
             action.payload === 'allCharacter' ?
             [...state.allCharacters]
             :state.allCharacters.filter(genero => genero.gender === action.payload)
            }
        case ORDER:
            return{
               ...state,
               myFavorites:
               action.payload === 'A' ?
               ([...state.allCharacters]).sort((a,b) => a.id - b.id):
               ([...state.allCharacters]).sort((a,b) => b.id - a.id)
            }
    

        default:
            return {...state};
    }
}

export default reducer;
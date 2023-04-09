import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./action-types";
import axios from "axios";

export const addFavorite = (character) =>{
    axios.post("http://localhost:3001/rickandmorty/fav", character)
    .then(res => console.log("todo ok"))
    // return function(dispatch){
        
        // }
    return {type: ADD_FAVORITE, payload: character}
}

export const removeFavorite = (id) =>{
    return {type: REMOVE_FAVORITE, payload: id}
}

export const filterCards = (gender) =>{
    return {type: FILTER, payload: gender}
}

export const orderCards = (id) => {
    return {type: ORDER, payload: id}
}
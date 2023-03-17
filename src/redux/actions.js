import { ADD_FAVORITE, REMOVE_FAVORITE } from "./action-types";

export const addFavorite = (character) =>{
    return {type: ADD_FAVORITE, payload: character}
}

export const removeFavorite = (id) =>{
    return {type: REMOVE_FAVORITE, payload: id}
}
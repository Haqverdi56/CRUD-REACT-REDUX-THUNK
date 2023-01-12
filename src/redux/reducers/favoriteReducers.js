import { ADD_FAV, DELETE_FAV } from "../actions/favoriteActions";

const favoritesReducer = (state, action) => {
    if(state == undefined) {
        return []
    }
    switch (action.type) {
        case ADD_FAV:
            return [
                ...state,
                action.payload
            ]
        case DELETE_FAV: 
            return state = []
        default:
        return state;
    }
}

export default favoritesReducer

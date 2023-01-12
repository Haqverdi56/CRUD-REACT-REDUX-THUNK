const ADD_FAV = 'ADD_FAV'
const DELETE_FAV = 'DELETE_FAV'


const addFav = (item) => {
    return {
        type: ADD_FAV,
        payload: item,
    }
}

const deleteFav = () => {
    return {
        type: DELETE_FAV,
    }
}

export {ADD_FAV, DELETE_FAV, addFav, deleteFav}

import { ADD, DELETE, add, deleteTodo, GET_DATA } from "../actions/customer.actions";
// const initialState = []

const customerReducer = (state, action) => {
    if(state == undefined) {
        return []
    }
    switch (action.type) {
        case ADD:
            return [
                ...state,
                action.payload
            ]
        case DELETE: 
            return state.filter(todos=> todos.id != action.payload)
            
        case GET_DATA: 
            return [...action.payload]

        default:
        return state;
    }
}

export default customerReducer

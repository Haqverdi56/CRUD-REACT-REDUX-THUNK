import axios from "axios"

const ADD = 'ADD'
const DELETE = 'DELETE'
const GET_DATA = "GET_DATA"

const add = (item) => {
    return async() => {
        await axios.post('https://northwind.vercel.app/api/customers', item)
    }
}

const deleteTodo = (id) => {
    return {
        type: DELETE,
        payload: id,
    }
}
const getData = () => {
    return async(dispatch) => {
        await axios.get('https://northwind.vercel.app/api/customers')
        .then(res => dispatch({type:GET_DATA, payload: res.data}))
    }
}

export {ADD,DELETE, GET_DATA, add, deleteTodo, getData}

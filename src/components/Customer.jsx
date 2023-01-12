import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, getData } from '../redux/actions/customer.actions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './customer.css'
import { addFav } from '../redux/actions/favoriteActions';


function Customer() {  
  const customers = useSelector(state => state.customer)
  const dispatch = useDispatch()
  const notify = () => toast("Delete Success!");

  useEffect(() => {
    dispatch(getData())
  }, [])

  
  const deleteCustomer = (id) => {
    dispatch(deleteTodo(id))
    notify()
  }
  const addFavorites = (el) => {
    dispatch(addFav(el))
    notify()
  }

  return (
    <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Contact Title</th>
              <th>Contact Name</th>
              <th>Company Name</th>
              <th>Favorite</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
              {
                customers && customers.map((el,i) => (
                  <tr key={i}>
                    <td>{el.id}</td>
                    <td>{el.contactTitle}</td>
                    <td>{el.contactName}</td>
                    <td>{el.companyName}</td>
                    <td><button onClick={()=> addFavorites(el)}>Add Favorite</button></td>
                    <td><button onClick={()=> deleteCustomer(el.id)}>Delete</button></td>
                  </tr>
                ))
              }
          </tbody>
        </table>
        <ToastContainer />
    </div>
  )
}

export default Customer
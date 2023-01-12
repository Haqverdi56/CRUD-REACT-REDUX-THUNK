import React, { useState } from 'react'
import "./customer.css"
import { v4 } from "uuid";
import { useDispatch } from 'react-redux';
import { add } from '../redux/actions/customer.actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddCustomer() {
  const [formData, setFormData] = useState({
    id: v4(),
    companyName:"",
    contactTitle:"",
    contactName:"",
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const submitForm = (e) => {
    e.preventDefault()
    dispatch(add(formData)); 
  }

  const notify = () => toast("Customer Add Success!");
  return (
    <div>
      <div>
        <form className='formCustomer' onSubmit={submitForm}>
          <div>
            <label htmlFor="companyName">Company Name</label>
            <input onChange={handleChange} type="text" name='companyName' />
          </div>
          <div>
            <label htmlFor="contactTitle">Company Title</label>
            <input onChange={handleChange} type="text" name='contactTitle' />
          </div>
          <div>
            <label htmlFor="contactName">Contact Name</label>
            <input onChange={handleChange} type="text" name='contactName' />
          </div>
          <div><button onClick={notify} type='submit' disabled={!formData.companyName || !formData.contactName || !formData.contactTitle ? true : false} >ADD</button></div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default AddCustomer
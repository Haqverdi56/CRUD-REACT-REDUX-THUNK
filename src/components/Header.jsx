import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <div className='navbar'>
        <Link to='customers'>Customer</Link>
        <Link to='addCustomer'>Add Customer</Link>
        <Link to='favorites'>Favorites</Link>
    </div>
  )
}

export default Header
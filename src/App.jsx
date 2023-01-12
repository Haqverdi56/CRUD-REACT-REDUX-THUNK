import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import Header from './components/Header'
import Customer from './components/Customer'
import AddCustomer from './components/AddCustomer'
import Favorites from './components/Favorites'

function App() {

  
  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route path='/' element={<Customer />} />
        <Route path='customers' element={<Customer />} />
        <Route path='addCustomer' element={<AddCustomer />} />
        <Route path='favorites' element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFav } from '../redux/actions/favoriteActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Favorites() {
    const favorites =  useSelector(state => state.favorites)
    const dispatch = useDispatch()
    const notify = () => toast("Delete Success!");

    console.log(favorites);
  return (
    <div>
        
        {favorites.length > 0 ? <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Contact Title</th>
              <th>Contact Name</th>
              <th>Company Name</th>
              <th><button onClick={()=> (
                dispatch(deleteFav()),
                notify()
              )} disabled={favorites.length < 1 ? true : false}>Delete</button></th>
            </tr>
          </thead>
          <tbody>
              {
                favorites && favorites.map((el,i) => (
                  <tr key={i}>
                    <td>{el.id}</td>
                    <td>{el.contactTitle}</td>
                    <td>{el.contactName}</td>
                    <td>{el.companyName}</td>
                  </tr>
                ))
              }
          </tbody>
        </table> : <p style={{textAlign:'center', marginTop:'10rem', fontSize: '3rem'}}>Empty</p>}
        <ToastContainer />
    </div>
  )
}

export default Favorites
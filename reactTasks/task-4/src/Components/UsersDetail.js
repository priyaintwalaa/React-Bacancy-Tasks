import React from 'react'
import { useNavigate} from "react-router-dom";


function UsersDetail({viewObj}) {
  const navigate = useNavigate();

  return (
    <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-light p-5'>
      <div>
        <label>Name:</label>
        <p>{viewObj.name}</p>
      </div>
      <div>
        <label>Email:</label>
         <p>{viewObj.email}</p> 
      </div>
      <button className='btn sm-1 btn-info' onClick={() => navigate(-1)}>Back</button>
    </div>
    </div>
  )
}

export default UsersDetail
import axios from 'axios';
import React,{ useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function UserDetails() {
    const {id} = useParams();
    const [data,setData] = useState([])
    const navigat = useNavigate()
 
    useEffect(()=>{
     axios.get('http://localhost:3030/users/'+id)
     .then(res=> setData(res.data))
     .catch(err => console.log(err))
    },[])
    console.log(data);

  return (
    <div>
      <div>
        <label>Name:</label>
        <p>{data.name}</p>
          </div>
      <div>
        <label>Email:</label>
        <p>{data.email}</p>
    
          </div>
    </div>
  )
}

export default UserDetails
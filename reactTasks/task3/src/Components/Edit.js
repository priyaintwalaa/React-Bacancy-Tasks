import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
   const {id} = useParams();
   const [data,setData] = useState([])
   const navigat = useNavigate()

   useEffect(()=>{
    axios.get('http://localhost:3030/users/'+id)
    .then(res=> setData(res.data))
    .catch(err => console.log(err))
   },[])

   function handleSubmit(event){
    event.preventDefault()
    axios.put('http://localhost:3030/users/'+id,data)
    .then(res=>{
        alert('Data Updated Succesfully')
        navigat('/user')
    })
   }

  return (
    <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-light p-5'>
    <button className='btn ms-1 btn-success' onClick={() => navigat(-1)}>Back</button>
    <form onSubmit={handleSubmit}>
    <div>
            <label htmlFor='name'>ID:</label>
            <input type="text" name="name" value={data.id} disabled className='form-control'
             />
        </div>
        <div>
            <label htmlFor='name'>Name:</label>
            <input type="text" name="name" value={data.name} className='form-control'
             onChange={e=>setData({...data,name:e.target.value})}
            />
        </div>
        <div>
        <label htmlFor='email'>Email:</label>
            <input type="email" name="email" value={data.email} className='form-control'
             onChange={e=>setData({...data,email:e.target.value})}
            />
        </div><br/>
        <button className='btn btn-info'>Submit</button>
        </form>
        
    </div>
</div>
  )
}

export default Edit
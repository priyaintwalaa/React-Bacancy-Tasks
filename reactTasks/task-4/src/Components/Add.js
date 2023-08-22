import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Validation from './Validation'

function Add({addUser,editUser,setEditable,isEditable, mapForEdit,data}) {


  const [newUser,setNewUser] = useState({name:'',email:''})

  
  // const [newUserName,setNewUserName] = useState('')
  // const [newUserEmail,setNewUserEmail] = useState('')
  // const [updatedName, setUpdatedName] = useState(editUser?.name)
  // const [updatedEmail, setUpdatedEmail] = useState(editUser?.email)
  const [updateUser,setUpdateUser] = useState({id:editUser?.id,
    name: editUser?.name, email: editUser?.email})
  // const [isEditable,setEditable] = useState(false)
  // console.log(editUser.name)

//
const [errors,setErrors] = useState({})

// console.log(newUserName)
  // console.log(updateUser,"updateuser")
  const navigat = useNavigate();

  function handleSubmit(event){
     event.preventDefault()

     
    
    if(isEditable)
    {
      setErrors(Validation(updateUser))
      console.log("update")
      // const updatedObj ={
      //     id: editUser.id,
      //     name: updatedName,
      //     email: updatedEmail
      // }
      // mapForEdit(editUser.id, updatedObj)
      mapForEdit(editUser.id,updateUser)
    }
    else
    {
      console.log("submit")
      // const newUser = {
      //   id: Math.random().toFixed(2).toString(),
      //   name:newUserName,
      //   email:newUserEmail
      // }
      setErrors(Validation(newUser))
      const updatedUser ={ id: data[data.length - 1].id+1, ...newUser}
      // addUser(newUser)
      addUser(updatedUser)
    }
    //  
    //  const editUpdateUser = {id:editUser.id , ...updateUser}
    //  setEditable(true)
    //  if(isEditable===true){
    //    addUser(editUpdateUser)
    //   }else{
      //  addUser(updatedUser)
    //  }
    //  setCount((prev) => prev+1)
     navigat('/users')
  }

  function updateEmailFun(e){
    setUpdateUser({...updateUser,email:e.target.value})
    // setUpdatedEmail(e.target.value)
  }

  function updateNameFun(e){
    setUpdateUser({...updateUser,name:e.target.value})
    // setUpdatedName(e.target.value)
  }

  function addEmail(e){
    setNewUser({...newUser,email:e.target.value})
    // setNewUserEmail(e.target.value)
  }

  function addName(e){
    setNewUser({...newUser,name:e.target.value})
    // setNewUserName(e.target.value)
  }

  return (
    <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-light p-5'>
    <button className='btn ms-1 btn-success' onClick={() => navigat(-1)}>Back</button><br/>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name:</label>
            <input type="text" name="name" className='form-control'
             onChange={ isEditable? updateNameFun:addName}  
            //  value={ isEditable? updatedName:  newUserName}
            value={isEditable?updateUser.name:newUser.name}
            // onChange={isEditable===false?addName:updateName}
            />
            {errors.name && <p style={{color:'red'}}>{errors.name}</p>}
        </div>
        <div>
        <label htmlFor='email'>Email:</label>
            <input type="email" name="email" className='form-control'
             onChange={isEditable? updateEmailFun: addEmail}  
            // value= {  isEditable? updatedEmail: newUserEmail}
            value={isEditable?updateUser.email:newUser.email}
            // onChange={isEditable===false?addEmail:updateEmail}
            />
              {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
        </div><br/>
        <button className='btn btn-info'>{isEditable? 'Update' : 'Submit'} </button>
        </form>
    </div>
</div>
  )
}

export default Add
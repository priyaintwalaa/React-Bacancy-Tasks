import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Validation from './Validation'

function Add({addUser,editUser,isEditable, mapForEdit,data}) {

  const [newUser,setNewUser] = useState({name:'',email:''})
  const [updateUser,setUpdateUser] = useState({id:editUser?.id,
    name: editUser?.name, email: editUser?.email})

   const [errors,setErrors] = useState({})

  const navigat = useNavigate();

  function handleSubmit(event){
     event.preventDefault()

    if(isEditable)
    {
      // console.log(Validation(updateUser),"Validation(updateUser)")
      let errDisplay =  Validation(updateUser)
      
      if(errDisplay.name || errDisplay.email){
        setErrors(errDisplay)
      }else{
        mapForEdit(editUser.id,updateUser)
        navigat('/users')
      }
    }
    else
    {
      console.log("submit")
      // console.log(Validation(newUser),"Validation(newUser)")
      let errDisplay = Validation(newUser)
      if(errDisplay.name || errDisplay.email){
        setErrors(errDisplay)
      }else{
        const updatedUser ={ id: data[data.length - 1].id+1, ...newUser}
        addUser(updatedUser)
        navigat('/users')
      }
    }
    //  navigat('/users')
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
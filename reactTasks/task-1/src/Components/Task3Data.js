import React,{useState} from 'react'
// import Task2Display from './Task2Display';

function Task3Data({addDataHandlerFunc}) {

    const [userDaInput, setUserDaInput] = useState('')

    const InputChangeHandler=(event)=>{
        setUserDaInput(event.target.value);
    }

    const SubmitHandlerFunc =(event)=>{
        event.preventDefault();
        addDataHandlerFunc(userDaInput);
        setUserDaInput('');
    }

  return (
    <form onSubmit={SubmitHandlerFunc}>
        <label>Username</label>
        <input type="text" value={userDaInput} onChange={InputChangeHandler}/><br/>
        <button disabled={userDaInput.trim() === ''}>Submit</button>
    </form>
  )
}

export default Task3Data
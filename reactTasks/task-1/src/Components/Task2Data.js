import React,{useState} from 'react'
// import Task2Display from './Task2Display';

function Task2Data({addDataHandler}) {

    const [userInput, setUserInput] = useState('')

    const InputChangeHandler=(event)=>{
        setUserInput(event.target.value);
    }

    const SubmitHandler =(event)=>{
        event.preventDefault();
        addDataHandler(userInput);
    }

  return (
    <form onSubmit={SubmitHandler}>
        <label>Username</label>
        <input type="text" value={userInput} onChange={InputChangeHandler}/><br/>
        <button>Submit</button>
    </form>
  )
}

export default Task2Data
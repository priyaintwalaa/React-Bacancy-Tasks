import React,{useState} from 'react'

function Task4Input({addDataHand}) {

    const [inputData, setInputData] = useState('')

    const inputChangeHandler=(event)=>{
        setInputData(event.target.value);
    }

    const SubmitHandler=(event)=>{
        event.preventDefault();
        const addData = {
            id: Math.random().toString(),
            text: inputData,
        }
        addDataHand(addData)
        setInputData("")
        
    }

  return (
     <form onSubmit={SubmitHandler}>
     <label>Full Name</label>
     <input type='text' value={inputData} onChange={inputChangeHandler}/><br/>
     <button disabled={inputData.trim() === ''}>Add Data</button>
     </form>
  )
}

export default Task4Input
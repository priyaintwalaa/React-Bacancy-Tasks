import React from 'react'

function Task4Display({submitDataInput, handleDelete}) {
  return (
    <div>
        {
            submitDataInput.map( (data) => (
                <div key={data.id}>
                <p>{data.text}    <button onClick={() => {handleDelete(data.id)}}>Delete</button>
                </p>
                </div>
            ))
        }
    </div>
  )
}

export default Task4Display
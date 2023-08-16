import React from 'react'

function Task3Display({submitData}) {
  return (
    <div>
      {submitData.map((data,i)=>(
        <p key={i}>{data}</p>
      ))}
    </div>
  )
}

export default Task3Display
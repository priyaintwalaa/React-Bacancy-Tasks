import React,{useState} from 'react'

export default function InputData() {

  const [name,setName] = useState('')

  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <h6>{name}</h6>
    </div>
  )
}


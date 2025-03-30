import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Room = () => {
    const [name,setname]=useState("")
    const navigate=useNavigate()

    const submmithandler=()=>{
        setname("")
        navigate(`/video/${name}`)
    }

  return (
   <div className="form-container">
    <h1>Leats Start with Video Call</h1>
    <input type='text' placeholder='Enter your Fullname' value={name} onChange={(e)=>{setname(e.target.value)}}/>
    <button onClick={submmithandler}>Join</button>
   </div>
  )
}

export default Room

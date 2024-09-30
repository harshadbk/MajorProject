import React, { useState } from 'react'

const three = () => {
  
    const [value,setvalue] = useState('');

  return (
    <div>
      <input value={input} type="text" placeholder='Enter Data' onChange={(e)=>{setvalue(e.target.value)}} />
      <p>User Input :{`the value is ${value}`} </p>
    </div>
  )
}

export default three

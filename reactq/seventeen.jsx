import React, { useState } from 'react'

const seventeen = () => {
    const [selectcolor,setselectcolor] = useState("#000000");
    const play = (e)=>{
       setselectcolor(e.target.value);
    }
  return (
    <div>
      <input type="color" onChange={play} style={{
        width:"100px",
        height:"100px",
        backgroundColor:selectcolor
      }} />
    </div>
  )
}

export default seventeen

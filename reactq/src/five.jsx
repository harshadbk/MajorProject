import React, { useState } from 'react'

const five = () => {

    const [istoggle,setistoggle] = useState(false);

    const handletoggle = ()=>{
        setistoggle(!istoggle);
    }

  return (
    <div>
      <label htmlFor="">
        <input type="checkbox" onChange={handletoggle} />
      </label>
      <p>{istoggle ? "on":"off"}</p>
    </div>
  )
}

export default five

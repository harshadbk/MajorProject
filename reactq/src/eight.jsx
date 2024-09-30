import React, { useState } from 'react'

const eight = () => {
 
    const [backgroundColor,setbackgroundColor]=useState('white')

    const handleclick = ()=>{
        const newcolor = backgroundColor === 'white' ? 'lightblue' : 'white';
        setbackgroundColor(newcolor);
    }

  return (
    <div onClick={handleclick} style={{
        backgroundColor,
        width:'200px',
        height:'200px',
        cursor:'pointer'
    }}>
      click me to change the color
    </div>
  )
}

export default eight

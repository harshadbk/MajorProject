import React from 'react'

const four = () => {

  const items = [12,34,56,43,57,49,35];

  return (
      <ul>
        {items.map((item,index)=>{
         return  <li key={index}>{item}</li>
        })}
      </ul>
  )
}

export default four

import React, { useEffect, useState } from 'react'

const Six = () => {

  const [data,setdata] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res=>{res.json()})
    .then((sdata)=>{setdata(sdata)})
  },[])
  return (
    <div>
      {
        data ? (
         <div>
          <h1>
            Title:{data.title}
          </h1>
          </div>
        )
        :(
         <p>
          ...Loading
         </p>
        )
      }
    </div>
  )
}

export default Six

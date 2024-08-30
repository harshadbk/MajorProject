import React, { useEffect, useState } from 'react'
import remove_icon from '../../assets/remove.jpg'
import './listproduct.css'

const listproduct = () => {

  const [allproducts,setallproducts]=useState([]);

  const fetchinfo = async ()=>{
    await fetch('http://127.0.0.1:5000/allproducts')
    .then((resp)=>resp.json())
    .then((data)=>{setallproducts(data)});
  }

  useEffect(()=>{
    fetchinfo();
  },[])

  const remove_product = async (id)=>{
    await fetch('http://127.0.0.1:5000/removeproduct',{
       method:'POST',
       headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
       },
       body:JSON.stringify({id:id})
    })
    await fetchinfo();
  }

  return (
    <div className='listproduct'>
      <h1>All Products List</h1>
      <br />
      <div className="listproduct-format-main">
        <p>product</p>
        <p>title</p>
        <p>old_price</p>
        <p>new_price</p>
        <p>category</p>
        <p>remove</p>
      </div>
      <div className="listproduct-allproduct">
        <hr />
        {allproducts.map((product,index)=>{
          return <> <div key={index} className="listproduct-format-main listproduct-format">
           <img className='listproduct-product-icon' src={product.image} alt="" />
           <p>{product.name}</p>
           <p>₹{product.old_price}</p>
           <p>₹{product.new_price}</p>
           <p>{product.category}</p>
           <img onClick={()=>{remove_product(product.id)}} className='listproduct-remove-icon' src={remove_icon} alt="" />
          </div>
          <hr />
          </>
        })}
      </div>
  </div>
  )
}

export default listproduct

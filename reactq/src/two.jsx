// import React, { useState } from 'react'
// import './demo.css'

// const two = () => {
//     const [num,setnum] = useState(0);

//     const setdec = ()=>{
//         if(num==0){
//             setnum(num=0)
//         }
//         else{
//             setnum(num-1)
//         }
//     }

//     const setinc = ()=>{
//         if(num>=10){
//           alert("The number is crossing There Boundry")
//         }
//         else{
//             setnum(num+1);
//         }
//     }

//   return (
//     <div>
//       <button className='btn1' onClick={()=>{setinc()}}><span>+</span></button>
//       <span>{num}</span>
//       <button className='btn2' onClick={()=>{setdec()}}><span>-</span></button>
//     </div>
//   )
// }

// export default two
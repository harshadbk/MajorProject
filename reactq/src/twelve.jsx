import React, { useState } from 'react'

const twelve = () => {
    const [file,setfile] = useState(null);

    const handlefilechage = (e)=>{
        const selectedfile = e.target.files[0];
        setfile(selectedfile);
    }

  return (
    <div>
    <input type="file" accept='image' onChange={handlefilechage} />
    {file && <img src={URL.createObjectURL(file)} alt='Uploaded image'></img>}
    </div>
  )
}

export default twelve

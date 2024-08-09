import React, { useState } from 'react';
import './addproduct.css';
import uploadFile from '../../assets/image_plus.jpg';

const AddProduct = () => {
  const [image, setImage] = useState(null);

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "onion",
    new_price: "",
    old_price: ""
  });

  const imageHandler = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
    }
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    console.log(productDetails);
    let product = productDetails;
    let formData = new FormData();
    formData.append('product', image);

    let responseData; 

    await fetch('http://127.0.0.1:5000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })
    .then((resp) => resp.json())
    .then((data) => {
      responseData = data; 
    });

    if (responseData && responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://127.0.0.1:5000/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
      .then((resp) => resp.json())
      .then((data) => {
        data.success ? alert("Product Added") : alert("Failed");
      });
    } else {
      console.error('Image upload failed:', responseData ? responseData.error : 'No response data');
    }
  };

  return (
    <div className='addproduct'>
      <div className="addproduct-price">
      <h1 className='heading'>Enter The Product Details</h1>
        <div className="addproduct-itemfield">
          <p>Product title</p>
          <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type Here' />
        </div>
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type Here' />
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type Here' />
        </div>
        <div className="addproduct-itemfield">
          <p>Product Category</p>
          <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
            <option value="onion">Fertilizers</option>
            <option value="tomato">Pesticides</option>
            <option value="graphes">Organic</option>
            <option value="Herbicides">Herbicides</option>
            <option value="seed">Seeds</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <p>Add Image</p>
          <label htmlFor="file-input">
            <img src={image ? URL.createObjectURL(image) : uploadFile} className='addproduct-thumbnail-img' alt="Product Thumbnail" />
          </label>
          <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
        </div>
        <button onClick={addProduct} className='addproduct-btn'>Add</button>
      </div>
    </div>
  );
}

export default AddProduct;

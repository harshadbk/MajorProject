import React, { useContext, useState } from 'react';
import './productdisplay.css';
import star_image from '../Assets/star.jpg';
import star_dull from '../Assets/stard.jpg';
import { shopContext } from '../../context/shopcontext';
import { useSpeechSynthesis } from 'react-speech-kit';

const ProductDisplay = ({ product }) => {

  const { speak , cancel } = useSpeechSynthesis();

  const [shopkeeperDetails, setShopkeeperDetails] = useState({
    show: false,
    data: null,
  });

  const handleOnClick = () => {
    const name = product.name;
    const price = product.new_price;
    const size = product.size;
    const category = product.category;
    
    const descriptionText = product.description
      ? product.description
      : "A fertilizer (American English) or fertiliser (British English) is any material of natural or synthetic origin that is applied to soil or to plant.";
      
    speak({ text: "Product Name is "+ name + "New price is "+price+"Available size is"+ size +"Its category is"+category+ "Its Overall Decription is"+descriptionText +"Thanks",lang: 'mr-IN' });
  };

  const { addToCart } = useContext(shopContext);

  if (!product) {
    return <div>Loading...</div>;
  }

  const toggleShopkeeperDetails = async () => {
    if (shopkeeperDetails.show) {
      setShopkeeperDetails(prev => ({ ...prev, show: false }));
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/shopkeeperdatas', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: product.email, id: product.id })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch shopkeeper details.');
      }

      const data = await response.json();
      setShopkeeperDetails({ show: true, data });

    } catch (error) {
      console.error("Error fetching shopkeeper details:", error);
      alert("Could not load shopkeeper details. Please try again later.");
    }
  };

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {Array(4).fill(<img src={product.image} alt={product.name} />)}
        </div>
        <div className="productdisplay-image">
          <img className='productdisplay-main-img' src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          {Array(4).fill(<img src={star_image} alt="star" />)}
          <img src={star_dull} alt="star dull" />
          <p>(122)</p> <br /> <br />
          <h1 className='productdisplay-right-category'><span>Product Id : </span>{product.id || "Latest"}</h1>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">₹{product.old_price}</div>
          <div className="productdisplay-right-price-new">₹{product.new_price}</div>
          <div className="productdisplay-right-description">
            {product.description 
              ? product.description.slice(0, 120)
              : "A fertilizer (American English) or fertiliser (British English) is any material of natural or synthetic origin that is applied to soil or to plant."
            }
          </div>
          <div className="productdisplay-right-size">
            <h1>Available Size</h1>
            <div>{product.size}</div>
          </div>
          <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
          <p className='productdisplay-right-category'><span>Category :</span> {product.category}</p>
          <p className='productdisplay-right-category'><span>Tags :</span>{product.tags || "Latest"}</p>
        </div>
        <h1 className='productdisplay-right-category'><span>Crop Name : </span>{product.crop_type ? product.crop_type: "NA" }</h1>
        <div className="productdisplay-right-shopkeeper">
          <button onClick={toggleShopkeeperDetails}>
            {shopkeeperDetails.show ? "Hide Shopkeeper Details" : "Show Shopkeeper Details"}
          </button>
          {shopkeeperDetails.show && shopkeeperDetails.data && (
            <div className="shopkeeper-details">
              <table>
                <tbody>
                  <tr>
                    <th>Shopkeeper Email</th>
                    <td>{shopkeeperDetails.data.email || "abc"}</td>
                  </tr>
                  <tr>
                    <th>Shopkeeper Address</th>
                    <td>{shopkeeperDetails.data.ownaddress || "Xyz"}</td>
                  </tr>
                  <tr>
                    <th>Shop Address</th>
                    <td>{shopkeeperDetails.data.shaddress || "Lmn"}</td>
                  </tr>
                  <tr>
                    <th>Phone No</th>
                    <td>{shopkeeperDetails.data.phoneno || 123}</td>
                  </tr>
                  <tr>
                    <th>Shop Name</th>
                    <td>{shopkeeperDetails.data.shname || "nop"}</td>
                  </tr>
                  <tr>
                    <th>Shop Type</th>
                    <td>{shopkeeperDetails.data.shtype || "Pesticides"}</td>
                  </tr>
                  <tr>
                    <th>Operating Hours</th>
                    <td>{shopkeeperDetails.data.ophours || "7am To 9pm"}</td>
                  </tr>
                  <tr>
                    <th>Payment Methods</th>
                    <td>{shopkeeperDetails.data.payment || "Cash"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div>
          <button className='buttonstyle' onClick={handleOnClick}>Listen Product Information</button>
          <br />
          <button className='buttonstyle' onClick={cancel}>Stop Playing</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

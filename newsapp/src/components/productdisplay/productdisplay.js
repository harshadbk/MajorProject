import React, { useContext } from 'react';
import './productdisplay.css';
import star_image from '../Assets/star.jpg';
import star_dull from '../Assets/stard.jpg';
import { shopContext } from '../../context/shopcontext';

const ProductDisplay = (props) => {
  const { product } = props;

  const { addToCart } = useContext(shopContext);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-image">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_image} alt="" />
          <img src={star_image} alt="" />
          <img src={star_image} alt="" />
          <img src={star_image} alt="" />
          <img src={star_dull} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
          <div className="productdisplay-right-description">
            A fertilizer (American English) or fertiliser (British English) is any material of natural or synthetic origin that is applied to soil or to plant
          </div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-size">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
          <p className='productdisplay-right-category'><span>Category :</span> Onion, Tomato, Grapes</p>
          <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

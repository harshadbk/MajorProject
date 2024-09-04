import React from 'react';
import './AddProduct.css';

const AddProduct = () => {
  return (
    <main>
      <h2>Add your product</h2>
      <div className="form">
        <input
          type="text"
          id="product-name"
          maxLength="50"
          placeholder="Product Name"
        />
        <input
          type="text"
          id="short-des"
          maxLength="100"
          placeholder="Short description about the product"
        />
        <textarea
          id="des"
          placeholder="Detailed description of the product"
        ></textarea>

        <div className="product-info">
          <div className="product-image"><p className="text">Product Image</p></div>
          <div className="upload-image-sec">
            <p className="text">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTdQ0ra7S-RibQhYh29B11td8QQ1wr3hYoA&s"
                width="30px"
                height="30px"
                alt="Upload"
              />
              Upload Image
            </p>
            <div className="upload-Catalouge">
              {[...Array(4)].map((_, index) => (
                <React.Fragment key={index}>
                  <input
                    type="file"
                    className="fileupload"
                    id={`file-upload-btn-${index}`}
                    hidden
                  />
                  <label htmlFor={`file-upload-btn-${index}`} className="upload-image"></label>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="select-sizes">
            <p className="text">Sizes Available</p>
            <div className="sizes">
              {['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'].map(size => (
                <input
                  key={size}
                  type="checkbox"
                  className="size-checkbox"
                  id={size}
                  value={size}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="product-price">
          <input type="number" id="actual-price" placeholder="Actual Price" />
          <input type="number" id="discount" placeholder="Discount Percentage" />
          <input type="number" id="sell-price" placeholder="Selling Price" />
        </div>

        <button type="submit" className="add-product-btn">Add Product</button>
      </div>
    </main>
  );
};

export default AddProduct;


import React from 'react';
import ProductRow from './ProductRow'; // Ensure this path is correct
import './ProductRow.css'; // Assumes both files are in the same directory

const products = [
  {
    imgSrc: '/images/product1.jpg',
    title: 'Expert Gardener Tomato & Vegetable Fertilizer',
    oldPrice: '₹100',
    newPrice: '₹70',
    category: 'Tomato',
  },
  {
    imgSrc: '/images/product2.jpg',
    title: 'Expert Gardener Onion Plant Food',
    oldPrice: '₹90',
    newPrice: '₹50',
    category: 'Onion',
  },
  {
    imgSrc: '/images/product3.jpg',
    title: 'Expert Gardener Grape Fertilizer',
    oldPrice: '₹80',
    newPrice: '₹60',
    category: 'Grapes',
  },
  {
    imgSrc: '/images/product4.jpg',
    title: 'Organic Apple Tree Fertilizer',
    oldPrice: '₹120',
    newPrice: '₹90',
    category: 'Apple',
  },
  {
    imgSrc: '/images/product5.jpg',
    title: 'Strawberry Plant Food',
    oldPrice: '₹85',
    newPrice: '₹65',
    category: 'Strawberry',
  },
  {
    imgSrc: '/images/product6.jpg',
    title: 'Carrot Growth Booster',
    oldPrice: '₹70',
    newPrice: '₹50',
    category: 'Carrot',
  },
  {
    imgSrc: '/images/product7.jpg',
    title: 'Blueberry Fertilizer',
    oldPrice: '₹100',
    newPrice: '₹80',
    category: 'Blueberry',
  },
  {
    imgSrc: '/images/product8.jpg',
    title: 'Potato Plant Enhancer',
    oldPrice: '₹75',
    newPrice: '₹55',
    category: 'Potato',
  },
  {
    imgSrc: '/images/product9.jpg',
    title: 'Watermelon Growth Fertilizer',
    oldPrice: '₹110',
    newPrice: '₹85',
    category: 'Watermelon',
  },
  {
    imgSrc: '/images/product10.jpg',
    title: 'Expert Gardener Mango Fertilizer',
    oldPrice: '₹95',
    newPrice: '₹70',
    category: 'Mango',
  },
  {
    imgSrc: '/images/product11.jpg',
    title: 'Peach Tree Growth Formula',
    oldPrice: '₹105',
    newPrice: '₹80',
    category: 'Peach',
  },
  {
    imgSrc: '/images/product12.jpg',
    title: 'Cucumber Plant Fertilizer',
    oldPrice: '₹65',
    newPrice: '₹45',
    category: 'Cucumber',
  },
  {
    imgSrc: '/images/product13.jpg',
    title: 'Chili Plant Food',
    oldPrice: '₹85',
    newPrice: '₹60',
    category: 'Chili',
  },
  {
    imgSrc: '/images/product14.jpg',
    title: 'Pumpkin Growth Enhancer',
    oldPrice: '₹130',
    newPrice: '₹100',
    category: 'Pumpkin',
  },
  {
    imgSrc: '/images/product15.jpg',
    title: 'Broccoli Plant Fertilizer',
    oldPrice: '₹70',
    newPrice: '₹50',
    category: 'Broccoli',
  },
];

function ProductTable() {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Title</th>
          <th>Old Price</th>
          <th>New Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductRow
              key={index}
              imgSrc={product.imgSrc}
              title={product.title}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
              category={product.category}
            />
          ))
        ) : (
          <tr>
            <td colSpan="5">No products available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ProductTable;
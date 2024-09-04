import React from 'react';
import PropTypes from 'prop-types';
import PendingProductRow from './PendingProductRow'; // Ensure this path is correct
import './ProductTable.css'; // Import CSS for styling

// Sample data for demonstration
const sampleProducts = [
  { id: '1', imgSrc: '/images/product1.jpg', title: 'Apple', price: '$1.00', category: 'Fruits' },
  { id: '2', imgSrc: '/images/product2.jpg', title: 'Carrot', price: '$0.50', category: 'Vegetables' },
  { id: '3', imgSrc: '/images/product3.jpg', title: 'Milk', price: '$1.20', category: 'Dairy' },
  { id: '4', imgSrc: '/images/product4.jpg', title: 'Bread', price: '$2.00', category: 'Bakery' },
  { id: '5', imgSrc: '/images/product5.jpg', title: 'Chicken', price: '$5.00', category: 'Meat' },
  { id: '6', imgSrc: '/images/product6.jpg', title: 'Eggs', price: '$3.00', category: 'Dairy' },
  { id: '7', imgSrc: '/images/product7.jpg', title: 'Tomatoes', price: '$2.50', category: 'Vegetables' },
  { id: '8', imgSrc: '/images/product8.jpg', title: 'Orange Juice', price: '$3.50', category: 'Beverages' },
  { id: '9', imgSrc: '/images/product9.jpg', title: 'Cheese', price: '$4.00', category: 'Dairy' },
  { id: '10', imgSrc: '/images/product10.jpg', title: 'Butter', price: '$2.50', category: 'Dairy' }
];

function PendingProductTable({ products = sampleProducts, onMarkAsSold }) {
  return (
    <table className="pending-products-table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? (
          products.map(product => (
            <PendingProductRow
              key={product.id}
              imgSrc={product.imgSrc}
              title={product.title}
              price={product.price}
              category={product.category}
              onMarkAsSold={() => onMarkAsSold(product.id)}
            />
          ))
        ) : (
          <tr>
            <td colSpan="5">No pending products</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

// Define PropTypes for the component
PendingProductTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  onMarkAsSold: PropTypes.func.isRequired,
};

export default PendingProductTable;

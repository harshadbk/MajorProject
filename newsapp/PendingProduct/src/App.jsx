import React from 'react';
import PendingProductTable from './PendingProductTable';
import './styles.css'; // Importing styles

// Sample data for testing
const sampleProducts = [
  { id: '1', imgSrc: 'https://via.placeholder.com/60', title: 'Apple', price: '$1.00', category: 'Fruits' },
  { id: '2', imgSrc: 'https://via.placeholder.com/60', title: 'Carrot', price: '$0.50', category: 'Vegetables' },
  { id: '3', imgSrc: 'https://via.placeholder.com/60', title: 'Milk', price: '$1.20', category: 'Dairy' },
  { id: '4', imgSrc: 'https://via.placeholder.com/60', title: 'Bread', price: '$2.00', category: 'Bakery' },
  { id: '5', imgSrc: 'https://via.placeholder.com/60', title: 'Chicken', price: '$5.00', category: 'Meat' },
  { id: '6', imgSrc: 'https://via.placeholder.com/60', title: 'Eggs', price: '$3.00', category: 'Dairy' },
  { id: '7', imgSrc: 'https://via.placeholder.com/60', title: 'Tomatoes', price: '$2.50', category: 'Vegetables' },
  { id: '8', imgSrc: 'https://via.placeholder.com/60', title: 'Orange Juice', price: '$3.50', category: 'Beverages' },
  { id: '9', imgSrc: 'https://via.placeholder.com/60', title: 'Cheese', price: '$4.00', category: 'Dairy' },
  { id: '10', imgSrc: 'https://via.placeholder.com/60', title: 'Butter', price: '$2.50', category: 'Dairy' }
];

function App() {
  return (
    <div className="container">
      <h1>Pending Products</h1>
      <PendingProductTable products={sampleProducts} onMarkAsSold={(id) => console.log(`Marking product ${id} as sold`)} />
    </div>
  );
}

export default App;

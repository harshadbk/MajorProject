import React, { useState } from 'react';

const Sixteen = ({ items, countperpage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastElement = currentPage * countperpage;
  const indexOfFirstElement = indexOfLastElement - countperpage;
  const currentItem = items.slice(indexOfFirstElement, indexOfLastElement);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / countperpage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {currentItem.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <ul style={{ display: 'flex', listStyleType: 'none', cursor: 'pointer' }}>
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => setCurrentPage(number)} style={{ margin: '0 5px' }}>
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sixteen;

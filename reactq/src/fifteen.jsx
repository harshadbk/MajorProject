import React, { useState } from 'react';

const Fifteen = (props) => {
  const [searchItem, setSearchItem] = useState('');

  const filterItems = props.items.filter((item) =>
    item.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        name="text"
        placeholder="Search..."
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <ul>
        {filterItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fifteen;



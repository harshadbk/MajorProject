import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar2.css';

const Navbar2 = () => {  
  const [menu, setMenu] = useState("Shop");
  const username = localStorage.getItem('user-name');
  const role = localStorage.getItem('role');
 

  const menuItems = [
    { role: 'Farmer', items: [{ name: 'Add Product', path: '/' }, { name: 'Merchants', path: '/' },{name:'Pending orders',path:'/'},{name:'Complete orders',path:'/'},{name:'Pending Products',path:'/'},{name:'Selled Products',path:'/'},{name:'Community',path:'/'},{name:'Add Response',path:'/'}] },
    { role: 'Admin', items: [{ name: 'Deliveries', path: '/' }, { name: 'Pickup Points', path: '/' }] },
    { role: 'Worker', items: [{ name: 'Works Near Me', path: '/' }, { name: 'Works History', path: '/' }] },
    { role: 'Shopkeeper',items:[{name:'Add Product',path:'/addproduct'},{name:'List Product',path:'/shopkeeper'},{name:'Pending Orders',path:'/Pending'},{name:'Complete Orders',path:'/complete'},{name:'Your Earning',path:'/'},{name:'Delivery Boys',path:'/'},{name:'Farmers Feedback',path:'/'}]}
  ];

  const roleItems = menuItems.find(item => item.role === role)?.items || [];

  return (
    <div className='navbar2'>
      <ul className="nav2-menu">
        {roleItems.map((item, index) => (
          <li key={index} onClick={() => setMenu(item.name)}>
            <Link style={{ textDecoration: 'none' }} to={item.path}>{item.name}</Link>
            {menu === item.name && <><hr /></>}
          </li>
        ))}
      </ul>
      <div className="nav2-name">
        {username && <p className="nav2-username"><h4>Hello, {username}</h4><hr /></p>}
        {role && <p className="nav2-role"><h3>&nbsp;&nbsp;&nbsp;Your Role is {role}</h3><hr /></p>}
      </div>
    </div>
  );
};

export default Navbar2;

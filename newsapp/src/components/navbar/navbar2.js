import {React,useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar2.css';

const Navbar2 = () => {  
  const [menu, setMenu] = useState("Shop");
  const username = localStorage.getItem('user-name');
  const role = localStorage.getItem('role');
 
  return (
    <div className='navbar2'>
      <ul className="nav2-menu">
      <li onClick={() => setMenu("Shop")}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu === "Shop" && <><hr /></>}
        </li>
        <li onClick={() => setMenu("Shop")}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu === "Shop" && <><hr /></>}
        </li>
        <li onClick={() => setMenu("Shop")}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu === "Shop" && <><hr /></>}
        </li>
        <li onClick={() => setMenu("Shop")}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu === "Shop" && <><hr /></>}
        </li>
      </ul>
       <div className="nav2-name">
        {username && <p className="nav2-username"><h3>Hello, {username}</h3><hr /></p>}
        {role && <p className="nav2-role"><h3>&nbsp;&nbsp;&nbsp;Your Role is {role} </h3><hr /></p>}
      </div>
    </div>
  );
};

export default Navbar2;

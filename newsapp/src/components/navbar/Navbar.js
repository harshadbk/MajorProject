import React, { useContext, useState } from 'react';
import './navbar.css';
import logo from '../Assets/logo.jpg';
import cartIcon from '../Assets/cart_icon.jpg';
import { Link } from 'react-router-dom';
import { shopContext } from '../../context/shopcontext';
import Profile from '../Assets/profile.jpeg';

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const [showCategories, setShowCategories] = useState(false);
  const [showcuscategory, setshowcuscategory] = useState(false);
  const { getTotalCartItem } = useContext(shopContext);

  const handleCategoriesClick = () => {
    setMenu("Categories");
    setShowCategories(!showCategories);
  };

  const handleCustomerClick = () => {
    setMenu("Customer");
    setshowcuscategory(!showcuscategory);
  };

  const isAuthenticated = localStorage.getItem('auth-token');

  // useEffect(() => {
  //   window.googleTranslateElementInit = () => {
  //     new window.google.translate.TranslateElement(
  //       { pageLanguage: 'en', includedLanguages: 'en,mr' },
  //       'google_translate_element'
  //     );
  //   };

  //   const script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  //   script.onerror = () => {
  //     console.error("Failed to load the Google Translate script.");
  //   };
  //   document.body.appendChild(script); 

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // const handleTranslateClick = () => {
  //   const translateElement = document.querySelector('.goog-te-combo');
  //   if (translateElement) {
  //     translateElement.value = 'mr';
  //     translateElement.dispatchEvent(new Event('change'));
  //   }
  // };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>VISHWA_AGRO</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("Shop")}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu === "Shop" && <><hr /></>}
        </li>
        <li onClick={handleCategoriesClick}>
          <span style={{ textDecoration: 'none', cursor: 'pointer' }}>Products</span>
          {menu === "Categories" && <><hr /></>}
          {showCategories && (
            <ul className="dropdown">
              <li onClick={() => setMenu("Mens")}>
                <Link style={{ textDecoration: 'none' }} to='/Mens'>Fertilizers</Link>
                {menu === "Mens" && <><hr /></>}
              </li>
              <li onClick={() => setMenu("Womens")}>
                <Link style={{ textDecoration: 'none' }} to='/Womens'>Pesticides</Link>
                {menu === "Womens" && <><hr /></>}
              </li>
              <li onClick={() => setMenu("Kids")}>
                <Link style={{ textDecoration: 'none' }} to='/Kids'>Organic</Link>
                {menu === "Kids" && <><hr /></>}
              </li>
              <li onClick={() => setMenu("Herbicides")}>
                <Link style={{ textDecoration: 'none' }} to='/Herbicides'>Herbicides</Link>
                {menu === "Herbicides" && <><hr /></>}
              </li>
              <li onClick={() => setMenu("seed")}>
                <Link style={{ textDecoration: 'none' }} to='/seed'>Seeds</Link>
                {menu === "seed" && <><hr /></>}
              </li>
            </ul>
          )}
        </li>
        <li onClick={() => setMenu("Stationary")}>
          <Link style={{ textDecoration: 'none' }} to='/Stationary'>Stationary</Link>
          {menu === "Stationary" && <><hr /></>}
        </li>
        <li onClick={() => setMenu("Bestseller")}>
          <Link style={{ textDecoration: 'none' }} to='/Bestseller'>Best Seller</Link>
          {menu === "Bestseller" && <><hr /></>}
        </li>
        <li onClick={() => { setMenu("Offers") }}>
          <Link style={{ textDecoration: 'none' }} to='/Offers'>Offers</Link>
          {menu === "Offers" && <><hr /></>}
        </li>
        <li onClick={() => { setMenu("About") }}>
          <Link style={{ textDecoration: 'none' }} to='/About'>About/Contact Us</Link>
          {menu === "About" && <><hr /></>}
        </li>
        <li onClick={handleCustomerClick}>
          <span style={{ textDecoration: 'none', cursor: 'pointer' }}>Customer Services</span>
          {menu === "Customer" && <><hr /></>}
          {showcuscategory && (
            <ul className="dropdown">
              <li onClick={() => setMenu("Shipping")}>
                <Link style={{ textDecoration: 'none' }} to='/Shipping'>Shipping & Delivery</Link>
                {menu === "Shipping" && <><hr /></>}
              </li>
              <li onClick={() => setMenu("Returns")}>
                <Link style={{ textDecoration: 'none' }} to='/Returns'>Returns & Refunds</Link>
                {menu === "Returns" && <><hr /></>}
              </li>
              <li onClick={() => setMenu("Privacy")}>
                <Link style={{ textDecoration: 'none' }} to='/Privacy'>Privacy Policy</Link>
                {menu === "Privacy" && <><hr /></>}
              </li>
              <li onClick={() => setMenu("Terms")}>
                <Link style={{ textDecoration: 'none' }} to='/Terms'>Terms of Service</Link>
                {menu === "Terms" && <><hr /></>}
              </li>
            </ul>
          )}
        </li>
      </ul>
      {/* <button id="google_translate_element" onClick={handleTranslateClick} className="translate-button">Translate to Marathi</button> */}
      <div className="nav-login-cart">
                {isAuthenticated ? (
          <button className="nav-button" onClick={() => {
            localStorage.removeItem('auth-token');
            localStorage.removeItem('user-name');
            localStorage.removeItem('role');
            localStorage.removeItem('address');
            window.location.replace('/');
          }}>Logout</button>
        ) : (
          <Link to='/loginsignup'><button className="nav-button">Login</button></Link>
        )}
        <Link to='/cart'>
        <img src={cartIcon} alt="Cart" className="nav-cart-icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
        {isAuthenticated ? (
          <Link to='/profile'>
            <img src={Profile} alt="Profile" className='profile-img' />
          </Link>
        ) : (
          <img onClick={() => { alert("Please Login or Sign up To The System") }} src={Profile} alt="Profile" className='profile-img disabled' />
        )}
      </div>
    </div>
  );
};

export default Navbar;

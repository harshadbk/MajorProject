import React, { useState, useEffect } from 'react';
import './rfarmers.css';

const Rfarmers = () => {
  const [rfarmers, setRfarmers] = useState([]);

  const fetchinfo = async () => {
    await fetch('http://127.0.0.1:5000/rfarmers')
      .then((resp) => resp.json())
      .then((data) => {
        setRfarmers(data);
      });
  };

  useEffect(() => {
    fetchinfo();
  }, []);

  return (
    <div className='Rfarmers-content'>
      <h1>All Related Farmers</h1>
      <br />
      <div className="Rfarmers-content-format-main">
        <p>Email</p>
        <p>Address</p>
        <p>Phone</p>
        <p>Area In Acre</p>
        <p>Farm Type</p>
        <p>Soil Type</p>
        <p>Crop Grown</p>
        <p>Fertilizers</p>
      </div>
      <div className="Rfarmers-content-data">
        {
          rfarmers.map((farmer, index) => (
            <div key={index} className="Rfarmers-content-item">
              <p>{farmer.email ? farmer.email : "My"}</p>
              <p>{farmer.address}</p>
              <p>{farmer.phone}</p>
              <p>{farmer.area}</p>
              <p>{farmer.farm_type}</p>
              <p>{farmer.soil_type}</p>
              <p>{farmer.crop_grown}</p>
              <p>{farmer.fertilizers}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Rfarmers;

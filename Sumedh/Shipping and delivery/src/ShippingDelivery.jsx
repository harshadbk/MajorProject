import React from 'react';
import './style.css'; // Import your CSS file


function ShippingDelivery() {
  return (
    <div>
      <header>
        <div className="container container1">
          <div className="header">
            <h1 id="logo">
              <img
  src="/images/crop image.png"
  alt="svg logo"
  style={{ verticalAlign: 'middle', width: '130px', height: '130px' }}
/>

              Farm Connect
            </h1>
          </div>

          <div className="nav2">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="shop.html">Shop</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <h2 id="rr">Shipping & Delivery Information</h2>
          <p>
            At Farm Connect, we are committed to ensuring that your products reach
            you in the fastest and safest way possible. Below you will find
            detailed information about our shipping and delivery policies.
          </p>

          <h3>Shipping Options</h3>
          <ul>
            <li>
              <strong>Standard Shipping:</strong> Delivery within 5-7 business days.
            </li>
            <li>
              <strong>Express Shipping:</strong> Delivery within 2-3 business days.
            </li>
            <li>
              <strong>Same-Day Delivery:</strong> Available for selected regions;
              orders must be placed before 12 PM.
            </li>
          </ul>

          <h3>Delivery Charges</h3>
          <ul>
            <li>
              <strong>Standard Shipping:</strong> Free for orders above ₹999. For
              orders below ₹999, a flat fee of ₹50 applies.
            </li>
            <li><strong>Express Shipping:</strong> ₹150 flat fee.</li>
            <li><strong>Same-Day Delivery:</strong> ₹250 flat fee.</li>
          </ul>

          <h3>Order Processing Time</h3>
          <p>
            All orders are processed within 24 hours. Orders placed after 3 PM
            will be processed the next business day.
          </p>

          <h3>Tracking Your Order</h3>
          <p>
            Once your order has been shipped, you will receive an email with the
            tracking number and a link to track your order. You can also track
            your order in the "My Account" section on our website.
          </p>

          <h3>Delivery Partners</h3>
          <p>
            We partner with leading courier services to ensure reliable and timely
            delivery of your products. Our delivery partners include:
          </p>
          <ul>
            <li>Delhivery</li>
            <li>Blue Dart</li>
            <li>DTDC</li>
            <li>India Post</li>
          </ul>

          <h3>International Shipping</h3>
          <p>
            Currently, we only ship within India. International shipping is not
            available at this time.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have any questions about shipping and delivery, please contact
            our customer support team at
            <a href="mailto:support@farmconnect.com">support@farmconnect.com</a>
            or call us at +91-9876543210.
          </p>
        </div>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Farm Connect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ShippingDelivery;

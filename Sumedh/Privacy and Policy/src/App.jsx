import React from 'react';
import './style.css';
import logo from './assets/crop image.png'; // Import the logo from the correct path

function App() {
  return (
    <>
      <header>
        <div className="container">
          <h1 id="logo">
            <img src={logo} alt="Logo" style={{ verticalAlign: "middle", width: "130px", height: "130px" }} />
            Farm Connect
          </h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="container">
          <h2 id="rr">Privacy Policy</h2>
          <p id="update">Effective Date: August 16, 2024</p>

          <p>At Farm Connect, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you visit our website or purchase our products, including fertilizers, pesticides, farming tools, and other related items.</p>

          <h3>1. Information We Collect</h3>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, billing address, and shipping address.</li>
            <li><strong>Payment Information:</strong> Credit card number, expiration date, and billing address.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website, including your IP address, browser type, and operating system.</li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process your orders and manage your account.</li>
            <li>Provide customer support and respond to your inquiries.</li>
            <li>Improve our website and products.</li>
            <li>Send you promotional offers and updates about our products.</li>
          </ul>

          <h3>3. Sharing Your Information</h3>
          <p>We may share your information with third parties in the following situations:</p>
          <ul>
            <li>With service providers who help us operate our website and fulfill orders.</li>
            <li>With third-party payment processors to process your payments.</li>
            <li>In response to a legal request or to protect our rights.</li>
          </ul>

          <h3>4. Data Security</h3>
          <p>We take appropriate measures to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the internet is 100% secure, so we cannot guarantee absolute security.</p>

          <h3>5. Your Rights</h3>
          <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at [Contact Information].</p>

          <h3>6. Changes to This Privacy Policy</h3>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website with a new effective date.</p>

          <h3>7. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>Email: farmconnect@gmail.com</p>
          <p>Phone: +91 01234 56789</p>
          <p>Address: 3rd Block, Maple Street, Near Bandra railway station, Bandra West, 401202, India</p>
        </div>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Farm Connect. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;

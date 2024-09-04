import React from 'react';
import './index.css';
import logo from './assets/crop image.png';
import './index.css';


function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>
            <img src={logo} alt="Logo" style={{ verticalAlign: 'middle', width: '100px', height: '100px' }} />
            Farm Connect
          </h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
          <button className="button">Download PDF</button>
        </div>
      </header>

      <main>
        <div className="container">
          <h2>Terms of Service</h2>

          <h3>Welcome to Farm Connect</h3>
          <p>
            Thank you for visiting Farm connect, your trusted partner in sustainable farming solutions.
            By accessing our website and using our services, you agree to abide by and be bound by the following terms and conditions.
            These terms are designed to ensure a safe, fair, and informative experience for all users. If you do not agree with these terms in their entirety,
            please refrain from using our website.
          </p>

          <h3>1. Introduction</h3>
          <p>
            Farm connect is committed to providing high-quality agricultural products, including fertilizers, pesticides,
            and farming tools, to support the farming community. These terms and conditions govern your use of our website,
            ensuring that our resources are used appropriately and responsibly. By using our website, you acknowledge that
            you have read, understood, and agree to be bound by these terms.
          </p>
          <p>
            Our website is intended to serve as a valuable resource for farmers and agricultural professionals.
            Whether you are seeking information about our products, looking to make a purchase, or accessing our educational materials,
            we are here to support your farming endeavors.
          </p>

          <h3>2. License to Use Website</h3>
          <p>
            Farm connect and its licensors own the intellectual property rights for all the content published on this website,
            including but not limited to articles, product descriptions, images, and videos. These materials are provided for your personal use
            and for the advancement of agricultural practices. You are granted a limited license to view, download (for caching purposes only),
            and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.
          </p>
          <div id="snm">
            <p>You must not:</p>
            <ul>
              <li>Republish material from this website (including republication on another website);</li>
              <li>Sell, rent, or sub-license material from the website;</li>
              <li>Reproduce, duplicate, copy, or otherwise exploit material on our website for a commercial purpose;</li>
              <li>Edit or otherwise modify any material on the website.</li>
            </ul>
          </div>

          <h3>3. Limitations of Liability</h3>
          <p>
            At Farm connect, we strive to ensure the accuracy and reliability of the information provided on our website.
            However, the content is provided "as is" without any representations or warranties, express or implied.
            Farm connect will not be liable to you in relation to the content or use of this website for any indirect, special, or consequential loss.
          </p>
          <p>
            We understand the importance of reliable farming tools and products. Therefore, while we make every effort to ensure our products meet the highest standards,
            it is your responsibility to ensure that any product purchased from Farm connect meets your specific requirements.
          </p>

          <h3>4. Governing Law</h3>
          <p>
            These terms will be governed by and construed in accordance with the laws of the region where Farm connect operates,
            which may include state or national agricultural regulations. Any disputes arising out of or in connection with the use of this website or the purchase of our products
            will be subject to the exclusive jurisdiction of the courts of that region.
          </p>
          <p>
            We are committed to complying with all relevant agricultural laws and regulations to ensure that our products and services meet the needs of the farming community
            while maintaining the highest standards of safety and quality.
          </p>

          <h3>5. Changes to the Terms</h3>
          <p>
            As the agricultural industry evolves, so too may our terms of service. We may update these terms from time to time to reflect changes in our practices or in response to legal requirements.
            We encourage you to review this page periodically to stay informed about our latest terms and conditions.
          </p>
          <p>
            By continuing to use our website after any changes are made, you agree to accept the new terms.
            Farm connect is dedicated to transparency and will make every effort to communicate any significant changes to our terms.
          </p>

          <h3>6. Contact Information</h3>
          <p>
            At Farm connect, we value open communication and are here to support you. If you have any questions, concerns, or feedback regarding these terms of service or any other aspect of our website or products,
            please do not hesitate to contact us. You can reach us at:
          </p>
          <p><strong>Email:</strong> <a href="mailto:info@farmconnect.com">info@farmconnect.com</a></p>
          <p>
            We are committed to providing the highest level of service and support to our customers.
            Whether you need assistance with a product, have a question about our terms, or simply want to learn more about our commitment to sustainable farming, we are here to help.
          </p>
        </div>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Farm connect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

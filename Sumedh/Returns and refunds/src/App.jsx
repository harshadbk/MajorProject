import React from 'react';
import './index.css';

function App() {
    return (
        <div>
            {/* Header Section */}
            <header>
                <div className="container">
                    <h1 id="Logo">
                        <img src="/images/crop image.png" alt="Logo" style={{ verticalAlign: 'middle', width: '130px', height: '130px' }} />
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

            {/* Main Content */}
            <main>
                <div className="container">
                    <h2 id="rr">Returns and Refunds Policy</h2>

                    <p>At Farm Connect, we strive to ensure that our customers are completely satisfied with their purchases. This Returns and Refunds Policy outlines the conditions under which we accept returns and issue refunds for our products, including fertilizers, pesticides, farming tools, and farmers' produce.</p>

                    <h3>1. Returns</h3>
                    <p>If you are not satisfied with your purchase, you may return the product within 15 days of receiving it, provided that it meets the following conditions:</p>
                    <ul>
                        <li>The product is unused, unopened, and in its original packaging.</li>
                        <li>You provide proof of purchase (e.g., order number, receipt).</li>
                        <li>The product is not perishable or a custom order (e.g., produce that cannot be resold).</li>
                    </ul>

                    <h3>2. Refunds</h3>
                    <p>Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. If approved, the refund will be processed and a credit will be applied to your original method of payment within 7-10 business days. Please note:</p>
                    <ul>
                        <li>Shipping costs are non-refundable.</li>
                        <li>If you receive a refund, the cost of return shipping will be deducted from your refund.</li>
                    </ul>

                    <h3>3. Damaged or Defective Items</h3>
                    <p>If you receive a damaged or defective product, please contact us immediately with photos of the product and packaging. We will arrange for a replacement or a refund at no additional cost to you.</p>

                    <h3>4. Exchanges</h3>
                    <p>We only replace items if they are defective or damaged. If you need to exchange a defective or damaged item for the same product, please contact us at [Contact Information] for further instructions.</p>

                    <h3>5. How to Initiate a Return</h3>
                    <p>To initiate a return, please contact our customer service team at:</p>
                    <p>Email: farmconnect@gmail.com</p>
                    <p>Phone: +91 01234 56789</p>
                    <p>Address: 3rd Block, Maple Street, Near Bandra railway station, Bandra West, 401202, India</p>

                    <h3>6. Changes to This Policy</h3>
                    <p>We may update this Returns and Refunds Policy from time to time. Any changes will be posted on this page with a new effective date.</p>
                </div>
            </main>

            {/* Footer Section */}
            <footer>
                <div className="container">
                    <p>&copy; 2024 Farm Connect. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;

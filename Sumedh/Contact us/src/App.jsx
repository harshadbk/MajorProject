import React from 'react';
import './index.css';


function App() {
    return (
        <div>
            <header>
                <div className="header-content">
                    <img src="/images/crop image.png" alt="Logo" style={{ verticalAlign: 'middle', width: '130px', height: '130px' }} />
                    <h1 id="logo">FarmConnect</h1>
                </div>
            </header>
            
            <div className="container">
                <h1 id="rr">Connect with us.</h1>
                <p id="paragraph">
                    Connect with us to cultivate the future together - quality agricultural products and reliable farming tools at your service. <br />
                    Feel free to connect with us.
                </p>
                <div className="contact_box">
                    <div className="contact_left">
                        <h3>Send your request.</h3>
                        <form>
                            <div className="input_row">
                                <div className="input_group">
                                    <label>Name</label>
                                    <input type="text" placeholder="Sumedh Mali" />
                                </div>
                                <div className="input_group">
                                    <label>Phone</label>
                                    <input type="text" placeholder="+91 9000000001" />
                                </div>
                            </div>
                            <div className="input_row">
                                <div className="input_group">
                                    <label>Email</label>
                                    <input type="text" placeholder="farmconnect@gmail.com" />
                                </div>
                            </div>
                            <label>Message</label>
                            <textarea rows="10" placeholder="Your Message"></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                    <div className="contact_right">
                        <h3>Reach Us.</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Email</td>
                                    <td>farmconnect@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td>+91 01234 56789</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>3rd Block, Maple Street,<br />Near Bandra Railway Station,<br />Bandra West, 401202, India</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <footer>
                <p>&copy; 2024 FarmConnect. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;

import React, { useContext, useState } from 'react';
import './payment.css';
import { shopContext } from '../context/shopcontext';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
    const { allProduct, cartItem } = useContext(shopContext);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        upiId: '',
        bankAccount: '',
        ifsc: '',
    });
    const navigate = useNavigate();

    const calculateSubtotal = () => {
        let subtotal = 0;
        if (Array.isArray(allProduct) && cartItem) {
            allProduct.forEach(product => {
                const quantity = cartItem[product.id] || 0;
                if (quantity > 0) {
                    subtotal += quantity * product.new_price;
                }
            });
        }
        return subtotal;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const handlePayment = () => {
        if (selectedPaymentMethod === 'credit-card' && paymentDetails.cardNumber && paymentDetails.expiryDate && paymentDetails.cvv) {
            alert('Payment Processed Successfully with Credit/Debit Card!');
            navigate('/confirmation');
        } else if (selectedPaymentMethod === 'upi' && paymentDetails.upiId) {
            alert('Payment Processed Successfully with UPI Payments!');
            navigate('/confirmation');
        } else if (selectedPaymentMethod === 'bank-transfer' && paymentDetails.bankAccount && paymentDetails.ifsc) {
            alert('Payment Processed Successfully with Bank Transfer!');
            navigate('/confirmation');
        } else if (selectedPaymentMethod === 'cash-on-delivery') {
            alert('Cash on Delivery selected. Please pay the amount upon delivery.');
        } else {
            alert('Please fill in all required payment details');
        }
    };

    return (
        <div className='payment-page'>
            <h1>Payment Details</h1>
            <div className='payment-method-selection'>
                <label>
                    <input type='radio' name='payment-method' value='credit-card' onChange={() => setSelectedPaymentMethod('credit-card')} />
                    Credit/Debit Card
                </label>
                <br />
                <br />
                <label>
                    <input type='radio' name='payment-method' value='upi' onChange={() => setSelectedPaymentMethod('upi')} />
                    UPI Payments
                </label>
                <br />
                <br />
                <label>
                    <input type='radio' name='payment-method' value='bank-transfer' onChange={() => setSelectedPaymentMethod('bank-transfer')} />
                    Bank Transfer
                </label>
                <br />
                <br />
                <label>
                    <input type='radio' name='payment-method' value='cash-on-delivery' onChange={() => setSelectedPaymentMethod('cash-on-delivery')} />
                    Cash on Delivery
                </label>
                <br />
                <br />
            </div>
            {selectedPaymentMethod === 'credit-card' && (
                <form className='payment-form'>
                    <div className='form-group'>
                        <label htmlFor='cardNumber'>Card Number</label>
                        <input type='text' id='cardNumber' name='cardNumber' value={paymentDetails.cardNumber} onChange={handleInputChange} required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='expiryDate'>Expiry Date</label>
                        <input type='text' id='expiryDate' name='expiryDate' value={paymentDetails.expiryDate} onChange={handleInputChange} required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cvv'>CVV</label>
                        <input type='text' id='cvv' name='cvv' value={paymentDetails.cvv} onChange={handleInputChange} required />
                    </div>
                </form>
            )}
            {selectedPaymentMethod === 'upi' && (
                <form className='payment-form'>
                    <div className='form-group'>
                        <label htmlFor='upiId'>Enter UPI Id or Phone No</label>
                        <input type='text' id='upiId' name='upiId' value={paymentDetails.upiId} onChange={handleInputChange} required />
                    </div>
                </form>
            )}
            {selectedPaymentMethod === 'bank-transfer' && (
                <form className='payment-form'>
                    <div className='form-group'>
                        <label htmlFor='bankAccount'>Bank Account</label>
                        <input type='text' id='bankAccount' name='bankAccount' value={paymentDetails.bankAccount} onChange={handleInputChange} required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='ifsc'>IFSC Code</label>
                        <input type='text' id='ifsc' name='ifsc' value={paymentDetails.ifsc} onChange={handleInputChange} required />
                    </div>
                </form>
            )}
            {selectedPaymentMethod === 'cash-on-delivery' && (
                <div className='cod-info'>
                    <p>You have selected Cash on Delivery. Please pay the amount upon delivery.</p>
                </div>
            )}
            <div className='total-amount'>
                Total Amount: ${calculateSubtotal()}
            </div>
            <button type='button' className='pay-button' onClick={handlePayment}>
                Pay ${calculateSubtotal()}
            </button>
        </div>
    );
};

export default PaymentPage;

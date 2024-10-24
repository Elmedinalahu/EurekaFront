import './Checkout.css';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'; // Import Axios

const stripePromise = loadStripe('pk_test_51QBcCpJtrNUkrP9kHXpuhiaIN8PqJHTA3wEKAtpsgnhfaI13tZ7bDMlJ1cFDOabEeEIwoHMxsycGfNIHgltK26wz00usRo0NHG'); // Your Stripe publishable key

export default function Checkout() {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { courseId, email, price } = location.state || {};
  // State for address and country
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe or Elements is not loaded");
      return; // Exit if Stripe is not loaded
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        address: {
          line1: address,
          country: country,
        },
      },
    });

    if (error) {
      console.error(error);
      alert('Payment failed: ' + error.message);
    } else {
      console.log('Payment Method:', paymentMethod);
      
      // Send the payment details to your backend
      try {
        const response = await axios.post('https://localhost:7143/api/Payments/buy-now', {
          CourseId: courseId,
          Email: email,
          Price: price,
          PaymentMethodId: paymentMethod.id, // Send the payment method ID
        });
        
        if (response.status === 200) {
          alert('Payment succeeded!');
        }
      } catch (err) {
        console.error('Error processing payment:', err);
        alert('Payment failed: ' + (err.response?.data?.message || 'An error occurred'));
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="checkout-container">
        {/* Sidebar section */}
        <div className="sidebar">
          <div className="logo-container">
            <span className="logo-text">E.</span>
          </div>
        </div>

        {/* Main form section */}
        <div className="form-section">
          <h1 className="checkout-title">Checkout</h1>
          <p className="description">Fill in the information below to complete the checkout process.</p>
          <hr className="divider" />

          {/* Billing Address */}
          <h2 className="checkout-section-title">Billing address</h2>
          <div className="billing-address-fields">
            <input type="text" placeholder="Billing Country..." 
              className="input-field"  
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required/>
            <input type="text" placeholder="Billing Address..." 
              className="input-field" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required/>
          </div>

          <CardElement />

          {/* Order Details */}
          <h2 className="checkout-section-title">Order details</h2>
          <div className="order-summary">
            <div className="order-item">
              <img src="assets/images/Image1.jpeg" alt="" className="course-image" />
              <div className="course-info">
                <p className="course-title">Ionic React: Mobile Development with Ionic 5...</p>
                <p className="course-author">By Aleandro Vela</p>
              </div>
              <div className="course-price">€19.99</div>
            </div>
          </div>
        </div>

        {/* Summary section */}
        <div className="summary-section">
          <button className="cancel-button">Cancel</button>

          <h2 className="summary-title">Summary</h2>
          <div className="price-details">
            <p>Original Price:</p>
            <p>€19.99</p>
          </div>
          <hr />
          <div className="price-details total">
            <p>Total:</p>
            <p>€19.99</p>
          </div>
          <button type="submit" disabled={!stripe} className="checkout-button">Complete Checkout</button>
        </div>
      </div>
    </form>
  );
}

import './Checkout.css';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'; // Import Axios
import { jwtDecode } from 'jwt-decode';
import { getToken } from '../utils/auth';

const stripePromise = loadStripe('pk_test_51QBcCpJtrNUkrP9kHXpuhiaIN8PqJHTA3wEKAtpsgnhfaI13tZ7bDMlJ1cFDOabEeEIwoHMxsycGfNIHgltK26wz00usRo0NHG'); // Your Stripe publishable key

export default function Checkout() {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const navigate = useNavigate(); // Use for redirection
  const { courseId, email, price, name, instructor, pictureUrl } = location.state?.courseData || {}; // Use optional chaining
  console.log("Checkout data:", { courseId, email, price, name, instructor, pictureUrl });

  // Retrieve course data from location.state
  
  // State for address and country
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe or Elements is not loaded");
      return; 
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

      try {
        const token = getToken(); 
        const decodedToken = jwtDecode(token); // Decode the token

        console.log("Token in Checkout:", token); // Log the token

        if (!token) {
          console.error("Token is missing");
          alert("You must be logged in to make a payment.");
          return;
        }

        let emailUser;
        try {
          const decodedToken = jwtDecode(token); // Decode the token
          console.log(decodedToken);
          emailUser = decodedToken.email; // Get email from decoded token
        } catch (decodeError) {
          console.error("Invalid token:", decodeError);
          alert("Invalid token. Please log in again.");
          removeToken();
          navigate('/login'); 
          return;
        }

        const response = await axios.post('https://api.eurekaelearn.com/api/payments/buy-now', {
          courseId: courseId,
          email: emailUser,
          price: price,
          paymentMethodId: paymentMethod.id,
        }, {
          headers: {
            Authorization: `Bearer ${token}`, // Ensure token is used for API request
          },
        });
console.log(response.data)
        if (response.data.statusCode === 200) {
          alert("Payment succeeded!");
          navigate(`/course/${courseId}`); // Redirect to course page after success
        } else {
          alert("Payment failed. Please try again.");
        }
      } catch (apiError) {
        console.error("Error during API request:", apiError);
        alert("An error occurred while processing your payment. Please try again.");
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
          <h2 className="checkout-section-titles">Order details</h2>
          <div className="order-summary">
            <div className="order-item">
              <img src={pictureUrl} alt={name} className="course-image-checkout" />
              <div className="course-info">
                <p className="course-title">{name}</p>
                <p className="course-author">By {instructor}</p>
              </div>
              <div className="course-price">€{price}</div> {/* Display price dynamically */}
            </div>
          </div>
        </div>

        {/* Summary section */}
        <div className="summary-section">
          <button className="cancel-button">Cancel</button>

          <h2 className="summary-title">Summary</h2>
          <div className="price-details">
            <p>Original Price:</p>
            <p>€{price}</p> {/* Display original price dynamically */}
          </div>
          <hr />
          <div className="price-details total">
            <p>Total:</p>
            <p>€{price}</p> {/* Display total dynamically */}
          </div>
          <button type="submit" disabled={!stripe} className="checkout-button">Complete Checkout</button>
        </div>
      </div>
    </form>
  );
}

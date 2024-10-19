import './Checkout.css';
import './Checkout.css';

export default function Checkout() {
  return (
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
        <h2 className="section-title">Billing address</h2>
        <div className="billing-address-fields">
          <input type="text" placeholder="Billing Country..." className="input-field" />
          <input type="text" placeholder="Billing Address..." className="input-field" />
        </div>

        {/* Payment Section */}
        <h2 className="section-title">Payment</h2>
        <div className="payment-fields">
          <input type="text" placeholder="Name on card" className="input-field" />
          <div className="card-details">
            <input type="text" placeholder="1234 1234 1234 1234" className="input-field" />
            <input type="text" placeholder="MM/YY" className="input-field small" />
            <input type="text" placeholder="CVC" className="input-field small" />
          </div>
        </div>


        {/* Order Details */}
        <h2 className="section-title">Order details</h2>
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
        {/* Pozicionimi i butonit Cancel jashtë pjesës së përmbledhjes (summary) */}
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
        <button className="checkout-button">Complete Checkout</button>
      </div>
    </div>
  );
}


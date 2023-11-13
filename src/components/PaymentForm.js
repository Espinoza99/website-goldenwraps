// components/PaymentForm.js

import React from 'react';
import '../styles.css'
const PaymentForm = () => {
  // Your payment form code goes here

  return (
    <form>
      {/* Add form fields for payment details */}
      <label htmlFor="cardNumber">Card Number:</label>
      <input type="text" id="cardNumber" name="cardNumber" required />

      <label htmlFor="expiry">Expiry Date:</label>
      <input type="text" id="expiry" name="expiry" placeholder="MM/YY" required />

      {/* Add more form fields as needed */}
      
      <button type="submit">Make Payment</button>
    </form>
  );
};

export default PaymentForm;


import React, { useState } from "react";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCVV] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expiryDate = `${expiryMonth}/${expiryYear}`;
    console.log("Payment submitted:", { cardNumber, expiryDate, cvv });
    setCardNumber("");
    setExpiryMonth("");
    setExpiryYear("");
    setCVV("");
  };

  return (
    <div className="payment-form-container">
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => {
            if (e.target.value.length <= 16) {
              setCardNumber(e.target.value);
            }
          }}
          placeholder="1234 5678 9012 3456"
          required
        />

        <div className="expiry-date-input">
          <div className="expiry-month">
            <label htmlFor="expiryMonth">Expiry Month</label>
            <input
              type="text"
              id="expiryMonth"
              value={expiryMonth}
              onChange={(e) => {
                const month = e.target.value.replace(/\D/g, "").slice(0, 2);
                setExpiryMonth(month);
              }}
              placeholder="MM"
              required
            />
          </div>

          <div className="expiry-year">
            <label htmlFor="expiryYear">Expiry Year</label>
            <input
              type="text"
              id="expiryYear"
              value={expiryYear}
              onChange={(e) => {
                const year = e.target.value.replace(/\D/g, "").slice(0, 4);
                setExpiryYear(year);
              }}
              placeholder="YYYY"
              required
            />
          </div>
        </div>

        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => {
            if (/^\d{0,3}$/.test(e.target.value)) {
              setCVV(e.target.value);
            }
          }}
          placeholder="123"
          required
        />

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;

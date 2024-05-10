import React from 'react';

const FooterForm = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: burgerbite@mail.fi</p>
        <p>Phone: 0130282725</p>
        <p>Address: Runeberginkatu 28, Helsinki</p>
      </div>
      <p className="restaurant-name">BurgerBite</p>
      <p className="copyright">&copy; {currentYear} BurgerBite. All rights reserved.</p>
    </footer>
  );
};

export default FooterForm;

import React from 'react';
import gpt3Logo from '../../assets/logo.svg'
import './footer.css';

function Footer() {
  return (
    <div className="meta__footer section__margin section__padding">
      <div className="meta__footer-heading">
        <h1 className="gradient__text">Do you want to step into the feature?</h1>
      </div>
      <div className="meta__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="meta__footer-links">
        <div className="meta__footer-links_logo">
          <img src={gpt3Logo} alt="logo"/>
          <p>Algo de interessante está aqui</p>
        </div>
        <div className="meta__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="meta__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="meta__footer-links_div">
          <h4>Get in touch</h4>
          <p>Aleatorio endereço </p>
          <p>999-9999-99</p>
          <p>info@gmail.com</p>
        </div>
        <div className="meta__footer-copyright">
          <p>2021 meta. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
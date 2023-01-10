import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css';

function Menu() {
  return(
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#whpt3">Meta</a></p>
      <p><a href="#features">About</a></p>
      <p><a href="#possibility">Get Started</a></p>
      <p><a href="#blog">Fale Conosco</a></p>
    </>      
  )
}

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    
    <div className="meta__navbar">
      
      <div className="meta__navbar-links">
        <div className="meta__navbar-links_log"o>
          <img src= { logo } alt="logo" />
        </div>
        <div className="meta__navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className="meta__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign Up </button>
      </div>
      <div className="meta__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="meta__navbar-menu_container scale-up-center">
            <div className="meta__navbar-menu_container-links">
              <Menu/>
              <div className="meta__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type='button'>Sign Up </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;
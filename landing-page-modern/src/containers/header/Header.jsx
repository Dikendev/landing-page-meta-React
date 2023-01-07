import React from 'react';
import people from '../../assets/people.png';
import meta from '../../assets/meta.png';
import './header.css';

function Header() {
  return (
    <div className='meta__header section__padding' id='home'>
      <div className='meta__header-content'>
        <h1 className='gradient__text'>
          Lets Build a METAVERSE Together
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe praesentium ab delectus aspernatur deserunt iste ipsa explicabo, tempora eos cumque iusto voluptate sapiente minima quae. Sapiente impedit facilis perferendis?
        </p>
        <div className='meta__header-content__input'>
          <input type="email" placeholder='Your best Email' />
          <button type='button'>Get Started</button>
        </div>
        <div className='meta__header-content_people'>
          <img src={people} alt="people"/>  
          <p>Lorem ipsum dolor sit amet consectetur.</p> 
        </div>
      </div>
      <div className='header__header-image'>
        <img src={meta} alt="AI" />
      </div>
    </div>
  )
}

export default Header;
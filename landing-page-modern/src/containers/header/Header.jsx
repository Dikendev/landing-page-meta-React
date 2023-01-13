import React from 'react';
import people from '../../assets/people.png';
import meta from '../../assets/meta.png';
import './header.css';

function Header() {
  return (
    <div className='meta__header section__padding' id='home'>
      <div className='meta__header-content'>
        <h1 className='gradient__text'>
          Vamos construir um METAVERSO Juntos?
        </h1>
        <p>
          Metaverso é a terminologia utilizada para indicar um tipo de mundo virtual que tenta replicar a realidade através de dispositivos digitais. É um espaço coletivo e virtual compartilhado, constituído pela soma de "realidade virtual", "realidade aumentada" e "Internet"
        </p>
        <div className='meta__header-content__input'>
          <input type="email" placeholder='Your best Email' />
          <button type='button'>Get Started</button>
        </div>
        <div className='meta__header-content_people'>
          <img src={people} alt="people"/>  
          <p>1.6k pessoas assinaram neste mês</p> 
        </div>
      </div>
      <div className='header__header-image'>
        <img src={meta} alt="AI" />
      </div>
    </div>
  )
}

export default Header;
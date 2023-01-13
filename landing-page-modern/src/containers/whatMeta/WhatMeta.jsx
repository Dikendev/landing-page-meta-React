import React from 'react';
import { Feature } from '../../components';
import './whatmeta.css';

const featuresData = [
  {
    title: "Inteligência Artificial",
    text: "Intels dsdsds dsdsdsds dsddsdsds dsdsds dsdigencia artifical"
  }, 
  {
    title: "Algo interessante Aqui",
    text: "Inteligência artifical"
  }, 
  {
    title: "METAVERSE",
    text: "Inteligência artifical é o futuro do mundo"
  },
]

function WhatMeta() {
  return (
    <div className='meta__box' id='whatsmeta'>
      <div className='meta__whatmeta section__margin section__padding'> 
        <div id="whatsmeta"></div>
        <div className='meta__whatmeta-feature'>
          <Feature title="oque é meta?" text="Meta é o futuro"/>  
        </div>
        <div className='meta__whatmeta-heading'>
          <h1 className='gradient__text'>Imagine criar algo incrivel.</h1>
          <p> Explore o MetaVerso </p>
        </div>
        <div className='meta__whatmeta-container'>
          {featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhatMeta;
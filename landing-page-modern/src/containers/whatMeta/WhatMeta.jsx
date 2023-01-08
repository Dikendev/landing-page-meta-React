import React from 'react';
import { Feature } from '../../components';
import './whatmeta.css';

const featuresData = [
  {
    title: "Inteligência Artificial",
    text: "Intels dsdsds dsdsdsds dsddsdsds dsdsds dsdigencia artifical"
  }, 
  {
    title: "Algo interessante",
    text: "Inteligencia artifical"
  }, 
  {
    title: "METAVERSE",
    text: "Inteligencia artifical é o futuro do mundo"
  },
]

function WhatMeta() {
  return (
    <div className='meta__whatmeta section__margin section__padding' id='whpt3'>
      <div className='meta__whatmeta-feature'>
        <Feature title="oque é meta?" text="meta é o futuro de tudo"/>  
      </div>
      <div className='meta__whatmeta-heading'>
        <h1 className='gradient__text'>Imagine build something incredible</h1>
        <p> Explore o MetaVerso </p>
      </div>
      <div className='meta__whatmeta-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default WhatMeta;
import React from 'react';
import { Feature } from '../../components';
import './whatmeta.css';

function WhatMeta() {
  return (
    <div className='meta__whatmeta section__margin section__padding' id='whpt3'>
      <div className='meta__whatmeta-feature'>
        <Feature />
      </div>
      <div className='meta__whatmeta-heading'>
        <h1 className='gradient__text'>Imagine build something incredible</h1>
        <p> Explore o MetaVerso </p>
      </div>
      <div className='meta__whatmeta-container'>
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default WhatMeta;
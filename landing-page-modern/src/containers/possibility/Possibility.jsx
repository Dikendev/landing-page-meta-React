import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

function Possibility() {
  return(
   <div className="meta__possibility section__margin" id="possibility">
    <div className="meta__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="meta__possibility-content">
      <h4>Algum titulo legal aqui sera mostrado</h4>
      <h1 className="gradient__text">
        The possibilities are beyound your imagination
      </h1>
      <p>also asl asdlksald alskdl sd sds s sd sdsds dsds dsdsds sd sds sdsd </p>
      <h4>Request Early Acess to Get Started</h4>
    </div>
   </div>
  )
}

export default Possibility;
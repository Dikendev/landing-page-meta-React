import React from 'react';
import possibilityImage from '../../assets/metaimage.jpg';
import './possibility.css';

function Possibility() {
  return(
    <div className="meta__possibility-container" id="possibility">
    <div className="meta__possibility section__padding">
      <div className="meta__possibility-image">
        <img src={possibilityImage} alt="Photo by SHVETS production: https://www.pexels.com/photo/woman-in-sportswear-in-vr-glasses-7561927/"/>
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

    </div>
  )
}

export default Possibility;
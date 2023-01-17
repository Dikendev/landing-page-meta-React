import React from 'react';
import possibilityImage from '../../assets/metamulher.jpg';
import './possibility.css';

Possibility.defaultProps = {
  possibilityImageAlt:"Photo by SHVETS production: https://www.pexels.com/photo/woman-in-sportswear-in-vr-glasses-7561927/",

  subTitle:"Algum titulo legal aqui sera mostrado",
  title:"The possibilities are beyound your imagination",
  paragraph:"also asl asdlksald alskdl sd sds s sd sdsds dsds dsdsds sd sds sdsd",
  callToAction:"Request Early Acess to Get Started"
}

function Possibility({possibilityImageAlt,subTitle,title,paragraph,callToAction}) {
  return(
    <div className="meta__possibility-container" id="possibility">
      <div className="meta__possibility section__padding">
        <div className="meta__possibility-image">
          <img src={possibilityImage} alt={possibilityImageAlt}/>
        </div>
        <div className="meta__possibility-content">
          <h4>{subTitle}</h4>
          <h1 className="gradient__text">
            {title}
          </h1>
          <p>{paragraph}</p>
          <h4>{callToAction}</h4>
        </div>
      </div>
    </div>
  )
}

export default Possibility;
import React from 'react';
import {Feature} from '../../components';
import './feature.css';

const featuresData = [
  {
    title: "Improving and distribuing",
    text: "From all the name1"
  },
  {
    title: "Lets make a new awe",
    text: "From all the name2"
  },
  {
    title: "Agora é serio haha",
    text: "From all the name3"
  },
  {
    title: "All the country",
    text: "From all the name4"
  }
]

function Features() {
  return (
    <div className="meta__features section__margin section__padding " id="features">
      <div className="meta__features-heading">
        <h1 className="gradient__text">
          The Furure is Now and You  Just Need to Realize it. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="meta__features-container">
        {featuresData.map((item,index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div> 
  )
}

export default Features;
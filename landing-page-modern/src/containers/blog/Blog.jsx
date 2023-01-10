import React from 'react';
import { Article } from '../../components';
import { blog01,blog02,blog03,blog04,blog05 } from './imports';
import './blog.css';

function Blog() {
  return(
    <div className="meta__blog section__margin" id="blog">
      <div className="meta__blog-heading">
        <h1 className="gradient__text">
          Alot is happening,
          We are blogging about it.
        </h1>
      </div>
      <div className="meta__blog-container">
        <div className="meta__blog-container_group-a">
          <Article imgUrl={ blog01 } date="Jan 26, 2022" title={ "Meta é o futuro, sera mesmo?" }/>
        </div>
        <div className="meta__blog-container_group-b">
          <Article imgUrl={ blog02 } date="Fev 27, 2022" title={ "E agora oque sera feito nos próximos anos?" }/>
          <Article imgUrl={ blog03 } date="Mar 28, 2023" title={ "É isso ai que voce esta vendo, so aceita  " }/>
          <Article imgUrl={ blog04 } date="Abr 29, 2023" title={ "Imagina oque esta acontecendo aqui?" }/>
          <Article imgUrl={ blog05 } date="Mai 30, 2023" title={ "Novidades em breve no site, fique de olho" }/>
        </div>
      </div>
    </div>
  )
}

export default Blog;
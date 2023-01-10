import React from 'react';
import './article.css';

function Article({ imgUrl, date, title }) {
  return (
    <div className="meta__blog-container_article">
      <div className="meta__blog-container_article-image">
        <img src={ imgUrl } alt="blog" />
      </div>
      <div className="meta__blog-container_article-content">
        <div>
          <p>{ date }</p>
          <h3>{ title }</h3>
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
)
}

export default Article;
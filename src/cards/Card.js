import React from 'react'
import "../styles/news.css"

function Card({item}) {
  return (
    <div className='card-container'>
        <img src={item.urlToImage} alt="none" />
        <div className='card-info'>
          <h5> {item.title} </h5>
          <p> {item.description} </p>
        </div>
    </div>
  )
}

export default Card
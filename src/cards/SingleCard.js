import React from 'react'
import "../styles/singleNews.css"

function SingleCard({item}) {
  return (
    <div className='single-card-container'>
        <img src={item.urlToImage} alt="" />
        <div className="single-card-info">
            <h5> {item.title} </h5>
            <p> {item.descriptino} </p>
        </div>
    </div>
  )
}

export default SingleCard
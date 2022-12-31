import React from 'react'
import Card from '../cards/Card'
import "../styles/news.css"

function News({filteredNews}) {

  return (
    <div className='news-container'>
        {filteredNews.map((item) => (
            <Card item={item} />
        ))}
    </div>
  )
}

export default News
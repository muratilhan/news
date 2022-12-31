import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Slider({newss}) {
  return (
    <Carousel className='slider-container'>
      { newss.map((item => (
        <Carousel.Item className='slider-item'>
            <div className='slider-item-inner'>
                <img
                src={item.urlToImage}
                alt="First slide"
                />
                <div className='slider-infos'>
                    <h3> {item.title} </h3>
                    <p> {item.description}</p>
                </div>
            </div>
        </Carousel.Item>
      ))) }
    </Carousel>
  )
}

export default Slider
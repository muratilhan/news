import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import SingleCard from "../cards/SingleCard"
import "../styles/singleNews.css"

function SingleNews() {

    let location = useLocation();
    const category = location.pathname.split("/")[1]

    const [news, setNews] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
           const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8c9a35a1fd8045be8ea512efc772116e`)
           setNews(res.data.articles)
           console.log(res.data.articles)
        }
        fetchData();
    },[location, category])
  return (
    <div className='single-news-container'>
      <h3 > {category.toLocaleUpperCase()} ile ilgili haberler </h3>
      <br />
        { news.map(item => (
          <SingleCard item={item} />
        )) }
    </div>
  )
}

export default SingleNews
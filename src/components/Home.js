import React from 'react'
import {Button} from "react-bootstrap"
import Slider from './Slider'
import "../styles/home.css"
import { useState, useEffect } from 'react'
import axios from "axios"
import News from './News'
import Pagination from './Pagination'


const Home = () => {



    // Pagination
  const [newss, setNewss] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [newsForSlider, setNewsForSlider] = useState([]);
  const [filteredNews, setFilteredNews] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://newsapi.org/v2/top-headlines?country=tr&apiKey=8c9a35a1fd8045be8ea512efc772116e');
      setNewss(res.data.articles.slice(3,20));
      setFilteredNews(res.data.articles.slice(3,20))
      setNewsForSlider(res.data.articles.slice(1,3))
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const handleChange = (e) => {
    setFilteredNews(prev => prev.filter(item => item.title.toLowerCase().startsWith(e.target.value.toLowerCase())))
  } 
  const handleClick = (e) => {
    setFilteredNews(newss)
  }
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredNews.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {setCurrentPage(pageNumber)};
  
    
  return (
    <div className='home-container'>
    <Slider newss={newsForSlider} ></Slider>
    <div className='input-container'>
        <h5>Aramak istediğiniz haberi giriniz..</h5>
        <input onChange={(e)=>handleChange(e)} type="text" placeholder='ara'/><i onClick={handleClick} class="fa-regular fa-circle-xmark"></i>
      </div>
    <News filteredNews={currentPosts}></News>
    <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredNews.length}
        paginate={paginate}
      />
    </div>
  )
}

export default Home
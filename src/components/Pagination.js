import React from 'react'
import "../styles/news.css"
function Pagination({ postsPerPage, totalPosts, paginate }) {

const pageNumbers = [];

for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
}
      
  return (
    <div className='pagination-container'>
        <ul className='pagination'>
        {pageNumbers.map(number => (
            <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} className='page-link'>
                {number}
            </button>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Pagination
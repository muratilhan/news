import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/header.css"

function Header() {
  return (
    <div className='header-container'>
        <h1>Murat İlhan</h1>
        <Link className='about-link' to="/about">About Me</Link>
    </div>
  )
}

export default Header
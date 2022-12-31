import React from 'react'
import "../styles/footer.css"
function Footer() {
  return (
    <div className='footer-container'>
        <p> <span>Enoca</span>.com 
            © Copyright 2022 Enoca Gazetecilik ve Matbaacılık A.Ş 
        </p>
        <ul>
            <a target="_blank" href="https://www.linkedin.com/company/enoca/?originalSubdomain=tr"><li><i class="fa-brands fa-linkedin"></i></li></a>
            <a target="_blank" href=""><li><i class="fa-brands fa-square-instagram"></i></li></a>
            <a target="_blank" href="https://twitter.com/enoca_"><li><i class="fa-brands fa-twitter"></i></li></a>
            <a target="_blank" href=""><li><i class="fa-brands fa-youtube"></i></li></a>
        </ul>


    </div>
  )
}

export default Footer
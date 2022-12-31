import React from 'react'
import "../styles/about.css"

function About() {
  return (
    <div className='about-container'>
        <div className="about-container-title">
          <h3>Merhaba, Ben Murat</h3>
          <p>Uludağ Üniversitesinde 3. sınıf Bilgisayar Mühendisliği öğrencisiyim.</p>
          <ul className='about-icons'>
            <a className='icon' target="_blank" href="https://github.com/muratilhan"><li><i class="fa-brands fa-github"></i></li></a>
            <a className='icon' target="_blank" href="https://www.linkedin.com/in/murat-ilhan-2762b8219/"><li><i class="fa-brands fa-linkedin"></i></li></a>
          </ul>
        </div>
        <div className="about-container-text">
            <h3>Ne Yapıyorm ?</h3>
            <p>2020 yılında okula kayıt olmamla birlikte yazılım hayatına C Programlama ile başladım. Nesne yönelimli programlama dersinde Java kullanırken bir yandan Web programlamaya başladım.html, css, javascipt, react ile frontend çalışmalarına devam ederken hayalimdeki projeleri gerçekleştirebilmek için backend öğrenmem gerektiğini farkettim.Node.js ve MongoDB ile bu alanda araştırmalar yaptım.Şuanda MERN teknolojilerini kullanarak projeler geliştirmekteyim.
              
            </p>
            <h5>Projeler:</h5>
            <ul>
              <li>Not Defteri: React.js, node.js, mongoDB, JWT kullanarak Uludağ Üniversitesindeki öğrencilerin ders notları konusunda yardımlaşmaları için geliştirdiğim bir projedir.
                Ders notu paylaşma, güncelleme, silme gibi temel CRUD operatörlerini kullandım. 
                Ders notu paylaşan öğrencinin puan kazanmasıyla sıralamaya girmesini ve ilk 3 sırada olan öğrencilerin anasayfada görüntülenmesini sağladım.</li>
              <li>E-Commerce: Bu projede aynı teknolojileri kullandım. orta seviye (veya başlangıç) bir e-ticaret sitesinin sahip olduğu özellikleri ekledim.</li>  
              <li>Blog App: İnsanların anılarını ölümsüzleştirmeleri için post paylaşma özelliği olan bir web uygulaması.</li>
            </ul>
        </div>
    </div>
  )
}

export default About
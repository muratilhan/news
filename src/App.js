import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Navigation from './components/Navigation';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SingleNews from './pages/SingleNews';
import About from './pages/About';
import Footer from './components/Footer';



function App() {

  useEffect(()=>{
    const fetchData = async() => {
        const res = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=b205ed83427a4be99f52187d6697f5ff");
        console.log(res.data)
    }
    fetchData();
},[])
  
  return (
    <div className="App">

      <BrowserRouter>

        <Header></Header>
        <Navigation></Navigation>
        

        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/:category' element={<SingleNews/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>

        <Footer />

      </BrowserRouter>
 
    </div>
  );
}
//  
export default App;

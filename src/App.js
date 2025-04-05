
import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

function App() {
  const[playState, setPlayState] = useState(false);
  return (
   
    <div>
       <Navbar/>
       <Hero/>

       <div className="container">
        <Title subtitle='OUR PROGRAM' title='WHAT WE OFFER?'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subtitle='GALLERY ' title='CAMPUS PHOTOS'/>
        <Campus/>
        <Title subtitle='TESTIMONIALS' title='WHAT STUDENT SAYS!?'/>
        <Testimonials/>
        <Title subtitle='Contact Us ' title='Get in touch'/>
        <Contact/>
        <Footer/>
        
         </div>

        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      

    </div>

  
  );
}

export default App;

import React from 'react'
import AboutContent from '../component/AboutContent';
import Footer from '../component/Footer';
import { HeroImg2 } from '../component/HeroImg2';
import Navbar from '../component/Navbar';
const About = () => {
  return (
    <div>
            
    <Navbar/>
   
    <HeroImg2 heading="ABOUT" text="I m a friendly Front-End Developer."/>
    
    <AboutContent/>

    <Footer/>
    
    </div>
  )
}

export default About
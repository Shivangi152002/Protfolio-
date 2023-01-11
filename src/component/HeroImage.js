import React from 'react'
import "./HeroImage.css"
import bckgr from "../assets/bckgr.jpg"
import { Link } from "react-router-dom" 

const HeroImage = () => {

  return (
  <div className='hero'>
    <div className='mask'>
      <img className='into-img' src={bckgr} alt='img'/>
    </div>

  <div className='content'>
    <p  style={{color:"white"}}>HI, I'M A FREELANCER. </p>
    <h1  style={{color:"white"}}>React Developer</h1>
    <div>
      <Link to ="/project" className='btn'>Project</Link>
      <Link to ="/contact" className='btn btn-light'>Contact</Link>
    </div>
  </div>




  </div>
  
  )

}

export default HeroImage
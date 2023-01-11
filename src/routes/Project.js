import React from 'react'
import Footer from '../component/Footer';

import { HeroImg2 } from '../component/HeroImg2';

import Navbar from '../component/Navbar';
import { PricingCard}  from '../component/PricingCard';
import  {Work} from '../component/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
    <HeroImg2 heading="PROJECT." text="Some of my most recent work"/>
    <Work/>
    <PricingCard/>
    <Footer/>
    
    </div>
  )
}

export default Project;
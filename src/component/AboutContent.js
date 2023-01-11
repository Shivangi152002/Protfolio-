import "./AboutContent.css"
import {Link} from "react-router-dom";
import React from 'react';
import React2 from '../assets/react2.jpeg'
import React1 from '../assets/react1.jpeg'


export default function AboutContent() {
  return (
    <div className="about">
        <div className="left">
            <h1> Who Am I?</h1>
            <p>Im s react front-end developer. I create responsive secure website for my client</p>
            <Link to="/contact">
                <button className="btn">contact</button>
            </Link>
        </div>


        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src= {React2}
                    className="img" alt="true"
                    />
                </div>

                <div className="img-stack bottom">
                    <img src= {React1}
                    className="img" alt="true"
                    />
                </div>

            </div>
        </div>
        
        </div>
  )
}

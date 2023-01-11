
import "./WorkCard.css";

import React from 'react'
import {NavLink} from 'react-router-dom'

export const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image"/>
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
      <p>
       {props.view}
      </p>
      <div className="pro-btns">
        <NavLink to="url.com" className="btn">View
        </NavLink>
      </div>
    </div>
  </div>
  )
}

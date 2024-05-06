import React from 'react'
import './aboutcard.scss'
const AboutCard = ({ text, title, imgUrl }) => {
  return (
    <div className="about__card">
      <img src={imgUrl} alt="" className="about__card-img" />
      <h2 className="about__card-title">{title}</h2>
      <p className="about__card-text">{text}</p>
    </div>
  )
}

export default AboutCard
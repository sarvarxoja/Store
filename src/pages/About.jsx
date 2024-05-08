import React from 'react'
import '../styles/about.scss'
import imgUrl from '../assets/Images/about.png'
import { NavLink } from 'react-router-dom'
import AboutData from '../assets/Fetch-data/aboutData'
import AboutCard from '../Components/UI/AboutCard/AboutCard'
const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="contact__top">
          <NavLink className='contact__home' to='/'>Bosh sahifa</NavLink> /

          <NavLink className='contact__link' to='/about'>Biz Haqimizda</NavLink>
        </div>

        <div className="about__boxes">
          <div className="about__left">
            <h1 className="about__title">
              Biz haqimizda
            </h1>
            <p className="about__text">
              Lorem ipsum dolor sit amet consectetur. Pulvinar senectus elit diam arcu faucibus ultrices mauris cursus. Risus in eu dui luctus enim
            </p>
          </div>
          <div className="about__right">
            <img  className='about__images' src={imgUrl} alt="" />
          </div>
        </div>

        <div className="about__cards">
          {AboutData.map(item => (
            <AboutCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
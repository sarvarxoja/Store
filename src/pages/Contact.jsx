import React from 'react'
import '../styles/contact.scss'
import { NavLink } from 'react-router-dom'
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__top">
          <NavLink className='contact__home' to='/'>Bosh sahifa</NavLink> /

          <NavLink className='contact__link' to='/contact'>Aloqa</NavLink>
        </div>

        <div className="contact__boxes">
          <div className="contact__left">
            <div>
              <div className="contact__card">
                <div className="contact__box">
                  <span>  <i className="ri-phone-line"></i></span>
                  <p>Bizga Qo'ng'iroq Qiling</p>
                </div>
              </div>
              <p>Biz  24/7 kun tartibida ishlaymiz</p>
              <p>Raqam: <a href="tel:+998917777777">+998917777777</a></p>
            </div>
            <hr className="contact__hr" />
            <div>
              <div className="contact__card">
                <div className="contact__box">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>Bizga yozing</p>
                </div>
              </div>
              <p>Biz  24/7 kun tartibida ishlaymiz</p>
              <p>Email: <a href="mailto: customer@exclusive.com"> customer@exclusive.com</a></p>
              <p>Email: <a href="mailto: customer@exclusive.com"> customer@exclusive.com</a></p>
            </div>
          </div>
          <div className="contact__right">
            <form className='contact__form'>

              <div>
                <input className='contact__input' placeholder='Ismingiz' type="text" />
                <input className='contact__input' placeholder='Telefon Raqamingiz' type="number" />
              </div>

              <textarea className='contact__textarea' value='Siznin habaringiz' name="" id="">

              </textarea>

              <input type="submit" className='intro__btn contact__btn' value='Habar yuborish' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
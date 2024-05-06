import React from 'react'
import './footer.scss'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__cards">
                    <div className="footer__card">
                        <h2 className="footer__logo">Brand Logo</h2>
                        <p className="footer__text">
                            Biz ijtimoiy tarmoqlarda
                        </p>
                        <div className="footer__socials">
                            <i className="ri-twitter-line"></i>
                            <i className="ri-instagram-line"></i>
                            <i className="ri-linkedin-line"></i>
                            <i className="ri-facebook-line"></i>
                        </div>
                    </div>
                    <div className="footer__card">
                        <h3 className="footer__subtitle">
                            Aloqa
                        </h3>
                        <p className="footer__subtext">
                            Manzil: Toshkent sh
                        </p>
                        <p className="footer__subtext">
                            qwertyui@gmail.com
                        </p>
                        <p className="footer__subtext">
                          <a href="tel:998917777777">
                                +998917777777
                          </a>
                        </p>
                    </div>

                    <div className="footer__card">
                        <h3 className="footer__subtitle">
                            Haqimizda
                        </h3>
                        <p className="footer__subtext">
                            Maxfiylik Siyosati va
                            Shaxsiy Ma'lumotlarni
                            Himoya Qilish
                        </p>
                        <p className="footer__subtext">
                            Mahsulotlarni va
                            to’lovlarni qaytarish
                            siyosati
                        </p>

                    </div>

                <div className="footer__card">
                        <h3 className="footer__subtitle">
                          Savol Berish
                        </h3>
                        <form className='footer__form' >
                            <input className='footer__input' placeholder='Ismingiz' type="text" />
                            <input className='footer__input' placeholder='Telefon raqam' type="number" />
                            <input className='footer__input footer__question' placeholder='Savol berish' type="text" />
                            <input className='footer__submit intro__btn' type="submit" value='yuborish' />
                        </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
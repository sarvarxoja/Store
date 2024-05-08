import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import img1 from '../../../assets/Images/asus-left.png'
import img2 from '../../../assets/Images/asus-old.png'
import img3 from '../../../assets/Images/asus-orqa.png'
import img4 from '../../../assets/Images/asus-main.png'
import imgrating from '../../../assets/Images/five.png'

import './catalogitem.scss'
const CatalogItem = () => {

    const { name } = useParams()
    return (
        <div className="catalogitem">
            <div className="catalogitem__container">
                <div className="contact__top catalogitem__top">
                    <NavLink className='contact__home' to='/'>Bosh sahifa</NavLink> /
                    <NavLink className='contact__link contact__home' to='/catalogs'>Katalog</NavLink> /
                    <NavLink className='contact__link ' to='/catalog/notebook'>Notebook </NavLink>
                </div>
                <div className='catalogitem__boxes'>
                    <div className="catalogitem__left">
                        <div className="catalogitem__images">
                            <div className='catalogitem__images-box'>   <img className='catalogitem__pic' src={img1} alt="" /></div>
                            <div className='catalogitem__images-box'>   <img className='catalogitem__pic' src={img2} alt="" /></div>  <div className='catalogitem__images-box'>   <img className='catalogitem__pic' src={img3} alt="" /></div>  <div className='catalogitem__images-box'>   <img className='catalogitem__pic' src={img2} alt="" /></div>
                        </div>
                        <div className='catalogitem__img-card'>
                            <img className='catalogitem__img' src={img4} alt="" />
                        </div>
                    </div>
                    <div className="catalogitem__right">
                        <div className="catalogitem__card">
                            <h4 className="catalogitem__title">
                                ASUS ROG Strix SCAR 17 SE G733CX-LL091W Black Stealth
                            </h4>
                            <span className='catalogitem__rating'>
                                <img src={imgrating} alt="" />
                                <span>(150 Reviews)</span>
                            </span>
                            <h2 className="catalogitem__price">
                                $192.00
                            </h2>
                            <p className="catalogitem__text">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore possimus molestias nam autem voluptates sed, aperiam officia accusantium error eveniet.
                            </p>
                        </div>
                        <hr className='catalogitem__hr' />
                        <div className="catalogitem__box">
                            <div className='catalogitem__sircle'>
                                <h4 className="catalogitem__colors">
                                    Ranglari:
                                </h4>

                                <div className='catalogitem__span'></div>
                                <div className='catalogitem__span'></div>
                            </div>
                            <div className="catalogitem__box-card">
                                <div className='catalogitem__box-circle'>
                                    <i className="ri-truck-line"></i>
                                    <div className="catalogitem__box-carddiv">
                                        <h4 className="catalogitem__box-title">
                                            Bepul Yetkazib Berish
                                        </h4>
                                        <p className='catalogitem__box-text'>
                                            Yetkazib berish uchun pochta indeksingizni kiriting
                                        </p>
                                    </div>
                                </div>
                                <hr className='catalogitem__box-hr' />
                                <div className='catalogitem__box-circle'>
                                    <i className="ri-loop-left-fill"></i>
                                    <div className="catalogitem__box-carddiv">
                                        <h4 className="catalogitem__box-title">
                                            Qayta Yetkazib Berish
                                        </h4>
                                        <p className='catalogitem__box-text'>
                                            30 Kun ichida mahsulot va pullaringizni qaytarib berish.
                                            Tafsilotlar
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogItem
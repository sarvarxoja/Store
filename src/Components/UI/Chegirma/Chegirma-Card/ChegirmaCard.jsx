import React from 'react'
import { NavLink } from 'react-router-dom'
// import imgUrl from '../../../../assets/Images/stul.png'
const ChegirmaCard = ({ text, imgUrl, newPrice, oldPrice }) => {
    return (
        <div className='chegirma__card'>
            <div className="chegirma__card-box">
                <div>
                    <p className="chegirma__card-text">
                        -35%
                    </p>

                    <div className='chegirma__card-boxElement'>
                        <div>
                            <i className="ri-heart-line"></i>
                        </div>
                        <div>
                            <i className="ri-eye-line"></i>
                        </div>
                    </div>
                </div>
                <img className='chegirma__card-img' src={imgUrl} alt="" />
            </div>
            <h4 className="chegirma__card-title">
                {text}
            </h4>
            <div className='chegirma__card-bottom'>
                <div>
                    <h4 className="chegirma__price">
                        ${newPrice}
                    </h4>
                    <h4 className="chegirma__oldprice">
                        ${oldPrice}
                    </h4>
                </div>
                <NavLink to={`catalog/${newPrice, text}`} className='intro__btn chegirma__btn'>Buyurtma Berish</NavLink>
            </div>
        </div>
    )
}

export default ChegirmaCard
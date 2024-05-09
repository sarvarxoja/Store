import React from 'react'
import { NavLink } from 'react-router-dom'

const CatalogPhoneCard = ({ title, text, newPrice, img4, oldPrice }) => {
    return (
        <div className='chegirma__card catalogphone__card'>
            <div className="chegirma__card-box">
                <div>
                    <p className="chegirma__card-text">
                        -35%
                    </p>

                    <div>
                        <div>
                            <i className="ri-heart-line"></i>
                        </div>
                        <div>
                            <i className="ri-eye-line"></i>
                        </div>
                    </div>
                </div>
                <img className='catalogphone__images' src={img4} alt="" />
            </div>
            <h4 className="chegirma__card-title">
                {title.slice(0, 20)}
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
                <NavLink to='/catalog/item' className='intro__btn chegirma__btn'>Buyurtma Berish</NavLink>
            </div>
        </div>
    )
}

export default CatalogPhoneCard
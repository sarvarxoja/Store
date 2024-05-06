import React from 'react'
import './topnav.scss'
const TopNav = () => {
    return (

        <div className="topnav">
            <div className="topnav__container">
                <div className="topnav__left">
                    <i className="ri-map-pin-line"></i>
                    <span className='topnav__city'>
                        Shahar:Toshkent
                    </span>
                </div>

                <span className='topnav__text'>
                    Buyurtmalaringizni bepul yetkazib beramiz - atiga 1 kun ichida
                </span>
                <div className="topnav__right">
                    <i className="ri-login-box-line"></i>
                    <span className='topnav__login'>Log In</span>
                </div>
            </div>
        </div>
    )
}

export default TopNav
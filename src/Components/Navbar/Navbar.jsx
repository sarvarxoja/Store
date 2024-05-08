import React from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (

        <div className="navbar">
            <div className="navbar__container">
                <h2 className="navbar__logo">Brand Logo</h2>
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <NavLink to="/" className="navbar__link">Bosh sahifa</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to="/catalogs" className="navbar__link">Katalog</NavLink>
                    </li>     <li className="navbar__item">
                        <NavLink to="/about" className="navbar__link">Haqimizda</NavLink>
                    </li>     <li className="navbar__item">
                        <NavLink to="/contact" className="navbar__link">Aloqa</NavLink>
                    </li>
                </ul>

                <div className="navbar__right">
                    <div className="navbar__search">
                        <input className='navbar__input' placeholder='Siz nima qidiryapsiz?' type="text" />
                        <i className="ri-search-line"></i>
                    </div>
                    <a href='tel:+998910050913' className='navbar__btn'>
                        <i className="ri-phone-line"></i>
                        <span>
                            Aloqaga chiqish
                        </span>
                    </a>
                    <div className="navbar__burger">
                        <hr className="navbar__hr" />
                        <hr className="navbar__hr" />
                        <hr className="navbar__hr" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
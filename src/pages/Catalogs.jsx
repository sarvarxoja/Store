import React from 'react'
import '../styles/catalog.scss'
import Catalog from '../Components/UI/Catalog/Catalog'
import { NavLink } from 'react-router-dom'
const Catalogs = () => {
    return (
        <div className="catalog">
            <div className="catalog__container">
                <div className="contact__top">
                    <NavLink className='contact__home' to='/'>Bosh sahifa</NavLink> /

                    <NavLink className='contact__link' to='/catalog'>Kataloglar</NavLink>
                </div>
                <Catalog />
            </div>
        </div>
    )
}

export default Catalogs
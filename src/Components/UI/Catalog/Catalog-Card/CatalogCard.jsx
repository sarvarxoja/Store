import React from 'react'
import { NavLink, } from 'react-router-dom'

const CatalogCard = ({ text, imgUrl }) => {
    return (
        <NavLink to='/catalogs/elem'>

            <div className='catalog__card'>

                <img className='catalog__img' src={imgUrl} alt="" />
                <p className="catalog__text">
                    {text}
                </p>
            </div>
        </NavLink>
    )
}

export default CatalogCard
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const CatalogCard = ({ text, imgUrl }) => {
    return (
        <NavLink to={`/catalog/phones`}>

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
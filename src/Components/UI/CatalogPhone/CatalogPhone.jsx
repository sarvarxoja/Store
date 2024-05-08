import React from 'react'
import './catalogphone.scss'
import CatalogPhoneData from '../../../assets/Fetch-data/catalogPhone'
import CatalogPhoneCard from './CatalogPhoneCard/CatalogPhoneCard'
const CatalogPhone = () => {
    return (
        <div className="catalogphone">
            <div className="catalogphone__container">
                <div className="catalogphone__cards">
                    {CatalogPhoneData.map((item, index) => (
                        <CatalogPhoneCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CatalogPhone
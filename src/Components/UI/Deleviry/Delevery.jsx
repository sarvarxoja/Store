import React from 'react'
import './delevery.scss'
import DeleveryData from '../../../assets/Fetch-data/deleverrData'
import DeleveryCard from './Delevery-Card/DeleveryCard'
const Delevery = () => {
    return (
        <div className="delevery">
            <div className="delevery__container">
                <div className="delevery__cards">
                    {DeleveryData.map(item => (
                        <DeleveryCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Delevery
import React from 'react'

const DeleveryCard = ({ imgUrl, text, title }) => {
    return (
        <div className="delevery__card">
            <img src={imgUrl} alt="" className="delevery__img" />
            <h2 className="delevery__title">{title}</h2>
            <p className="delevery__text">{text}</p>
        </div>
    )
}

export default DeleveryCard
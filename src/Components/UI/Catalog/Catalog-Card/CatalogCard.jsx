import React from 'react'

const CatalogCard = ({text , imgUrl}) => {
  return (
      <div className='catalog__card'>

         <img src={imgUrl} alt="" />
          <p className="catalog__text">
              {text}
          </p>
      </div>
  )
}

export default CatalogCard
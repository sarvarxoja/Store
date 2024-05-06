import React from 'react'
import './allproduct.scss'
import AllProducData from '../../../assets/Fetch-data/allproductData'
import AlproductCard from './Allproduct-Card/AlproductCard'
const Allproduct = () => {
  return (

    <div className="allproduct">
      <div className="allproduct__container">
        <h2 className="allproduct__title">
          Barcha Mahsulotlarimiz
        </h2>
        <div className="allproduct__cards">
          {AllProducData.map(item => (
            <AlproductCard key={item.id}  {...item} />
          ))}
        </div>



        <button className='allproduct__btn intro__btn'>Barchasini Ko'rsatish</button>
      </div>
    </div>
  )
}

export default Allproduct
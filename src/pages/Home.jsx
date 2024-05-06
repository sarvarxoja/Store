import React from 'react'
import '../styles/home.scss'
import Intro from '../Components/UI/Intro/Intro'
import Catalog from '../Components/UI/Catalog/Catalog'
import Chegirma from '../Components/UI/Chegirma/Chegirma'
import NewProduct from '../Components/UI/NewProduct/NewProduct'
import Allproduct from '../Components/UI/AllProduct/Allproduct'
import Delevery from '../Components/UI/Deleviry/Delevery'
const Home = () => {
  return (
    <>
      <Intro />
      <Catalog />
      <Chegirma />
      <NewProduct />
      <Allproduct />
      <Delevery />
  
    </>
  )
}

export default Home
import React from 'react'
import '../styles/home.scss'
import Intro from '../Components/UI/Intro/Intro'
import Catalog from '../Components/UI/Catalog/Catalog'
import Chegirma from '../Components/UI/Chegirma/Chegirma'
import NewProduct from '../Components/UI/NewProduct/NewProduct'
import Allproduct from '../Components/UI/AllProduct/Allproduct'
import Delevery from '../Components/UI/Deleviry/Delevery'
import Ommabop from '../Components/UI/OmmaboProduct/Ommabop'
const Home = () => {
  return (
    <>
      <Intro />
      <Catalog />
      <Chegirma />
      <Ommabop />
      <NewProduct />
      <Allproduct />
      <Delevery />
    </>
  )
}

export default Home
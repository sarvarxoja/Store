import React from 'react'
import Navbar from '../Navbar/Navbar'
import Router from '../../Routes/Router'
import TopNav from '../TopNav/TopNav'
import Footer from '../UI/Footer/Footer'
import FooterBottom from '../UI/Footerbottom/FooterBottom'

const Layout = () => {
    return (
        <div className='Container'>
            <TopNav />
            <Navbar />
            <Router />
            <div className="FOOTER">
                <Footer />
                <FooterBottom />
            </div>
        </div>
    )
}

export default Layout
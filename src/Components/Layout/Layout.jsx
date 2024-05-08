import React from 'react'
import Navbar from '../Navbar/Navbar'
import Router from '../../Routes/Router'
import TopNav from '../TopNav/TopNav'
import Footer from '../UI/Footer/Footer'
import FooterBottom from '../UI/Footerbottom/FooterBottom'

const Layout = () => {
    return (
        <div className='Container'>
            <div className="wrapper">
                <div className="topNav">
                    <TopNav />
                </div>
                <nav className="NAVBAR">
                    <Navbar />
                </nav>
            </div>
            <Router />
            <div className="FOOTER">
                 <Footer />
               <FooterBottom />
            </div>
        </div>
    )
}

export default Layout
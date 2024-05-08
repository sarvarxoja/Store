import React from 'react'
import './chegirma.scss'
import Slider from 'react-slick';
import ChegirmaCard from './Chegirma-Card/ChegirmaCard';
import ChegirmaData from '../../../assets/Fetch-data/chegirma';
import { NavLink } from 'react-router-dom';
const Chegirma = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="chegirma">
            <div className="chegirma__container">
                <h2 className="chegirma__title">Yangi chegirmalar</h2>

                <div className="slider-container">
                    <Slider className='chegirma__slider' {...settings}>
                        {ChegirmaData.map(item => (
                            <ChegirmaCard key={item.id} {...item} />
                        ))}

                    </Slider>
                </div>

               <NavLink to='catalogs/elem'>
                    <button className='intro__btn chegirma__bottombtn'>Barchasini ko'rish</button>
               </NavLink>
            </div>
        </div>
    )
}

export default Chegirma
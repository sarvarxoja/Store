
import React from 'react'
import './ommabop.scss'
import Slider from 'react-slick'
import ChegirmaData from '../../../assets/Fetch-data/chegirma';
import ChegirmaCard from '../Chegirma/Chegirma-Card/ChegirmaCard';
const Ommabop = () => {
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
        <div className="ommabop">
            <div className="ommabop__container">
                <h2 className="ommabop__title">
                    Ommabop mahsulotlar
                </h2>
                <Slider className='ommabop__slider' {...settings}>
                    {ChegirmaData.map(item => (
                        <ChegirmaCard key={item.id} {...item} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Ommabop
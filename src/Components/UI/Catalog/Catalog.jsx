
import catalogCard from '../../../assets/Fetch-data/catalog';
import CatalogCard from './Catalog-Card/CatalogCard';
import './catalog.scss'
import Slider from 'react-slick';
const Catalog = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 5,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="catalog">
            <div className="catalog__container">
                <h2 className="catalog__title">
                    Kataloglar
                </h2>
                <div className="slider-container">
                    <Slider {...settings} className='catalog__cards'>
                        {catalogCard.map(item => (
                            <CatalogCard key={item.id} {...item} />
                        ))}

                    </Slider>
                </div>
            </div>
        </div>

       
    )
}

export default Catalog
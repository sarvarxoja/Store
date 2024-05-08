import './intro.scss'
import Slider from "react-slick";
import imgBg from '../../../assets/Images/ROGX.png'
import imgBg2 from '../../../assets/Images/laptop.png'
const Intro = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="intro">
            <div className="intro__container">
                <Slider {...settings}>
                    <div className='intro__slider'>
                        <div className="intro__slider-left">
                            <h2 className="intro__title">
                                New Laptop
                            </h2>
                            <p className="intro__text">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>

                            <button className='intro__btn'>Shop naw</button>
                        </div>

                        <img className='intro__leftimg' src={imgBg2} alt="" />
                    </div>
                    <div className='intro__slider'>
                        <div className="intro__slider__left">
                            <h2 className="intro__title">
                                New Laptop
                            </h2>
                            <p className="intro__text">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>

                            <button className='intro__btn'>Shop naw</button>
                        </div>
                        <img className='intro__leftimg' src={imgBg} alt="" />
                    </div>
                    <div className='intro__slider'>
                        <div className="intro__slider__left">
                            <h2 className="intro__title">
                                New Laptop
                            </h2>
                            <p className="intro__text">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>

                            <button className='intro__btn'>Shop naw</button>
                        </div>
                        <img className='intro__leftimg' src={imgBg} alt="" />
                    </div>
                    <div className='intro__slider'>
                        <div className="intro__slider__left">
                            <h2 className="intro__title">
                                New Laptop
                            </h2>
                            <p className="intro__text">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>

                            <button className='intro__btn'>Shop naw</button>
                        </div>
                        <img className='intro__leftimg' src={imgBg} alt="" />
                    </div>

                </Slider>
            </div>
        </div>
    )
}

export default Intro
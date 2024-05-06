import React from 'react'
import './newproduct.scss'
const NewProduct = () => {
    return (
        <div className="newproduct">

            <div className="newproduct__container">
                <h2 className="newproduct__title">
                    Yangi mahsulotlar
                </h2>
                <div className="newproduct__boxes">
                    <div className="newproduct__left">
                        <div>
                            <h3 className="newproduct__subtitle">
                                PlayStation 5
                            </h3>
                            <p className="newproduct__text">
                                Black and White version of the PS5 coming out on sale.
                            </p>

                            <a href="#" className="newproduct__link">Shop now</a>
                        </div>
                    </div>
                    <div className="newproduct__right">
                        <div className="newproduct__right-top">
                            <div>
                                <h3 className="newproduct__subtitle">
                                    Women’s Collections
                                </h3>
                                <p className="newproduct__text">
                                    Featured woman collections that give you another vibe.
                                </p>
                                <a href="#" className="newproduct__link">Shop now</a>
                            </div>
                        </div>
                        <div className="newproduct__right-bottom">
                            <div className="newproduct__right-middle">
                                <div>

                                    <h3 className="newproduct__subtitle">
                                        Speakers
                                    </h3>
                                    <p className="newproduct__text">
                                        Amazon wireless speakers
                                    </p>
                                    <a href="#" className="newproduct__link">Shop now</a>

                                </div>                         </div>
                            <div className="newproduct__right-middle">
                                <div>

                                    <h3 className="newproduct__subtitle">
                                        Perfume
                                    </h3>
                                    <p className="newproduct__text">
                                        GUCCI INTENSE OUD EDP
                                    </p>
                                    <a href="#" className="newproduct__link">Shop now</a>

                                </div>                         </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewProduct
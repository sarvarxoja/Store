import React from 'react'

const AlproductCard = ({ text, imgUrl, price, ratingImg, shopQuantity }) => {
    return (
        <div className='chegirma__card allproduct__card'>
            <div className="chegirma__card-box">
                <div>
                    <p className="chegirma__card-text allproduct__new">
                     NEW
                    </p>

                    <div>
                        <div>
                            <i className="ri-heart-line"></i>
                        </div>
                        <div>
                            <i className="ri-eye-line"></i>
                        </div>
                    </div>
                </div>
                <img src={imgUrl} alt="" />
            </div>
            <h4 className="chegirma__card-title allproduct__subtitle">
                {text}
            </h4>
            <div className='chegirma__card-bottom'>
                <div className='allproduct__box'>
                    <p className="allproduct__price">
                       ${price}
                    </p>
                    <img src={ratingImg} alt="" />
                    <span>({shopQuantity})</span>
                </div>

            </div>
        </div>
    )
}

export default AlproductCard
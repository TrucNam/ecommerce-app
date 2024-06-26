import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
const SpecialProduct = () => {
  return (
    <div className='col-6 mb-3'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img src='images/iphone-15.jpg' className='img-fluid' alt='casio'/>
                </div>
            <div className='special-product-content'>
                <h5 className='brand'>iPhone</h5>
                <h6 className='title'>
                iPhone 15 Pro 256GB 
                </h6>
                    <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"                
                    />
                    <p>
                    <span className='red-p'>$150</span> &nbsp; <strike>$200</strike>
                    </p>
                    <div className='discount-till d-flex align-items-center'>
                        <p className='mb-0'>
                            <b>2 </b>days
                        </p>
                        <div className='d-flex gap-10 align-items-center'>
                            <span className='badge rounded-circle p-3 bg-danger'>23</span>:
                            <span className='badge rounded-circle p-3 bg-danger'>59</span>:
                            <span className='badge rounded-circle p-3 bg-danger'>58</span>
                        </div>
                    </div>
                        <div className='prod-count my-3'>
                            <p>Products: 100</p>
                            <div className='progress'>
                                <div
                                className='progress-bar'
                                role="progressbar"
                                style={{ width: "25%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                        <Link className='button'>Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialProduct
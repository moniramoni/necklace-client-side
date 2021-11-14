import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div>
                <div className="banner-container d-grid justify-content-center align-items-center">
                    <div>
                        <h1 className="text-light fw-bold p-4">A woman needs ropes and ropes of <br /> pearls</h1>
                        <Link to="/productPage">
                            <button className="px-5 py-2 my-2 border-0 fs-4 fw-bold text-center text-dark bg-light">Explore Products</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;


// One pearl is better than a whole necklace of potatoes.
// A woman needs ropes and ropes of pearls.
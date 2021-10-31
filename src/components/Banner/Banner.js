import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner">
            <h1> <span className="text-danger fw-bold display-3">20%</span> <span className="text-primary fw-bold display-3">Discount at your first trip,</span> <span className="display-3 text-danger fw-bold">Grab yours!!</span></h1>
        </div>
    );
};

export default Banner;
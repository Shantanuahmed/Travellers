import React from 'react';

const New = () => {
    return (
        <div className="mt-5 container">
            <h1 className="text-center fw-bold text-info">Good News</h1>
            <h5 className="text-center">We are happy to announce that we are going to launch foreign trip packages from 1 January 2022. We will be covering below countries</h5>
            <div className="row text-center">
                <div className="col-12 col-lg-6">
                    <ul>
                        <li>India</li>
                        <li>Srilanka</li>
                        <li>Bhutan</li>
                        <li>Japan</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-6">
                    <ul>
                        <li>Singapore</li>
                        <li>Thailand</li>
                        <li>Maldivs</li>
                        <li>Combodia</li>
                    </ul>
                </div>
            </div>
            <h4 className="text-success text-center">Soon we will let you know about our packages!</h4>
        </div>
    );
};

export default New;
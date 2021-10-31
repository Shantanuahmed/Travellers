import React from 'react';

const Tips = () => {
    return (
        <div className="text-center mb-5">
            <h1 className="text-info mb-4">Special tour tips by Travellers</h1>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <ul>
                        <li>Never forget to take your accessories</li>
                        <li>Check your clothes,bag-pack,phone,charger</li>
                        <li>Always inform your closest one before trip</li>
                        <li>Always ensure support and safety</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-6">
                    <ul>
                        <li>Take tour guide or experienced one</li>
                        <li>Check your wallet and cards</li>
                        <li>Set emergency contact </li>
                        <li>Never trust a stranger in unknown places</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tips;
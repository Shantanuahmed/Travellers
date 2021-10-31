import React from 'react';
import { Link } from 'react-router-dom';
import erorr from '../image/error_404.jpg'
const NotFound = () => {
    return (

        <div className="text-center m-5 p-5 bg-secondary text-white ">
            <h1>Looks like you are lost!!!</h1>
            <img className="w-100" src={erorr} alt="" /> <br />
            <Link to='/home'>
                <button className="text-white, bg-info m-5 p-2 rounded ">Go back</button></Link>
        </div>

    );
};

export default NotFound;
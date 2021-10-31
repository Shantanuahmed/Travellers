import React from 'react';
import './Bookings.css';
const Bookings = (props) => {
    console.log(props.order)
    const { email, city, address, Package_id, name, phone, _id } = props.order;
    return (
        <div className="text-center order">
            <h5>Package Name: {Package_id}</h5>
            <h6>Client Name: {name}</h6>
            <p>City: {city}</p>
            <p>Address: {address}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>

        </div>
    );
};

export default Bookings;
import React, { useState } from 'react';

const MyOrder = (props) => {

    const { email, city, address, Package_id, name, phone, _id } = props.booking;

    const handleDelete = id => {
        const url = `https://dreadful-warlock-04090.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('Deleted')
                }
            })
    }

    return (
        <div className="text-center order">
            <h5>Package Name: {Package_id}</h5>
            <h6>Client Name: {name}</h6>
            <p>City: {city}</p>
            <p>Address: {address}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <button onClick={() => handleDelete(_id)}>Delete Order</button>

        </div>
    );
};

export default MyOrder;
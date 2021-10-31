import React, { useEffect, useState } from 'react';
import Bookings from '../Bookings/Bookings';

const AllBookings = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://dreadful-warlock-04090.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            {
                orders.map(order => <Bookings order={order} key={order._id}></Bookings>)
            }
        </div>
    );
};

export default AllBookings;
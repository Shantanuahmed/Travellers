import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../myOrder/MyOrder';

const MyBookings = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/orders')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
            {
                bookings.map(booking => {
                    if (user.email === booking.email) {
                        return <MyOrder booking={booking} key={booking._id}></MyOrder>
                    }
                    else {
                        <h2>you have no bookings yet</h2>
                    }
                })
            }
        </div>
    );
};

export default MyBookings;
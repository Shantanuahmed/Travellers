import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../myOrder/MyOrder';

const MyBookings = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://dreadful-warlock-04090.herokuapp.com/orders')
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
                        return <h2 className="text-center text-danger">You have no bookings yet</h2>
                    }
                })
            }
        </div>
    );
};

export default MyBookings;
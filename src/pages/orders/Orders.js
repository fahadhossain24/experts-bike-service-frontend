import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrderDetails from './OrderDetails';

const Orders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);

    //load orders information....
    useEffect(() => {
        const url = `http://localhost:5000/order?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'><span className='text-danger'>{user?.displayName}'s</span> orders</h2>
            {
                orders.map(order => <OrderDetails key={order.serviceId} order={order}></OrderDetails> )
            }
        </div>
    );
};

export default Orders;
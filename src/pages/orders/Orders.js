import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import OrderDetails from './OrderDetails';

const Orders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const [signOut] = useSignOut(auth);

    //load orders information....
    useEffect(() => {
        const getOrders = async() => {
            try{
                const {data} = await axios.get(`http://localhost:5000/order?email=${user.email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setOrders(data);
            }catch(error){
                // console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut();
                    navigate('/login')
                }
            }
        }
        getOrders();
    }, [user])
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'><span className='text-danger'>{user?.displayName}'s</span> orders</h2>
            {
                orders.map(order => <OrderDetails key={order.serviceId} order={order}></OrderDetails>)
            }
        </div>
    );
};

export default Orders;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useServiceDetail from '../../customHook/useServiceDetail';

const Checkout = () => {
    const [user] = useAuthState(auth)
    const {serviceId} = useParams();
    const [singleService] = useServiceDetail(serviceId);
    const navigate = useNavigate();

    const handlePlaceOrder = event => {
        event.preventDefault();
        const orderInfo = {
            name: event.target.name.value,
            email: event.target.email.value,
            serviceId: serviceId,
            serviceName: event.target.serviceName.value,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        // send order information to server
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            event.target.reset();
            navigate('/orders')
            toast('Your booking Complete. Please go to orders page to see your booking')
        })
    }
    
    return (
        <div className='w-50 mx-auto text-center mt-4'>
            <h2>Checkout for: <span className='text-danger'>{singleService.name}</span></h2>
            <form onSubmit={handlePlaceOrder} className='mt-4'>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" readOnly disabled /><br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" readOnly disabled /><br />
                <input className='w-100 mb-2' type="text" value={singleService.name} name="serviceName" readOnly disabled/><br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='your address' autoComplete='off' /><br />
                <input className='w-100 mb-2' type="number" name="phone" placeholder='your phone' autoComplete='off' /><br />
                <input className='w-50 btn btn-danger' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;
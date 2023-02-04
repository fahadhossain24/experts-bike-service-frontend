import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const navigate = useNavigate();

    const handleProccedCheckout = () => {
        navigate('/checkout');
    }
    return (
        <div>
            <h2>Your service: {serviceId}</h2>
            <button onClick={handleProccedCheckout} className='btn mx-auto d-block bg-danger text-white'>Procced Checkout</button>
        </div>
    );
};

export default ServiceDetail;
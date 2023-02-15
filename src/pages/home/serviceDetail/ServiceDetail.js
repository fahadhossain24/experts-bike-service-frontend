import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useServiceDetail from '../../customHook/useServiceDetail';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const navigate = useNavigate();
    const [singleService] = useServiceDetail(serviceId);

    const handleProccedCheckout = () => {
        navigate(`/checkout/${serviceId}`);
    }
    return (
        <div>
            <h2>Your service: {singleService.name}</h2>
            <button onClick={handleProccedCheckout} className='btn mx-auto d-block bg-danger text-white'>Procced Checkout</button>
        </div>
    );
};

export default ServiceDetail;
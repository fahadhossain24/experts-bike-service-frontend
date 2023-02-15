import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {_id, name, price, description, img} = service;
    const navigate = useNavigate();

    const handleNavigateToServiceButton = id => {
        navigate(`service/${id}`);
    }
    return (
        <div className='single-service'>
            <img src={img} alt="" />
            <h1 className='service-title'>{name}</h1>
            <p className='service-price'><small>Service Price: {price}</small></p>
            <p className='service-description'>{description}</p>
            <button onClick={() => handleNavigateToServiceButton(_id)} className='btn mb-3 custom-style-service'>Continue Booking</button>
        </div>
    );
};

export default Service;
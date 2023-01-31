import React, { useEffect, useState } from 'react';
import Service from '../service/Service';
import './Servicess.css'


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='container text-center' id='services'>
            <h2 className='mb-4 mt-4' style={{color: '#e44a58'}}>Our Services</h2>
            <div className='service-container'>
            {
                services.map(service => <Service
                    key={service.id}
                    service = {service}
                    
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;
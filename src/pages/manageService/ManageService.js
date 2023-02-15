import React from 'react';
import useServices from '../customHook/useServices';

const ManageService = () => {
    const [services, setServices] = useServices();

    const handleDelete = (id) => {
        const url = `http://localhost:5000/service/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const remainingServiceAfterDelete = services.filter(service => service._id !== id);
            setServices(remainingServiceAfterDelete);
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-danger'>Manage your Service</h2>
            {
                services.map(service => <h3 key={service._id}>{service.name}
                <button onClick={() => handleDelete(service._id)} className='btn ms-2' style={{backgroundColor: '#ffd66c'}}>Update</button>
                <button onClick={() => handleDelete(service._id)} className='btn btn-danger ms-2'>X</button>
                </h3>)
            }
        </div>
    );
};

export default ManageService;
import React from 'react';

const OrderDetails = ({order}) => {
    const {name, email, serviceId, serviceName, address, phone} = order;
    return (
        <div className='p-2 mt-2' style={{border:'1px solid green', borderRadius:'10px'}}>
            <h3 className='mb-0'>Service Name: {serviceName}</h3>
            <p className='mb-0'>Customar Name: {name}</p>
            <p className='mb-0'>Customar phone: {phone}</p>
            <p className='mb-1'>Customar Address: {address}</p>
            <a href="#">See status</a>
        </div>
    );
};

export default OrderDetails;
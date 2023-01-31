import React from 'react';

const Expert = ({expert}) => {
    const {name, img} = expert
    return (
        <div className='col-sm-6 col-md-2 gy-2'>
            <img className='w-100' src={img} alt="" />
        </div>
    );
};

export default Expert;
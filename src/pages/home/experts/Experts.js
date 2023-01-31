import React, { useEffect, useState } from 'react';
import Expert from '../expert/Expert'
const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch('experts.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div className='container' id='experts'>
            <h2 className='mb-4 mt-3 text-center' style={{color: '#e44a58'}}>Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;

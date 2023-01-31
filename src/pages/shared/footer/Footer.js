import React from 'react';
import './Footer.css'
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='bg-dark p-2 mt-5 text-white'>
            <h3 style={{color: '#e44a58'}}>copyright @ {currentYear} | Fahad Hossain</h3>
        </div>
    );
};

export default Footer;
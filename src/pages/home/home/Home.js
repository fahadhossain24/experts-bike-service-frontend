import React from 'react';
import Banner from '../banner/Banner';
import Experts from '../experts/Experts';
import Services from '../services/Services';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;
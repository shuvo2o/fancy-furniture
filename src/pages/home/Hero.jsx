import React from 'react';
import bannerImg from "../../assets/hero.png";

const Hero = () => {
    return (
        <div className='h-screen relative bg-cover bg-center text-white' style={{backgroundImage: `url(${bannerImg})`}}>
            {/* <img src={bannerImg} alt="Hero banner" /> */}
        </div>
    );
};

export default Hero;

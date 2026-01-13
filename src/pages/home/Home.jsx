import React from 'react';
import Hero from './Hero'
import WhyChoose from './WhyChoose';
import Products from '../shop/Products';
import Experience from './Experience';
import Materials from './Materials';

const Home = () => {
    return (
        <>
           <Hero/>
           <WhyChoose/>
           <Products headline= "Best Selling Products" />
           <Experience />
           <Materials />
           
        </>
    );
};

export default Home;
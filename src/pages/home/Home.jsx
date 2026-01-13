import React from 'react';
import Hero from './Hero'
import WhyChoose from './WhyChoose';
import Products from '../shop/Products';
import Experience from './Experience';
import Materials from './Materials';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <>
           <Hero/>
           <WhyChoose/>
           <Products headline= "Best Selling Products" />
           <Experience />
           <Materials />
           <Testimonials/>
           
        </>
    );
};

export default Home;
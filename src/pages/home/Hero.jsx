import React from 'react';
import bannerImg from "../../assets/hero.png";
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className='relative h-screen text-white bg-center bg-cover' style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className='px-2 pt-24 mx-auto space-y-6 text-center md:pt-44 md:w-1/2'>
                <h1 className='text-3xl font-medium lg:text-6xl lg:leading-tight'>
                    Make Your Interior More Minimalistic & Modern
                </h1>
                <p className='mx-auto text-xl font-normal lg:w-1/2'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

                {/* Search field */}
                <div className='relative z-30 inline-block'>
                    <input
                        type="text"
                        placeholder='Search Furniture'
                        className='w-full px-6 py-2 pr-12 border-gray-300 rounded-full bg-white/25 md:w-80 focus:outline-none'
                    />
                    <div className='absolute flex items-center justify-center w-8 h-8 text-white transition-colors -translate-y-1/2 rounded-full cursor-pointer right-1 top-1/2 bg-amber-500 hover:bg-amber-600'>
                        <FaSearch size={14} />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;

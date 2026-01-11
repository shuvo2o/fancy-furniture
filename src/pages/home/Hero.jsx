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
            {/* blur effect and tooltips */}
            <div className='absolute inset-x-0 bottom-0 -mb-2 h-3/4 bg-gradient-to-t from-white via-transparent to-transparent blur-sm'/>
            {/* tooltips */}
            <div className='absolute bottom-40 left-24 group'>
                <button className='relative p-4 text-xl rounded-full border-1 bg-white/20'>
                <div className='absolute hidden p-2 mb-3 space-x-1 transform -translate-x-1/2 rounded shadow-md group-hover:flex bg-white/20 bottom-full left-1/2-lg'>
                    <div className='bg-red-700 border-white rounded-full size-6'/>
                    <div className='bg-green-700 border-white rounded-full size-6'/>
                    <div className='bg-blue-700 border-white rounded-full size-6'/>
                    {/* tooltip arrow */}
                   <div className="absolute left-1/2 -bottom-2 w-0 h-0 -translate-x-1/2 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-white/35"></div>
                </div>
                </button>
                
            </div>
                
     

        </section>
    );
};

export default Hero;

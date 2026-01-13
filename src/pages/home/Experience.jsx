import React from 'react'
import experienceImg from '../../assets/expricences.png'
import Button from '../../components/Button'
const Experience = () => {
    return (
        <section className='flex flex-col items-center justify-between gap-8 px-4 mx-auto my-24 dark:bg-gray-800 section-container max-w-7xl md:flex-row md:gap-20'>
            <div className='md:w-1/2 md:h-[541px]'>
                <img src={experienceImg} alt="" className='w-full h-full' />
            </div>
            <div className='mx-auto md:w-1/2'>
                <h3 className='mb-4 text-lg font-semibold uppercase text-amber-500 '>experiences</h3>
                <h2 className='text-4xl font-bold capitalize lg:w-1/2 dark:text-white'>we provide you the best experience</h2>
                <h4 className='mb-5 text-black lg:w-2/3 dark:text-white'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</h4>
                <Button className="dark:text-white" text="More Info" />
            </div>
        </section>
    )
}

export default Experience

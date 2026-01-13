import React from 'react'
import materialsImg1 from '../../assets/material1.png'
import materialsImg2 from '../../assets/material2.png'
import materialsImg3 from '../../assets/material3.png'
import Button from '../../components/Button'
const Materials = () => {
    return (
        <section className='flex flex-col items-center justify-between gap-8 px-4 mx-auto my-24 section-container max-w-7xl md:flex-row md:gap-20'>

            <div className='mx-auto lg:1/2 md:w-1/2'>
                <h3 className='mb-4 text-lg font-semibold uppercase text-amber-500'>Materials</h3>
                <h2 className='text-4xl font-bold capitalize lg:w-1/2 dark:text-white'>Very serious materials for making furniture</h2>
                <h4 className='mb-5 text-black lg:w-2/3 dark:text-white'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</h4>
                <Button text="More Info"  />
            </div>
            <div className='grid items-center grid-cols-2 md:w-1/2 md:items-end md:grid-cols-3'>
                <div>
                    <img src={materialsImg1} alt="" />
                    <img src={materialsImg2} alt="" />
                </div>
                <div className='col-end-1 md:col-span-2'>
                     <img src={materialsImg3} alt="" className='w-full md:h-[541px]' />
                </div>
            </div>
        </section>
    )
}

export default Materials

import React from 'react'
import Button from '../../components/Button'

const WhyChooseUs = () => {
  return (
    <section className='px-4 mx-auto dark:bg-gray-800 section-container max-w-7xl'>
      <div className='grid grid-cols-1 gap-12 my-16 sm:my-24 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
        
        {/* Title Section */}
        <div className='flex items-center justify-center text-3xl font-bold text-center sm:text-left sm:text-4xl sm:justify-start'>
          <h2 className='dark:text-white'>Why <br className="hidden sm:block" /> Choosing Us</h2>
        </div>

        {/* Card 1 */}
        <div className="flex flex-col items-center text-center dark:text-white sm:items-start sm:text-left">
          <h3 className='mb-3 text-xl font-semibold dark:text-white md:text-2xl'>Luxury facilities</h3>
          <p className='mb-4 text-base text-gray-600 dark:text-white'>
            The advantage of hiring a workspace with us is that it gives you comfortable service and all-around facilities.
          </p>
          <Button text="More Info"/>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center dark:text-white sm:items-start sm:text-left">
          <h3 className='mb-3 text-xl font-semibold dark:text-white md:text-2xl'>Affordable Price</h3>
          <p className='mb-4 text-base text-gray-600 dark:text-white'>
            You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.
          </p>
          <Button text="More Info"/>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center dark:text-white sm:items-start sm:text-left">
          <h3 className='mb-3 text-xl font-semibold dark:text-white md:text-2xl'>Many Choices</h3>
          <p className='mb-4 text-base text-gray-600 dark:text-white'>
            We provide many unique work space choices so that you can choose the workspace to your liking.
          </p>
          <Button text="More Info"/>
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs
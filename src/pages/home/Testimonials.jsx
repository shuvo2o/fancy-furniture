import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { reviews } from '../../utils/reviews';
import Rating from '../../components/Rating';

import { Pagination, Navigation } from 'swiper/modules';
const Testimonials = () => {
    return (
        <section className='px-4 mx-auto section-container'>
            <div className='mb-12 text-center'>
                <h3 className='mb-4 text-lg font-semibold uppercase text-amber-500'>Materials</h3>
                <h2 className='text-4xl font-bold capitalize '>Our Client Reviews</h2>
            </div>
            {/* swiper */}
            <Swiper navigation={true}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews.map((review, index) => (
                        <SwiperSlide className='bg-no-repeat bg-cover rounded-lg ' style={{ backgroundImage: `url(${review.coverImg})` }}>
                            <div className="md:h-[547px] flex  justify-center items-center mb-4">
                                <div className='relative w-full p-4 mt-16 mb-5 bg-white border rounded-xl md:w-4/5'>
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="absolute object-cover -translate-x-1/2 rounded-full size-20 -top-5 left-1/2 ring-2 ring-primary"
                                    />
                                    <div className='mt-16 text-center'>
                                        <h3 className="text-lg font-semibold dark:text-black">{review.name}</h3>
                                        <p className="mb-3 dark:text-black">Verified Customer</p>
                                        <p className='mb-4 text-gray-500 dark:text-black'>"{review.review}"</p>

                                        <div className='flex items-center justify-center w-full mx-auto mb-2 text-center'>
                                            <Rating rating={review.rating} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </section>
    )
}

export default Testimonials

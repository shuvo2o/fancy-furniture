import React from 'react'
import { getImgURL } from '../../utils/getImageURL'
import Rating from '../../components/Rating'

const ProductCard = ({ product }) => {
  console.log(product)
  return (
    <div className=''>
      <div className='bg-[#FAFAFA]'>
        <img src={getImgURL(`${product.imageUrl}`)} alt="" />
      </div>
      <div className='p-6 bg-white shadow-sm'>
        <h4 className='mb-1 text-base'>{product.category}</h4>
        <h3 className='mb-2 text-xl font-semibold'>{product.name}</h3>
        <Rating rating={product.rating} />
      </div>
    </div>
  )
}

export default ProductCard

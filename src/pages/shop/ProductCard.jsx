import React, { useContext } from 'react'
import { getImgURL } from '../../utils/getImageURL'
import Rating from '../../components/Rating'
import { FiPlus } from 'react-icons/fi'
import { CartContext } from '../../context/CartContext'

const ProductCard = ({ product }) => {
const { addToCart} = useContext(CartContext)
  return (
    <div className=''>
      <div className='bg-[#FAFAFA]'>
        <img src={getImgURL(`${product.imageUrl}`)} alt="" />
      </div>
      <div className='p-6 bg-white shadow-sm'>
        <h4 className='mb-1 text-base'>{product.category}</h4>
        <h3 className='mb-2 text-xl font-semibold'>{product.name}</h3>
        <Rating rating={product.rating} />
        <div className='flex items-center justify-between mt-5'>
          <p className='text-lg font-bold text-black dark:text-white'><sup>$</sup> <span>{product.price}</span></p>
          <button
          onClick={()=>{
            addToCart(product)
          }}
          className='p-2 text-white bg-black rounded-full cursor-pointer hover:bg-amber-500'>
            <FiPlus/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

import React, { useState } from 'react'
import { products } from './../../utils/products';
import ProductCard from './ProductCard';
import btnIcon from '../../assets/button-icon.png';

const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectedCategory, setSelectedCategory] = useState("Chair");
  const [visibleProducts, setVisibleProducts] = useState(4);
  const filteredProducts = products.filter((product) => product.category === selectedCategory);

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  }

  return (
      <div className='px-4 mx-auto dark:bg-gray-800 section-container max-w-7xl'>
        <h2 className='my-8 text-4xl font-bold text-center dark:text-white'>{headline}</h2>
        {/* category */}
        <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16'>
          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-between'>
            {categories.map((category) => (
              <button
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProducts(4);
                }}
                key={category}
                className={`py-1.5 sm:px-5 px-8 rounded-full  hover:bg-amber-500 hover:text-white transition-colors ${selectedCategory === category ? 'bg-amber-500 text-white' : 'bg-white text-black'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* products grid */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4'>
          {
            filteredProducts.slice(0, visibleProducts).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          }
        </div>
        {/* load more button */}
        {
          visibleProducts < filteredProducts.length && (
            <div className='flex items-center justify-center mt-8'>
              <button
              onClick={loadMoreProducts}
              className='flex items-center gap-1 text-sm font-bold text-amber-500'>
                View All
                 <img src={btnIcon} alt="btn icon" />
              </button>
            </div>
          )
        }

      </div>
  
  )
}

export default Products


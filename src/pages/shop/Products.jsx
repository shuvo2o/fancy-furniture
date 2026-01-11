import React from 'react'

const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  return (
    <div>
      <div className='section-container'>
        <h2 className='my-8 text-4xl font-bold text-center'>{headline}</h2>
        {/* category */}
        <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16'>
          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-between'>
            {categories.map((category) => (
              <button
                key={category}
                className={`py-1.5 sm:px-5 px-8 rounded-full  hover:bg-amber-500 hover:text-white transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* products grid */}
        {/* <div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {filteredProducts.slice(0, visibleProducts).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Products


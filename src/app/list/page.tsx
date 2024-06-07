import Image from 'next/image'
import React from 'react'
import Filter from '../components/Filter'

import ProductList from '../components/ProductList'

const ListPage = () => {
  return (
    <div className='px-4 md:px-8 lag:px-16 xl:32 2xl:px-64 relative'>
      {/* Campaign List Page */}
      <div className='hidden bg-pink-50 px-4 sm:flex justify-between h-64'>
        <div className='w-2/3 flex flex-col items-center justify-center gap-8'>

          <h1 className='text-4xl font-semibold leading-[48px] text-gray-700  '>
            Grab upto 80% off on

            <br />
            Selected Items
          </h1>
          <button className='bg-arpan rounded-3xl text-white w-max text-sm px-5 py-3'>Shop Now</button>
        </div>

        <div className='relative w-1/3'>
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      {/* Filter */}
      <Filter />
      {/* Products  */}
      <h1 className='mt-12 font-semibold text-xl'>Shoes For You !</h1>
      <ProductList />
    </div>
  )
}

export default ListPage
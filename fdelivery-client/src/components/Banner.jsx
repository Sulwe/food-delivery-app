import React from 'react'

const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100%'>
      <div className='py-24 flex flex-col md:flex-row justify-between items-center gap-8'>
      <div className='md:w-1/2'>
        <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-black'>Dive into Delights of Delectable <span className='text-green'>Food</span></h2>
        <p className='text-xl text-[#4a4a4a]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
        <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
      </div>

      {/* images */}
      <div className='md:w-1/2'>
        <img src='/images/home/banner.png' alt='girl holding two dishes' />
        <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
          <div className='flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
            <img src='/images/home/b-food1.png' alt='spicy noodles' className='rounded-2xl'/>
            <div className='space-y-1'>
              <h5 className='font-medium mb-1'>Spicy noodles</h5>
              <div className='rating rating-sm'>
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
              <p className='text-red'>$12.00</p>
            </div>
          </div>
          <div className='flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
            <img src='/images/home/b-food1.png' alt='spicy noodles' className='rounded-2xl'/>
            <div className='space-y-1'>
              <h5 className='font-medium mb-1'>Spicy noodles</h5>
              <div className='rating rating-sm'>
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
              <p className='text-red'>$12.00</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    //<div className='max-w-screen-2xl container mx-auto xl: px-24 px-4'>Banner</div>
  )
}

export default Banner
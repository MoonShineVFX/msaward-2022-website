import React from 'react'

function Section5() {
  return (
    <div className='w-9/12 text-white mx-auto w-full flex flex-col justify-center items-center  relative mt-64'>
      <div className='flex w-3/5 justify-between items-center mb-16'>
        <div className='text-4xl font-bold'>夢想 × ROG <span className='text-red-600'>MAX</span>！禮物軍團</div>
        <div className='w-24'>
          <div className='text-xs text-zinc-400'>贊助單位</div>
          <img src={process.env.PUBLIC_URL+'/images/ROG_Logo.svg'} alt="" />
        </div>
      </div>
      <div className='w-full my-6'>
        <div className='w-3/5 bg-[#ffffff04] rounded-sm p-6 ml-auto relative h-56 mb-32 borderstyle borderstyle_center'>
            <div className='w-28'>
              <img src={process.env.PUBLIC_URL+'/images/a.png'} alt="" />
            </div>
            
            <div className='text-sm text-zinc-400 mt-10'>ROG Delta S 電競耳麥 (價值 $5,890)</div>
            <div className='w-2/5 absolute top-3 right-0'>
              <img src={process.env.PUBLIC_URL+'/images/gift/product1.png'} alt="" />
            </div>
           
        </div>
        <div className='w-3/5 bg-[#ffffff04] rounded-sm p-6 mr-auto relative h-56 mb-32 borderstyle borderstyle_center'>
            <div className='w-28'>
              <img src={process.env.PUBLIC_URL+'/images/b.png'} alt="" />
            </div>
            
            <div className='text-sm text-zinc-400 mt-10'>ROG Delta S 電競耳麥 (價值 $5,890)</div>
            <div className='w-2/6 absolute top-4 right-0'>
              <img src={process.env.PUBLIC_URL+'/images/gift/product2.png'} alt="" />
            </div>
           
        </div>
        <div className='w-3/5 bg-[#ffffff04] rounded-sm p-6 ml-auto relative h-56 mb-32 borderstyle borderstyle_center'>
            <div className='w-28'>
              <img src={process.env.PUBLIC_URL+'/images/c.png'} alt="" />
            </div>
            
            <div className='text-sm text-zinc-400 mt-10'>ROG Delta S 電競耳麥 (價值 $5,890)</div>
            <div className='w-3/5 absolute top-4 -right-16 z-10'>
              <img src={process.env.PUBLIC_URL+'/images/gift/product3.png'} alt="" />
            </div>
           
        </div>
      </div>

    </div>
  )
}

export default Section5
import React from 'react'

function Top3() {
  return (
    <div className='w-9/12 text-white mx-auto w-full  bg-[#ffffff04] rounded-lg flex relative mt-20'>
      <div className='videocontent w-4/6 top-5 right-10 relative'>
        <div className='text-[#73695c] text-3xl font-bold pl-16 mb-3'>A 賞</div>
        <div 
          className='bg-black w-full pt-[65%] bg-cover bg-no-repeat bg-center ' 
          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/work01.png'})`}}> </div>
      </div>
      <div className='text-sm box-border px-14 py-10 w-3/6  mt-6'>
        <div className='menu flex mb-6'>
          <div className='mr-16'>A賞 <br />違禁 Outlaw</div>
          <div className='mr-16'>B賞 <br />違禁 Outlaw</div>
          <div>C賞 <br />違禁 Outlaw</div>
        </div>
        <div className='info mt-16'>
          <div className='mb-5'>國立臺灣藝術大學 多媒體動畫藝術學系</div>
          <div className='mb-8'>"以一位「違法的母親」視角出發，在掙扎之中貫徹母愛。Beginning with the perspective of the ""Unlawful Mother"", motherly love was woven between struggle."</div>
          <div className='rounded-full border-2 px-4 py-2 w-24 border-zinc-500 hover:border-white'>詳細資料</div>
        </div>
      </div>
    </div>
  )
}

export default Top3
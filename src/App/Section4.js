import React from 'react'

function Section4() {
  return (
    <div className='w-9/12 text-white mx-auto w-full flex flex-col justify-center items-center  relative mt-64'>
       <div className='text-4xl font-bold'>評審團</div>
       <div className='w-full grid grid-cols-4 gap-5 mt-16'>
        <div className='w-full bg-[#ffffff04] rounded-sm p-5 text-center hover:'>
          <div 
            className='bg-cover bg-no-repeat bg-center w-20 h-20 rounded-full border-4 border-white mx-auto mb-5'
            style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/p01.png'})`}}
          ></div>
          <div className='text-sm font-bold'>鄭惠姍／模型總監</div>
          <div className='text-xs text-zinc-400 my-3'>＃獸科權威 ＃夢想貓派教主</div>
          <div className='text-sm'>夢想建模神仙姐姐 aka 動物專家，曾參與製作「斯卡羅」、「萬歲牌松鼠」等作品</div>
        </div>
        <div className='w-full bg-[#ffffff04] rounded-sm p-5 text-center'>
          <div 
            className='bg-cover bg-no-repeat bg-center w-20 h-20 rounded-full border-4 border-white mx-auto mb-5'
            style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/p02.png'})`}}
          ></div>
          <div className='text-sm font-bold'>鄭惠姍／模型總監</div>
          <div className='text-xs text-zinc-400 my-3'>＃獸科權威 ＃夢想貓派教主</div>
          <div className='text-sm'>夢想建模神仙姐姐 aka 動物專家，曾參與製作「斯卡羅」、「萬歲牌松鼠」等作品</div>
        </div>
        <div className='w-full bg-[#ffffff04] rounded-sm p-5 text-center'>
          <div 
            className='bg-cover bg-no-repeat bg-center w-20 h-20 rounded-full border-4 border-white mx-auto mb-5'
            style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/p03.png'})`}}
          ></div>
          <div className='text-sm font-bold'>鄭惠姍／模型總監</div>
          <div className='text-xs text-zinc-400 my-3'>＃獸科權威 ＃夢想貓派教主</div>
          <div className='text-sm'>夢想建模神仙姐姐 aka 動物專家，曾參與製作「斯卡羅」、「萬歲牌松鼠」等作品</div>
        </div>
        <div className='w-full bg-[#ffffff04] rounded-sm p-5 text-center'>
          <div 
            className='bg-cover bg-no-repeat bg-center w-20 h-20 rounded-full border-4 border-white mx-auto mb-5'
            style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/p04.png'})`}}
          ></div>
          <div className='text-sm font-bold'>鄭惠姍／模型總監</div>
          <div className='text-xs text-zinc-400 my-3'>＃獸科權威 ＃夢想貓派教主</div>
          <div className='text-sm'>夢想建模神仙姐姐 aka 動物專家，曾參與製作「斯卡羅」、「萬歲牌松鼠」等作品</div>
        </div>

        
       </div>
    </div>
  )
}

export default Section4